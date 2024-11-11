import logo from '../../logo.svg';
import React, { useContext } from "react";
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Service from '../../services/services';
import Alert from '../component-alert/Alert';
import { useDispatch } from 'react-redux';
import { showAlert,hideAlert } from '../../store/reducerAlert/alertSlice';
import { userActive } from '../../store/reducerUser/userSlice';
import { UserContext } from '../../context/UserContex';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);
    const ingresarApp = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const pass = e.target.pass.value;

        Service.login(email,pass).then(response => {
            if(response.data.ok) {
                dispatch(userActive({data:response.data.usuario}));
                dispatch(showAlert({type:'success',message:response.data.msg}));
                setUser(response.data.usuario);
                setTimeout(() => {
                    dispatch(hideAlert()) 
                    navigate('/home');
                }, 2000);
            } else {
                console.log(response.data.msg);
                dispatch(showAlert({type:'error',message:response.data.msg}));
                setTimeout(() => {
                    dispatch(hideAlert()) 
                }, 2000);
            }
        }).catch((error)=>{
            console.log(error.response.data.msg);
            dispatch(showAlert({type:'error',message:error.response.data.msg}));
            setTimeout(() => {
                dispatch(hideAlert()) 
            }, 2000);
        })
    };

    const registryUser = () => {
        navigate('/registry-user');
    };

    return (
        <div className='container-all-login'>
            <Alert />
            
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