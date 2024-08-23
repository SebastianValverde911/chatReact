import logo from '../../logo.svg';
import React from "react";
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const ingresarApp = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const pass = e.target.pass.value;

        console.log(email,pass);

        navigate('/home');

        e.target.email.value = '';
        e.target.pass.value = '';
    };

    return (
        <div>
            <div className='container-all-login'>
                <div className='container-logo'>
                    <img className="App-logo" src={logo} />
                </div>
                <div className='container-form'>
                    <form onSubmit={ingresarApp}>
                        <label>Email</label>
                        <input type='text' name="email" />
                        <label>Password</label>
                        <input type='password' name="pass" />
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;