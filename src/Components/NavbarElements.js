import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #5264AE;
height: 35px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((75vw - 1000px) / 2);
`;

export const NavLink = styled(Link)`

color: #ffffff;
text-decoration: none;
padding: 0 1rem;
font-size: 1.4rem;
&.active {
    font-size: 1.3rem;
	color: #ffffff;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #ffffff;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
@media screen and (max-width: 768px) {
	display: none;
    
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #ffffff;
padding: 10px 22px;
color: #3399ff;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #3399ff;
	color: #ffffff;
    border: 1px solid;
    border-color: #000000;
}
`;
