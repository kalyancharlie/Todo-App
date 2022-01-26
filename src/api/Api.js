import axios from "axios";
import bcryptjs, { hash } from "bcryptjs";

// Authenticate User for Login
export const authenticateUser = async (email, password) => {
  try {
    const userData = {
      email,
      password,
    };
    // Route POST /users/login
    // Sample Data - {status: Boolean, message: '', statusCode, user: {_id: }}
    const url = "http://localhost:8080/users/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    //data can be used
  } catch (error) {}
};

// Register User
export const registerUser = async (name, email, password) => {
  try {
    const hashedPassword = await bcryptjs.hash(password, 10);
    const userData = {
      name,
      email,
      password: hashedPassword,
    };
    // Hash the password here
    // Route POST /users/register
    // Sample Data - { message: '', status: Boolean, name: '', user_id: '' get status code from axios}
    const url = "http://localhost:8080/users/register";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, options);
    const data = await response.json();
  } catch (error) {}
};

// Renew Token
export const renewToken = async (refreshToken) => {
  try {
    const hashedPassword = await bcryptjs.hash(password, 10);
    const userData = {
      refreshToken,
    };
    // Route POST /users/refresh-token
    // Sample Data - { accessToken: '', status: '', message: '' get status code from axios}
    const url = "http://localhost:8080/users/refresh-token";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, options);
    const data = await response.json();
  } catch (error) {}
};

// Logout User
export const logoutUser = async (refreshToken) => {
  try {
    const userData = {
      refreshToken,
    };
    // Route DELETE /users/logout
    // Sample Data - { message: '', get status code from axios}
    const url = "http://localhost:8080/users/logout";
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, options);
    const data = await response.json();
  } catch (error) {}
};

// Create Todo
export const createTodo = async (user_id, todoText, isCompleted) => {
  try {
    const userData = {
      user_id,
      todoText,
      isCompleted,
    };
    // Route DELETE /todos/delete
    // Sample Data - { get status code from axios}
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
  } catch (error) {}
};

// Get Todos
export const getTodos = async (user_id) => {
  try {
    const userData = {
      user_id,
    };
    // Route GET /todos
    // Sample Data - { _id: , todos: [{_id, todoText, isCompleted}] get status code from axios}
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
  } catch (error) {}
};

// Update Todo
export const updateTodo = async (_id, isCompleted) => {
  try {
    const userData = {
      _id,
      isCompleted,
    };
    // Route PUT /todos/update
    // Sample Data - { _id, isCompleted, get status code from axios}
    const url = "http://localhost:8080/todos/update";
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, options);
    const data = await response.json();
  } catch (error) {}
};

// Delete Todo
export const deleteTodo = async (user_id, _id) => {
  try {
    const userData = {
      user_id,
      _id,
    };
    // Route DELETE /todos/delete
    // Sample Data - { get status code from axios}
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
  } catch (error) {}
};
