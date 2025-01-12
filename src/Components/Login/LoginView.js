// import React, { useEffect } from "react";
// import LoginApi from "../Api/LoginApi";
import React from "react";
import { Link } from 'react-router-dom';

export const LoginView = () => {
    // const demoFunc = () => {
    //     LoginApi.getDemo();
    // }
    // useEffect(() => {
    //     demoFunc();
    // }, []);
    return (
        <div className="loginBox">
            <h2 className="login-title">Login</h2>
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
                        <Link to="/forgot-password" className="pass-rec">Forgot password?</Link>
                </div>
                <button className="login-btn">Login</button>
            </form>
        </div>
    )
}