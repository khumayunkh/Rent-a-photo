import React from "react";
import style from './information.module.css'


function Information(){
    
    return(
        <>
        <div className={style.container}>
            <div className={style.information}>
                <h2>Цена</h2>
                <div className={style.information_in}>
                    <div className={style.title_in}>
                        <h4 className={style.title}>Будний</h4>
                    </div>
                    <div className={style.price_in}>
                        <h4 className={style.price}>1 880$</h4>
                        <h4 className={style.price}>990$</h4>
                        <h4 className={style.price3}>1 200$</h4>
                    </div>
                </div>
                <div className={style.information_in}>
                    <div className={style.title_in}>
                        <h4 className={style.title}>Выходной</h4>
                    </div> 
                    <div className={style.price_in}>
                        <h4 className={style.price}>1 950$</h4>
                        <h4 className={style.price}>1 100$</h4>
                        <h4 className={style.price3}>1 250$</h4>
                    </div>
                </div>
                <div className={style.information_in}>
                    <div className={style.title_in}>
                        <h4 className={style.title}>Неделя</h4>
                    </div> 
                    <div className={style.price_in}>
                        <h4 className={style.price}>10 950$</h4>
                        <h4 className={style.price}>9 100$</h4>
                        <h4 className={style.price3}>7 250$</h4>
                    </div>
                </div>
                <div className={style.information_in}>
                    <div className={style.title_in}>
                        <h4 className={style.title}>Месяц</h4>
                    </div> 
                    <div className={style.price_in}> 
                        <h4 className={style.price}>29 950$</h4>
                        <h4 className={style.price}>18 100$</h4>
                        <h4 className={style.price3}>15 250$</h4>
                    </div>
                </div>
                <button className={style.btn}>ПОКАЗАТЬ ВСЕ</button>
            </div>
        </div>
        </>
    )
}

export default Information