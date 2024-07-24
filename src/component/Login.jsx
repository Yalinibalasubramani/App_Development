import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errors, setErrors] = useState({ email: '', pass: '' });
    const [success, setSuccess] = useState('');

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let emailError = '';
        let passError = '';

        if (!validateEmail(email)) {
            emailError = 'Please enter a valid email address';
        }

        if (!validatePassword(pass)) {
            passError = 'Password must be at least 6 characters';
        }

        if (emailError || passError) {
            setErrors({ email: emailError, pass: passError });
            setSuccess('');
            return;
        }

        
        console.log('Form submitted', { email, pass });
        setSuccess('Successfully logged in!');
        setErrors({ email: '', pass: '' });
        
        
    };

    return (
        <div className="login_page">
            <form className="login" onSubmit={handleLoginSubmit}>
                <h1 className="login_heading">Login</h1>
                <label htmlFor="email">Email</label>
                <input
                    
                    id="email"
                    placeholder="Enter your Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  
                />
                {errors.email && <span className="error" style={{ color: 'red' }}>{errors.email}</span>}
                <label htmlFor="pass">Password</label>
                <input
                    type="password"
                    id="pass"
                    placeholder="Enter your Password"
                    onChange={(e) => setPass(e.target.value)}
                 
                />
                {errors.pass && <span className="error" style={{ color: 'red' }}>{errors.pass}</span>}
                {success && <span className="success" style={{ color: 'green' }}>{success}</span>}
                <button type="submit">Login</button>
                <button className="button" type="button" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register</button>
            </form>
        </div>
    );
};
