import React,  {useState} from "react";
import axios from "axios";
import '../../stylesheets/Registration.css';

function Registration() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegistration = async () => {
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/register', {username, password});
            console.log("Registration successful");
        } catch (error) {
            setError(error.response?.data || "An error occurred during registration");
            alert(error.response?.data || "An error occurred during registration");
        }
    };

    return (
        <div className="main-container">
            <div className="registerForm">
                <h2>Register</h2>
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
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <button className="register-button" onClick={handleRegistration}>Register</button>
            </div>
        </div>
    );
};

export default Registration;