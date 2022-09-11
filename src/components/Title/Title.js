import React from "react";
import style from './title.module.css'
import photo from './../../images/title.svg'

function Title(){ 
    return(
        <>
        <div className={style.container}>
            <div className={style.title}>
                <img src={photo}/>
            </div> 
            <div className={style.title_mobile}>
                <h2>Главная/Сравнить товары</h2>
                <h1>Сравнить 5 товаров</h1>
            </div>
        </div>
        </>
    )
}

export default Title