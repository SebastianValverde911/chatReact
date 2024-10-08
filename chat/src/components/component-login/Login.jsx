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

    const registryUser = () => {
        navigate('/registry-user');
    };

    return (
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
                    <button type='submit' className='btn-login'>LOGIN</button>
                    <hr className='line-separate' />
                    <button className='btn-create-account' onClick={registryUser}>CREATE ACCOUNT</button>
                </form>
            </div>
        </div>
    )
}

export default Login;