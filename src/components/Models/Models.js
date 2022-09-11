import React from "react";
import style from './models.module.css'
import clear from './../../images/clear.svg'
import photo from './../../images/photo.svg'
import photo1 from './../../images/photo2.svg'
import photo2 from './../../images/photo3.svg'

function Models(){
    return(
        <>
        <div className={style.container}>
            <div className={style.models}>
                <div className={style.clear}>
                    <img src={clear}/>
                    <h5>Модель Фотоаппарата</h5>
                </div> 
                    <div className={style.images}>
                        <div className={style.images_in}>
                            <img src={photo}/>
                            <h3>D5300 kit</h3>
                            <h4>Nikos</h4>
                        </div>
                        <div className={style.images_in}>
                            <img src={photo1}/>
                            <h3>D5300 kit</h3>
                            <h4>Nikos</h4>
                        </div>
                        <div className={style.images_in_3}>
                            <img src={photo2}/>
                            <h3>D5300 kit</h3>
                            <h4>Canon</h4>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default  Models 