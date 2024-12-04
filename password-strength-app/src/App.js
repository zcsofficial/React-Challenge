import React, { useState } from 'react';


function App() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const calculateStrength = () => {
        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        return strength;
    };

    const strength = calculateStrength();
    const strengthLabel = ['Weak', 'Moderate', 'Strong', 'Very Strong'];

    return (
        <div className="app">
            <div className="form-container">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username" className="form-input" required />
                    <input type="email" placeholder="Email" className="form-input" required />
                    <div className="password-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="toggle-btn"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    <button type="submit" className="submit-btn">Register</button>
                </form>
                <p>Password strength: <strong>{strengthLabel[strength - 1] || 'Too Weak'}</strong></p>
                <ul className="password-rules">
                    <li className={password.length >= 8 ? 'valid' : ''}>At least 8 characters</li>
                    <li className={/[A-Z]/.test(password) ? 'valid' : ''}>Contains uppercase letter</li>
                    <li className={/[0-9]/.test(password) ? 'valid' : ''}>Contains a number</li>
                    <li className={/[^A-Za-z0-9]/.test(password) ? 'valid' : ''}>Contains special character</li>
                </ul>
            </div>
        </div>
    );
}

export default App;
