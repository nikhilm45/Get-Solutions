import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import { PostQ } from './Components/PostQ/PostView';
import { LoginView } from './Components/Login/LoginView';
import { SignupView } from './Components/Signup/SignpView';
import {ForgotPassword} from './Components/Login/ForgotPassword';
import {ProtectedRoute} from './Components/Auth/ProtectedRoute';
import { AuthProvider } from './Components/Auth/AuthContext';


function App() {
return (
	<AuthProvider>
	<Router>
	<Navigation />
	<Switch>
		<ProtectedRoute path='/home' component={HomePage} />
		<ProtectedRoute path='/postq' component={PostQ} />
		<Route path='/login' component={LoginView} />
		<Route path='/signup' component={SignupView} />
		<Route path="/forgot-password" component={ForgotPassword} />
	</Switch>
	</Router>
	</AuthProvider>
);
}

export default App;
