export const EMAIL_PATTERN = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

// Local Storage Keys
export const LOCAL_STR_USER = '__TODO_APP_USER_AUTH'
export const LOCAL_STR_TODOS = '__TODO_APP_USER_TODOS'
export const LOCAL_STR_ACCESS_TOKEN = '__TODO_APP_TOKEN'

// API Routes
export const API_LOGIN_USER = '/users/login'
export const API_REGISTER_USER = 'users/register'
export const API_LOGOUT_USER = '/users/logout'
export const API_REFRESH_TOKEN = '/users/refresh-token'
export const API_VERIFY_TOKEN = '/users/verify-token'

export const API_CREATE_TODO = '/todos/add'
export const API_GET_TODOS = '/todos/all'
export const API_UPDATE_TODO = '/todos/update'
export const API_DELETE_TODO = '/todos/delete'

// Front End Routes
export const TODO_LOGIN = '/login'
export const TODO_REGISTER = '/register'
export const TODO_DASHBOARD = '/dashboard'
export const TODO_404 = '/page-not-found'
export const TODO_ROOT_REDIRECT = TODO_LOGIN

// Message Constants
export const TODO_SESSION_EXPIRED = "Session Expired. Login Again!"
export const TODO_SESSION_AUTH_SUCCESS = 'Auth Success!'
export const TODO_SESSION_LOGOUT = 'Logout Success!'