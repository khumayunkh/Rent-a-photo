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
                    <h3>каталог</h3>
                    <h3>о компании</h3>
                    <h3>новости</h3>
                    <h3>контакты</h3>
                </div>
                <div className={style.search}>
                    <input placeholder="Поиск" className={style.input}/>
                    <button>войти</button>
                </div>
                <img src={korzinka}/>
            </div>
        </div>
        </>
    )
}

export default Header