import React from 'react';
import { useContext } from "react";
import ContextProvider from "./ContextProvider";

const Login = () => {
    const login1 = useContext(ContextProvider);
    console.log(login1.status1);
    return (
        <div align="center">
            <h1>Are you authenticated?</h1>
            {login1.status1 ? 
                <p>Yes you are</p> : <p>Nopes</p>
            }
            <button className='btn' style={{ backgroundColor: 'green' }} onClick={login1.login}>Click To Login</button>
        </div>
    )
}

export default Login


