import React from 'react';
import s from './LogOutBtn.module.css';
import {useAuth0} from "@auth0/auth0-react";

export default function LogOutBtn() {
    const {logout, isAuthenticated} = useAuth0()

    return(
            <div>
                <button className={s.btn_log} onClick={() => logout()}>Log Out</button>
            </div>

    )

}