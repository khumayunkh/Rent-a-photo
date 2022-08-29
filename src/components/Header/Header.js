import React from "react";
import style from './header.module.css'
import logo from './../../images/logo.png'
import korzinka from './../../images/korzinka.png'

function Header(){    
    return(
        <>
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.logo}>
                    <img src={logo}/>
                </div>
                <div className={style.information}>
                    <h2>каталог</h2>
                    <h2>о компании</h2>
                    <h2>новости</h2>
                    <h2>контакты</h2>
                </div>
                <div className={style.search}>
                    <input placeholder="Поиск"/>
                    <h2>войти</h2>
                </div>
                <img src={korzinka}/>
            </div>
        </div>
        </>
    )
}

export default Header