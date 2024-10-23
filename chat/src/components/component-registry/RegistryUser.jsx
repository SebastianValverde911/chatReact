import React from "react";
import './RegistryUser.css';
import logo from '../../logo.svg';
import Service from "../../services/services";
import { useNavigate } from 'react-router-dom';



const RegistryUser = () => {
    const navigate = useNavigate();

    const formRegistryUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        Service.registryUserForm(name,email,password).then(response => {
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    };

    const signin = () => {
        navigate('/');
    }

    return(
        <div className="container-registry">
            <div className='container-all-login'>
                <div className='container-logo'>
                    <img className="App-logo" src={logo} />
                </div>
                <div className='container-form'>
                    <form onSubmit={formRegistryUser}>
                        <label>Name</label>
                        <input type='text' name="name" />
                        <label>Email</label>
                        <input type='text' name="email" />
                        <label>Password</label>
                        <input type='password' name="password" />
                        <button type="submit" className='btn-create-account'>CREATE ACCOUNT</button>
                        <button className='btn-create-account' onClick={signin}>SIGN IN</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default RegistryUser;