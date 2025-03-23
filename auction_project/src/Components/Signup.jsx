import { useState } from 'react'
import './Style.css'

function Signup() {

  return (
    <>
      <h1 className="txtcolor">SignUP</h1>

      <div class="container">
        <form class="signup-form">
          {/* <h1>Create Account</h1> */}
          <p>Sign up to get started</p>
          <label for="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />

          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" required />

          <label for="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Confirm your password" required />

          <button type="submit">Sign Up</button>
          <p>Already have an account? <a href="#">Login</a></p>
        </form>
      </div>
    </>
  )
}

export default Signup
