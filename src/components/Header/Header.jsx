import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from './../../assets/images/code.svg'


const Header = (props) => {
    return <header className={`${s.header} ${s.shadow}`}>
        <img src={logo} className = {s.img} />

        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout} className = {s.btn}>Log out</button> </div>
                : <NavLink to={'/login'} ><button className = {s.btn}>Login</button></NavLink> }
        </div>

    </header>
}

export default Header;