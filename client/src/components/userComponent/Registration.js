import React,  {useState} from "react";
import '../../stylesheets/Registration.css';

function Registration() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegistration = () => {
        console.log("Registering user with username:", username, "password:", password);
    };

    return (
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
    );
};

export default Registration;