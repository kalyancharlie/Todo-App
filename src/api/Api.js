import { todoApi } from "../utils/AuthUtil";
import bcryptjs from "bcryptjs";
import {
  API_LOGIN_USER,
  API_REGISTER_USER,
  API_LOGOUT_USER,
  API_REFRESH_TOKEN,
  API_VERIFY_TOKEN,
  API_CREATE_TODO,
  API_GET_TODOS,
  API_UPDATE_TODO,
  API_DELETE_TODO,
} from "../constants/constants";

// Authenticate User for Login
export const authenticateUser = async (email, password) => {
  try {
    const response = await todoApi.post(API_LOGIN_USER, {email, password}).catch(error => {
      console.log('inside auth catch')
      console.log(error)
      throw error
    })
    console.log(response)
    return response?.data
  } catch (error) {
    console.log(`API ERROR:`);
    console.log(error?.response?.data)
    return error?.response?.data
  }
};

// Verify User Token
export const verifyToken = async () => {
  try {
    const response = await todoApi.post(API_VERIFY_TOKEN, {}).catch(error => {
      throw error
    })
    return response?.data
  } catch (error) {
    console.log(`API ERROR:`);
    console.log(error?.response?.data)
    return error?.response?.data
  }
}

// Register User
export const registerUser = async (name, email, password) => {
  try {
    const response = await todoApi.post(API_REGISTER_USER, {name, email, password}).catch(error => {
      console.log('inside Register catch')
      console.log(error)
      throw error
    })
    console.log(response)
    return response?.data
  } catch (error) {
    console.log(`API ERROR:`);
    console.log(error?.response?.data)
    return error?.response?.data
  }
};

// Renew Token
export const renewToken = async () => {
  try {
    const response = await todoApi.post(API_REFRESH_TOKEN, {}).catch(error => {
      console.log('inside RENEW TOKEN catch')
      console.log(error)
      throw error
    })
    console.log(response)
    return response?.data
  } catch (error) {
    console.log(`API RENEW-TOKEN ERROR:`);
    console.log(error?.response?.data)
    return error?.response?.data
  }
};

// Logout User
export const logoutUser = async () => {
  try {
    const response = await todoApi.delete(API_LOGOUT_USER, {}).catch(error => {
      console.log('inside LOGOUT catch')
      console.log(error)
      throw error
    })
    console.log(response)
    return response?.data
  } catch (error) {
    console.log(`API ERROR:`);
    console.log(error?.response?.data)
    return error?.response?.data
  }
};

// Create Todo
export const createTodo = async (user_id, todoText, isCompleted) => {
  try {
    const userData = {
      user_id,
      todoText,
      isCompleted,
    };
    const url = "http://localhost:8080/todos/delete";
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, options);
    const data = await response.json();
  } catch (error) {
    console.log(`API ERROR: ${error}`);
  }
};

// Get Todos
export const getTodos = async (user_id) => {
  try {
    const userData = {
      user_id,
    };
    const url = "http://localhost:8080/todos";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, options);
    const data = await response.json();
  } catch (error) {
    console.log(`API ERROR: ${error}`);
  }
};

// Update Todo
export const updateTodo = async (_id, isCompleted) => {
  try {
    const userData = {
      _id,
      isCompleted,
    };
    const url = "http://localhost:8080/todos/update";
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, options);
    const data = await response.json();
  } catch (error) {
    console.log(`API ERROR: ${error}`);
  }
};

// Delete Todo
export const deleteTodo = async (user_id, _id) => {
  try {
    const userData = {
      user_id,
      _id,
    };
    const url = "http://localhost:8080/todos/delete";
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, options);
    const data = await response.json();
  } catch (error) {
    console.log(`API ERROR: ${error}`);
  }
};
