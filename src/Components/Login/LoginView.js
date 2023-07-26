import React from "react";

export const LoginView = () => {
    return (
        <div className="loginBox">
            <h2 className="login-title">Login</h2>
            <form className="login-form">
    
                <div class="group">      
                    <input className="username" type="text" required/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Username</label>
                </div>
                
                <div class="group2">      
                    <input className="pass" type="password" required/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Password</label>
                </div>
                <div>
                        <a href="url" className="pass-rec">Forgot password?</a>
                </div>
                <button class="login-btn">Login</button>
            </form>
        </div>
    )
}