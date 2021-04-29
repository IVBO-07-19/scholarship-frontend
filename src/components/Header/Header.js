import React from 'react';
import s from './Header.module.css';
import { NavLink, BrowserRouter } from 'react-router-dom';
import LogInBtn from '../LogButtons/LogInBtn';
import LogOutBtn from '../LogButtons/LogOutBtn';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
<<<<<<< Updated upstream
    const { isAuthenticated } = useAuth0();

        return(
            <header className={s.headerbar}>
                        <NavLink to="/" className={s.nav1}>УВиСР</NavLink>
                        <span></span>
                        <NavLink to="/Information" className={s.nav2}>Информация</NavLink>
                        <span></span>
                        <NavLink to="/Documents" className={s.nav2}>Необходимые документы</NavLink>
                        <span></span>
                <div></div>
                <div className={s.btns}>
                    {!isAuthenticated ?(
                        <LogInBtn></LogInBtn>
                        ):(
                        <LogOutBtn></LogOutBtn>
                        )}
                </div>
=======
  const { isAuthenticated } = useAuth0();
>>>>>>> Stashed changes

  return (
    <header className={s.headerbar}>
      <NavLink to="/scholarship-frontend" className={s.nav1}>
        УВиСР
      </NavLink>
      <span></span>
      <NavLink to="/Information" className={s.nav2}>
        Информация
      </NavLink>
      <span></span>
      <NavLink to="/Documents" className={s.nav2}>
        Необходимые документы
      </NavLink>
      <span></span>
      <div></div>
      <div className={s.btns}>
        {!isAuthenticated ? <LogInBtn></LogInBtn> : <LogOutBtn></LogOutBtn>}
      </div>
    </header>
  );
};

export default Header;
