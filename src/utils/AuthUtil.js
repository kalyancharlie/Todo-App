import axios from "axios";
import { LOCAL_STR_ACCESS_TOKEN, LOCAL_STR_USER, TODO_SESSION_AUTH_SUCCESS, TODO_SESSION_EXPIRED } from "../constants/constants";
import { renewToken } from "../api/Api";

// Read User from Local Storage
export const deSerializeData = (KEY, initialValue) => {
  const localData = localStorage.getItem(KEY);
//   console.log(`DESERIALIZING Key: ${KEY}`);
//   console.log(localData);
  try {
    if (initialValue instanceof Function) return initialValue();
    return JSON.parse(localData) || initialValue;
  } catch (error) {
    console.log(`Deserialize Error: ${error}`);
    return null;
  }
};

// Update Local Storage
export const serializeData = (KEY, data) => {
//   console.log(`SERIALIZING DATA:`);
//   console.log(data);
  try {
    if (data === undefined || data === null) return false;
    localStorage.setItem(KEY, JSON.stringify(data));
    return true;
  } catch (error) {
    console.log(`Serialize Error: ${error}`);
    return false;
  }
};

// Token Expiry Check
export const isTokenExpired = (token) => {
  try {
    const payloadToken = token.split(".")[1];
    if (!payloadToken) return true
    const payload = JSON.parse(window.atob(payloadToken));
    console.log(payload?.exp * 1000, Date.now())
    if (payload?.exp * 1000 > Date.now()) {
      return false;
    }
    return true;
  } catch (error) {
    console.log("TOKEN EXPIRY CHECK ERROR: ");
    console.log(error);
    return true;
  }
};

// Verify Session
export const verifySession = async (
    user,
    setUser,
    isTokenExpired,
    renewToken,
    verifyToken
  ) => {
    if (!user?.isAuthenticated) {
      return {status: false, message: ''}
    }
      console.log('access ', user)
    // Token Expired
    if (isTokenExpired(user.accessToken)) {
      // Get Access Token
      const { status, accessToken } = await renewToken();
      console.log('renew status', status, accessToken)
      if (status) {
        setUser(() => ({
          ...user,
          isAuthenticated: true,
          isLoggedIn: true,
          accessToken,
        }))
        return {status: true, message: TODO_SESSION_AUTH_SUCCESS, accessToken}
      }
      return {status, message: TODO_SESSION_EXPIRED}
    }
    // Token Not Expired - Validate Token
    const { status, message } = await verifyToken();
    console.log(status, message);
    if (status) {
      setUser(() => ({
        ...user,
        isAuthenticated: true,
        isLoggedIn: true,
      }))
      return {status: true, message: TODO_SESSION_AUTH_SUCCESS}
    } else {
      // Check using Refresh Token
      const renewStatus = await renewToken();
      console.log('RENEW STATUS NEW')
      console.log(renewStatus)
      if (renewStatus) {
        const { status, accessToken } = renewStatus
        if (status) {
          setUser(() => ({
            ...user,
            isAuthenticated: true,
            isLoggedIn: true,
            accessToken,
          }))
          return {status: true, message: TODO_SESSION_AUTH_SUCCESS}
        }
      }
      setUser(() => ({
        ...user,
        isAuthenticated: false,
        isLoggedIn: false,
        accessToken: ''
      }))
      return {status: false, message: TODO_SESSION_EXPIRED}
    }
  };

export const logOutSession = (user, setUser) => {
    try {
        setUser({isAuthenticated: false, isLoggedIn: false, accessToken: '', user_id: ''})
        return {logoutStatus: true}
    } catch (error) {
        return {logoutStatus: false}
    }
}

const retryAndUpdateAccessToken = async () => {
  try {
    const renewTokenStatus = await renewToken()
    if (!renewTokenStatus) return null
    const {status, accessToken} = renewTokenStatus
    if (!status) return null
    const userTokenData = JSON.parse(localStorage.getItem(LOCAL_STR_USER))
    if (!userTokenData) return null
    userTokenData.accessToken = accessToken
    localStorage.setItem(LOCAL_STR_USER, JSON.stringify(userTokenData))
    return accessToken
  } catch (error) {
    console.log("retry and update acces token error")
    console.log(error)
    return null;
  }
}

let isRetryCompleted = false
// Axios Interceptors
const todoApi = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    // baseURL: 'http://localhost:8080',
    withCredentials: true
});

todoApi.interceptors.request.use(
  (config) => {
    // console.log("REQ INTERCEPTOR");
    try {
    //   console.log(config);
      const {accessToken} = JSON.parse(localStorage.getItem(LOCAL_STR_USER));
      config.headers["x-api-key"] = accessToken ? accessToken : 'null'
      console.log('LOCAL STORAGE INTERCEPTED TOKEN', accessToken)
    } catch (error) {
    //   console.log("REQ INTERCEPTOR ERROR:");
    //   console.log(error)
    } finally {
      return config
    }
  },
  (error) => {
      console.log('REQ ERROR:')
      console.log(error)
      return Promise.reject(error)
    }
);

todoApi.interceptors.response.use(
  (config) => {
    console.log("RES INTERCEPTOR");
    console.log(config);
    return config;
  },
  async (error) => {
    console.log('RETRY STATUS', isRetryCompleted)
    //   console.log("RES ERROR:")
    //   console.log("res status", error?.response?.status)
    //   if (error?.response?.status === 403) {
    //       // Fetch new Access Token and update in local storage and also update the state.
    //       const resp = await null;
    //       const {status, accessToken} = {status: true, accessToken: 'new token value'};
    //       if (status) {
    //           localStorage.setItem(LOCAL_STR_ACCESS_TOKEN, JSON.stringify(accessToken))
    //           // Retry Request and return from here.
    //       }
    //   }
    //   console.log(Object.getOwnPropertyNames(error))
    //   console.log("stack", error.stack);
    //   console.log(error.message);
    //   console.log(error.config);
    //   console.log(error.response);
    //   console.log(error.request);
    //   console.log(error.isAxiosError);
    // console.log('STATUS CODE', error?.response?.status)
    // console.log('erro meesage', error?.message)
    // console.log('STATUS Message', error?.response?.message)
    // console.log('axios error', error?.isAxiosError)
    if (error?.response?.status === 404) {
        console.log(404)
        error.response.data = {status: false, message: 'Server Error. Please try again!'}
    } else if (error?.response?.status === 403 && !isRetryCompleted) {
      isRetryCompleted = true
      console.log('ERROR CAUGHT', 403)
      console.log('INSIDE RESPONSE - REQ RERY INTERCEPTOR')
      await retryAndUpdateAccessToken()
      return todoApi.request(error.config)
      // isRetryCompleted = true
      // const renewTokenStatus = await renewToken()
      // if (renewTokenStatus) {
      //   console.log('STATUS REFRESHED FOR TOKEN', renewTokenStatus.accessToken)
      //   console.log(renewTokenStatus)
      //   const {status, accessToken} = renewTokenStatus
      //   if (status) {
      //     const userTokenData = JSON.parse(localStorage.getItem(LOCAL_STR_USER))
      //     if (userTokenData) {
      //       userTokenData.accessToken = accessToken
      //       localStorage.setItem(LOCAL_STR_USER, JSON.stringify(userTokenData))
      //     }
      //     console.log('retyring request')
      //     // localStorage.setItem(LOCAL_STR_ACCESS_TOKEN, JSON.stringify(accessToken))
      //     return todoApi.request(error.config)
      //   }
      // }
    } else {
      isRetryCompleted = false
    }
     return Promise.reject(error)
    }
);

export { todoApi }