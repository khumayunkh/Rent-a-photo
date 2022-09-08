import React from "react";
import Contact from "../Contact/Contact";
import style from './footer.module.css'
import button from './../../images/Vector.svg'

function Footer(){
    
    return(
        <>
        <div className={style.container}>
            <div className={style.footer}>
                <div className={style.news}>
                    <h4 className={style.follow}>Подписывайтесь</h4>
                    <h4 className={style.news_in}>на новости и акции</h4>
                </div>
                <div className={style.input}>
                    <input className={style.input_in} placeholder="Ваш e-mail для рассылки"/>
                    <button className={style.desktop_btn}>Подписаться</button>
                    <button className={style.mobile_btn}>
                        <img className={style.mobile_btn_in} src={button}/>
                    </button>
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