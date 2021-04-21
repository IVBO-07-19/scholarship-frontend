import React from "react";
import s from './LogInBtn.module.css';
import {useAuth0} from "@auth0/auth0-react";

const LogInBtn =() => {

    const { loginWithRedirect } = useAuth0();

    return(
            <button onClick={() => loginWithRedirect()}>Log In</button>
    )

}

export default LogInBtn;