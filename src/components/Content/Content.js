import React from "react";
import style from './content.module.css'
import vector from './../../images/Vector.png'

function Content(){
    
    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.content_in}>
                    <h5 className={style.photo}>Фотокамеры(10)</h5>
                    <h5 className={style.photo}>Телевизоры(8)</h5>
                    <h5 className={style.photo}>Объективы(4)</h5>
                    <h5 className={style.photo}>Вспышки(2)</h5>
                    <h1 className={style.menu}>...</h1>
                    <img className={style.img} src={vector}/>
                </div>
                <div className={style.button}>
                    <h5>Скрыть одинаковые</h5>
                    <input type='checkbox' className={style.ios8_switch} id='checkbox-1'/>
                    <label for='checkbox-1'></label>
                </div>
            </div>
        </div>
        </>
    )
}

export default Content