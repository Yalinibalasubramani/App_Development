import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/register.css'

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '', pass: '' });
    const navigate=new useNavigate();
    const handleRegister=()=>{
        navigate('/login');
    }

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const validateName = (name) => {
        return name.trim().length > 0;
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        let nameError = '';
        let emailError = '';
        let passError = '';

        if (!validateName(name)) {
            nameError = 'Name is required';
        }

        if (!validateEmail(email)) {
            emailError = 'Please enter a valid email address';
        }

        if (!validatePassword(pass)) {
            passError = 'Password must be at least 6 characters';
        }

        if (nameError || emailError || passError) {
            setErrors({ name: nameError, email: emailError, pass: passError });
            return;
        }

       
        console.log('Form submitted', { name, email, pass });
        
        navigate('/login');
        window.location.reload();
    };

    return (
        <div className="body">
        <div className="register_page">
            <form className="register" onSubmit={handleRegisterSubmit}>
                <h1 className="register_heading">Register</h1>
                <label htmlFor="name">Name</label>
                <input
                   
                    id="name"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  
                />
                {errors.name && <span className="error" style={{ color: 'red' }}>{errors.name}</span>}
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
                <button type="submit" className="register_button">Register</button>
                <button type="button" className="button" onClick={handleRegister}>Already have an account? Login</button>
            </form>
        </div>
        </div>
    );
};
