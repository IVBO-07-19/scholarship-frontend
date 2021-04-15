import React from 'react';
import s from './LogInBtn.module.css';
import {useAuth0} from "@auth0/auth0-react";

const LogInBtn =() => {

    const { loginWithRedirect } = useAuth0();

    return(
        <div>
            <button onClick={() => loginWithRedirect()}>Log In</button>
        </div>
    )

}

export default LogInBtn;