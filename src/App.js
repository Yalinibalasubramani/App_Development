
import './App.css';
import { Login } from './component/Login';
import { Register } from './component/Register';
import React, { useState } from "react";


function App() {
  const[currentform, setCurrentform]=useState('Login');
  const toggleForm=(formName)=>{
    setCurrentform(formName);
  }
  return (
    <div className="App">{
       currentform==="Login"? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
    }
   
    </div>
    
  );
}

export default App;