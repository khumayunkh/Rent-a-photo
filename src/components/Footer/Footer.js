import React from "react";
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
                    <input placeholder="Введите email"/>
                    <button>Подписаться</button>
                </div>
                <div className={style.number}>
                    <button>Заказать звонок</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer