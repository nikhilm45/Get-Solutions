import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';
import { useHistory } from "react-router-dom";

const Navbar = () => {

const history = useHistory();
const loginNav = () => history.push('/login');
const signinNav = () => history.push('/signup');

return (
	<div>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet"/>
        <Nav>
            <Bars />
            <NavMenu>
                <NavLink to='/' activeStyle>
                    Home
                </NavLink>
                <NavLink to='/postq' activeStyle>
                    Post
                </NavLink>
            </NavMenu>
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <button className="login" onClick={loginNav}>login</button>
            <button className="signup" onClick={signinNav}>Signup</button>
        </Nav>
	</div>
);
};

export default Navbar;
