import React from "react";
import style from './contact.module.css'
import logo from './../../images/logo.png'


function Contact(){
    return(
        <>
        <div className={style.container}>
            <div className={style.contact}>
                <div className={style.information}>
                    <img src={logo}/>
                    <h4>самый удобный в Москве сервис 
                        аренды фото-, видео-, и кинотехники
                    </h4>
                    <h4>2015-2019 Fotoprokat24</h4>
                </div>
                <div className={style.company}>
                    
                </div>
                <div className={style.client}>

                </div>
                <div className={style.help}>

                </div>
                <div className={style.contact}>

                </div>
            </div>
        </div>
        </>
    )
}

export default Contact