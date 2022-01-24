import axios from "axios";
import bcryptjs from "bcryptjs";

// Authenticate User for Login
export const authenticateUser = async (email, password) => {
    try {
        // Route POST /users/login
        // Sample Data - {status: Boolean, message: '', statusCode, user: {_id: }}
    } catch (error) {

    }
}

// Register User
export const registerUser = async (name, email, password) => {
    try {
        // Hash the password here
        // Route POST /users/register
        // Sample Data - { message: '', status: Boolean, name: '', user_id: '' get status code from axios}
    } catch (error) {

    }
}

// Renew Token
export const renewToken = async (refreshToken) => {
    try {
        // Route POST /users/refresh-token
        // Sample Data - { accessToken: '', status: '', message: '' get status code from axios}
    } catch (error) {

    }
}

// Logout User
export const logoutUser = async (refreshToken) => {
    try {
        // Route DELETE /users/logout
        // Sample Data - { message: '', get status code from axios}
    } catch (error) {

    }
}

// Create Todo
export const createTodo = async (user_id, todoText, isCompleted,) => {
    try {
        // Route DELETE /todos/delete
        // Sample Data - { get status code from axios}
    } catch (error) {

    }
}

// Get Todos
export const getTodos = async (user_id) => {
    try {
        // Route GET /todos
        // Sample Data - { _id: , todos: [{_id, todoText, isCompleted}] get status code from axios}
    } catch (error) {

    }
}

// Update Todo
export const updateTodo = async (_id, isCompleted) => {
    try {
        // Route PUT /todos/update
        // Sample Data - { _id, isCompleted, get status code from axios}
    } catch (error) {

    }
}

// Delete Todo
export const deleteTodo = async (_id) => {
    try {
        // Route DELETE /todos/delete
        // Sample Data - { get status code from axios}
    } catch (error) {

    }
}

