import React, {useState} from "react";
import style from './header.module.css'
import logo from './../../images/logo.png'
import korzinka from './../../images/korzinka.png'
import logo_mobile from './../../images/logo_mobile_1.jpg'
import Menu from "../Burger/Burger";

function Header(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <div className={style.container}>
            <div className={style.header}>
                <span className={style.menu} onClick={() => setIsOpen(true)}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"/>
                </span>
                <div className={style.logo_mobile}>
                    <h2>FP</h2>
                    <h2 className={style.logo_mobile_in}>24</h2> 
                </div>
                <div className={style.logo}>
                    <img src={logo}/>
                </div>
                <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>   
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