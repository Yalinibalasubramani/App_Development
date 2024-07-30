// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import './App.css';
// import { Login } from './component/Login';
// import { Register } from './component/Register';
// import About from './component/About'
// import Home from './component/Home';
// import ForgotPassword from "./component/ForgetPassword";
// import ResetPassword from "./component/ResetPassword";
// import Contact from "./component/Contact";
// import Admin from "./component/Admin";
// import Event from './component/Event';
// import MyProfile from "./component/MyProfile";
// import Bookings from "./component/Bookings";
// import Payment from "./component/Payment";
// import Addevent from "./component/Addevent";
// import BookingCards from "./component/BookingCards";
// import { AuthProvider } from "./component/AuthContext";



// function App() {
//   const [currentForm, setCurrentForm] = useState('Login');
  
//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }
  
//   return (
//     <AuthProvider>
//     <Router>
//       <div className="App">
      
     
//         <Routes>
      
//           <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />
//           <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
//           <Route path="/forgotpassword" element={<ForgotPassword onFormSwitch={toggleForm} />} />
//           <Route path="/resetpassword" element={<ResetPassword onFormSwitch={toggleForm} />} />
        
//           <Route path="/about" element={<About/>} />
//           <Route path="/payment" element={<Payment/>} />
//           <Route path="/addevent" element={<Addevent/>} />
//           <Route path="/bookevent" element={<BookingCards/>} />
         
//           <Route path="/booking" element={<Bookings/>} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/homeadmin" element={<Admin />} />
//           <Route path="/events" element={<Event />} />
//           <Route path="/my-profile" element={<MyProfile />} />
//           <Route path="/" element={<Navigate replace to="/login" />} />
//         </Routes>
//       </div>
//     </Router>
//     </AuthProvider>
//   );
// }
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import { Login } from './component/Login';
import { Register } from './component/Register';
import About from './component/About'
import Home from './component/Home';
import ForgotPassword from "./component/ForgetPassword";
import ResetPassword from "./component/ResetPassword";
import Contact from "./component/Contact";
import Admin from "./component/Admin";
import Event from './component/Event';
import MyProfile from "./component/MyProfile";
import Bookings from "./component/Bookings";
import Payment from "./component/Payment";
import Addevent from "./component/Addevent";
import BookingCards from "./component/BookingCards";
import { AuthProvider } from "./component/AuthContext";
import PrivateRoute from "./component/PrivateRoute";



function App() {
  const [currentForm, setCurrentForm] = useState('Login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <AuthProvider>
    <Router>
      <div className="App">
      
     
        <Routes>
      
          <Route path="/login" element={<Login onFormSwitch={toggleForm} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
          <Route path="/forgotpassword" element={<ForgotPassword onFormSwitch={toggleForm} />} />
          <Route path="/resetpassword" element={<ResetPassword onFormSwitch={toggleForm} />} />
        
          <Route path="/about" element={<About/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/addevent" element={<Addevent/>} />
          <Route path="/bookevent" element={<BookingCards/>} />
         
          <Route path="/booking" element={<Bookings/>} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/homeadmin" element={<Admin />} />
          <Route path="/events" element={<Event />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}
export default App;
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import LandingPage from './components/LandingPage';
// import Login from './components/Login';
// import Register from './components/Register';
// import Home from './components/Home';
// import About from './components/About';
// import Features from './components/Features'; // Correct import
// import Footer from './components/Footer';
// import ManagerHome from './components/ManagerHome';
// import { AuthProvider } from './components/AuthContext';
// import PrivateRoute from './components/PrivateRoute';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(() => {
//     return localStorage.getItem('isAuthenticated') === 'true';
//   });

//   useEffect(() => {
//     localStorage.setItem('isAuthenticated', isAuthenticated);
//   }, [isAuthenticated]);

//   return (
//     <div>
//       <AuthProvider>
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/register" element={<Register />} />
//         <Route 
//           path="/home" 
//           element={<PrivateRoute> <Home /> </PrivateRoute>} 
//         />
//         <Route 
//           path="/about" 
//           element={ <About /> } 
//         />
//         <Route 
//           path="/manager-home" 
//           element={<PrivateRoute> <ManagerHome /> </PrivateRoute>} 
//         />
        

//       </Routes>
//     </Router>
//     <Footer/>
//     </AuthProvider>
//     </div>
//   );
// }

// export default App;