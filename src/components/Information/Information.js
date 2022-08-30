import React from "react";
import style from './information.module.css'


function Information(){
    
    return(
        <>
        <div className={style.container}>
            <div className={style.information}>
                <h2>Цена</h2>
                <div className={style.days}>

                </div>
                <div className={style.price}>

                </div>
            </div>
        </div>
        </>
    )
}

export default Information