import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import logo from './../../assets/images/two.svg'
import email from './../../assets/images/email.svg'
import news from './../../assets/images/news.svg'
import code from './../../assets/images/pro.svg'
import music from './../../assets/images/music.svg'
import set from './../../assets/images/settings.svg'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.com} ${s.one}` }>
                <img src = {logo} className = {s.log}/>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}  ${s.one}`}>
                <img src = {email} className = {s.log}/>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}  ${s.one}`}>
            <img src = {code} className = {s.log}/>
                <NavLink to="/users" activeClassName={s.activeLink}>Coders</NavLink>
            </div>

            <div className={s.item}>
            <img src = {news} className = {s.log}/>
                <a>News</a>
            </div>
            <div className={s.item}>
            <img src = {music} className = {s.log}/>
                <a>Music</a>
            </div>
            <div className={s.item}>
            <img src = {set} className = {s.log}/>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;