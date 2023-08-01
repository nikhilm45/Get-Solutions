import React from "react";

export const SignupView = () => {
    return (
        <div className="loginBox">
            <h2 className="login-title">Sign Up</h2>
            <form className="login-form">
    
                <div className="group">      
                    <input className="username" type="text" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Username</label>
                </div>
                
                <div className="group2">      
                    <input className="pass" type="password" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Password</label>
                </div>
                <div>
                        <a href="/login" className="pass-rec">Forgot password?</a>
                </div>
                <button className="login-btn">SignUp</button>
            </form>
        </div>
    )
}