import React, {useEffect, useState } from 'react';
import googleIcon from '../../images/googleIcon.png'
import { useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

import './Login.css';
import NavBar from '../HomePage/Navbar/NavBar';

const Login = () => {
    const [error, setError] = useState({});
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const [allAdmin, setAllAdmin] = useState([]);
    const checkAdmin = (email) => {
        let isAdmin;
        for (let i = 0; i < allAdmin.length; i++) {
            const element = allAdmin[i];
            if (element.email === email) {
                isAdmin = true;
                break;
            }
            else {
                isAdmin = false;
            }
        }
        localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
    }
    useEffect(() => {
        fetch('https://spark-skill-server.onrender.com/showAllAdmin')
            .then(res => res.json())
            .then(data => {
                setAllAdmin(data);
            })
    }, []) 

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const user = result.user;
                console.log('login successfully', result.user);
                localStorage.setItem("name", JSON.stringify(user.displayName));
                localStorage.setItem("email", JSON.stringify(user.email));
                checkAdmin(user.email);
                history.replace(from);
                history.go(0);
            })
            .catch(error=> {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError({ errorCode, errorMessage });
                console.log(setError);   
            });
    }

    return (
        <div className="container">
            <NavBar></NavBar>
            <div className="mt-5"></div>
            <div className="text-center"></div>
            <div className="login-box col-md-6 offset-md-3">
                <h4 className="font-weight-bold text-center text-brand">Login With</h4>
                <button className="my-3" onClick={handleGoogleSignIn}>
                    <img src={googleIcon} alt="google-icon" /> Continue with Google
                </button>
                <p className="text-center">Don’t have an account?
                    <a target="blank" href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp"> Create an account</a>
                </p>
                <p style={{ color: 'red' }}>{error.errorCode} {error.errorMessage}</p>
            </div>
        </div>
    );
};

export default Login;