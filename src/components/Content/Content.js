import React from "react";
import style from './content.module.css'

function Content(){
    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.content_in}>
                    <h5 className={style.photo}>Фотокамеры(10)</h5>
                    <h5>Телевизоры(8)</h5>
                    <h5>Объективы(4)</h5>
                    <h5>Вспышки(2)</h5>
                </div>
            </div>
        </div>
        </>
    )
}

export default Content