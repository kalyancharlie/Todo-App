import axios from "axios";
import bcryptjs from "bcryptjs";

// Authenticate User for Login
export const authenticateUser = async (email, password) => {
  try {
    const userData = {
      email,
      password,
    };
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
  } catch (error) {
    console.log(`API ERROR: ${error}`)
  }
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
  } catch (error) {
    console.log(`API ERROR: ${error}`)
  }
};

// Renew Token
export const renewToken = async (refreshToken) => {
  try {
    const hashedPassword = await bcryptjs.hash(password, 10);
    const userData = {
      refreshToken,
    };
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
  } catch (error) {
    console.log(`API ERROR: ${error}`)
  }
};

// Logout User
export const logoutUser = async (refreshToken) => {
  try {
    const userData = {
      refreshToken,
    };
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
  } catch (error) {
    console.log(`API ERROR: ${error}`)
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
    console.log(`API ERROR: ${error}`)
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
    console.log(`API ERROR: ${error}`)
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
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, options);
    const data = await response.json();
  } catch (error) {
    console.log(`API ERROR: ${error}`)
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
    console.log(`API ERROR: ${error}`)
  }
};
