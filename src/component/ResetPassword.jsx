import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/register.css'

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ pass: '' });
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleNewPasswordSubmit = () => {
    let passError = '';

    if (!validatePassword(newPassword)) {
      passError = 'Password must be at least 6 characters';
    } else if (newPassword !== confirmPassword) {
      passError = 'Confirm Password and New Password do not match';
    }

    if (passError) {
      setErrors({ pass: passError });
      setSuccess('');
      return;
    }

    // Password reset logic here
    console.log('Password has been reset successfully');

    setSuccess('Password Reset Successful!');
    setErrors({ pass: '' });

    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className='body'>

    
    <div className="resetpass">
      <h2>Reset Password</h2>
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div className="error-container">
        {errors.pass && <span className="error">{errors.pass}</span>}
      </div>
      <div className="success-container">
        {success && <span className="success">{success}</span>}
      </div>
      <button type="button" onClick={handleNewPasswordSubmit}>Submit</button>
    </div>
    </div>
  );
};

export default ResetPassword;
