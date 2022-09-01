import React from "react";
import Contact from "../Contact/Contact";
import style from './footer.module.css'


function Footer(){
    
    return(
        <>
        <div className={style.container}>
            <div className={style.footer}>
                <div className={style.news}>
                    <h4 className={style.follow}>Подписывайтесь</h4>
                    <h4>на новости и акции</h4>
                </div>
                <div className={style.input}>
                    <input className={style.input_in} placeholder="Введите email"/>
                    <button>Подписаться</button>
                </div>
                <div className={style.number}>
                    <a>Заказать звонок</a>
                </div>
            </div>
        </div>
        <Contact/>
        </>
    )
}

export default Footer