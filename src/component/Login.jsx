import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import '../assets/register.css';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [role, setRole] = useState('');
    const [errors, setErrors] = useState({ email: '', pass: '', role: '' });
    const [success, setSuccess] = useState('');
    const [userID, setUserID] = useState(null);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const handleClick = () => {
        navigate('/register');
    };

    const handleForgotPassword = () => {
        navigate('/forgotpassword');
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let emailError = '';
        let passError = '';
        let roleError = '';

        if (!validateEmail(email)) {
            emailError = 'Please enter a valid email address';
        }

        if (!validatePassword(pass)) {
            passError = 'Password must be at least 6 characters';
        }

        if (!role) {
            roleError = 'Please select a role';
        }

        if (emailError || passError || roleError) {
            setErrors({ email: emailError, pass: passError, role: roleError });
            setSuccess('');
            return;
        }

        // Mock API call for authentication
        // Replace with actual API call
        const mockApiResponse = {
            userID: 1, // example userID
            role: role, // Admin or Organizer based on selection
        };

        // Simulate a successful login
        if (mockApiResponse) {
            setUserID(mockApiResponse.userID);
            setRole(mockApiResponse.role);
            setSuccess('Successfully logged in!');
            setErrors({ email: '', pass: '', role: '' });

            setTimeout(() => {
                navigate('/home');
            }, 2000); 
        } else {
            setErrors({ email: '', pass: '', role: 'Invalid email, password, or role' });
            setSuccess('');
        }
    };

    return (
        <div className="body">
            <div className="login_page">
                <form className="login" onSubmit={handleLoginSubmit}>
                    <h1 className="login_heading">Login</h1>
                    <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email</label>
                    <input
                        id="email"
                        placeholder="Enter your Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="error" style={{ color: 'red' }}>{errors.email}</span>}
                    
                    <label htmlFor="pass"><FontAwesomeIcon icon={faLock} /> Password</label>
                    <input
                        type="password"
                        id="pass"
                        placeholder="Enter your Password"
                        onChange={(e) => setPass(e.target.value)}
                    />
                    {errors.pass && <span className="error" style={{ color: 'red' }}>{errors.pass}</span>}
                    
                    <label htmlFor="role"><FontAwesomeIcon icon={faUser} /> Role</label>
                    <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="">Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Organizer">Organizer</option>
                    </select>
                    {errors.role && <span className="error" style={{ color: 'red' }}>{errors.role}</span>}

                    {success && <span className="success" style={{ color: 'green' }}>{success}</span>}
                    
                    <button className="forgot_password" type="button" onClick={handleForgotPassword}>Forgot Password?</button>
                    <button type="submit">Login</button>
                    <button className="button" type="button" onClick={handleClick}>Don't have an account? <span className="nav">Register</span></button>
                </form>
            </div>
        </div>
    );
};

export default Login;
