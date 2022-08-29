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
        </div>
        </>
    )
}

export default Title