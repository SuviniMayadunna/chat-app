import React from 'react';
import Add from "../img/download.png";

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Maya Chat</span>
                <span className="title">Register</span>
            <form>
                
                <input type="text" placeholder='username'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:"none"}}type="file" id='file'/>
                <label htmlFor="file">
                  <img src={Add} alt=""/>
                  <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register