
import { useState } from 'react'
import './Style.css'

function Signin() {

  return (
    <>
      <h3 className="txtcolorS">SignIn</h3>

      <div class="container">
        <form class="signin-form">
          <h1>Welcome Back!</h1>
          <p>Please sign in to continue</p>
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />

          <button type="submit">Sign In</button>
          <div class="extra-options">
            <a href="#">Forgot Password?</a>
            <span>Don't have an account? <a href="#">Sign Up</a></span>
          </div>
        </form>
      </div>

    </>
  )
}

export default Signin
