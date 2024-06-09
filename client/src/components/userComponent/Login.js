import React, { useState } from "react";
import axios from "axios";
import '../../stylesheets/Login.css';

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); // New state for success message

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', { username, password });
            console.log("Login successful");
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.userId);
            onLogin(response.data.token, response.data.userId);
            setSuccessMessage("Login successful!"); // Set success message
            setError(""); // Clear error message
        } catch (error) {
            // console.log("Error: ", error);
            setError(error.response?.data || "An error occurred during login");
            // alert(error.response?.data || "An error occurred during login");
        }
    };

    return (
        <div className="main-container">
            <div className="loginForm">
                <h2>Login</h2>
                {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
                {error && <p className="error-message">{error}</p>} {/* Display error message */}
                <input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="login-button" onClick={handleLogin}>Log In</button>
            </div>
        </div>
    );
};

export default Login;
