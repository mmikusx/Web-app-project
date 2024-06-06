import React, {useState} from "react";
import axios from "axios";
import '../../stylesheets/Login.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', {username, password});
            console.log("Login successful");
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            setError(error.response?.data || "An error occurred during login");
            alert(error.response?.data || "An error occurred during login");
        }
    };

    return (
        <div className="loginForm">
            <h2>Login</h2>
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
    );
};

export default Login;