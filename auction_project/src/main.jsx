import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Signup from './Components/Signup.jsx'
import Signin from './Components/Signin.jsx'
import Navbar from './Components/Navbar.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />

    <Dashboard />

    <Signin />

    <Signup />
    
  </StrictMode>,
)
