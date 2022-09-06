import React from "react";
import style from './contact.module.css'
import logo from './../../images/logo.png'
import footer from './../../images/footer.svg'

function Contact(){
    
    return(
        <>
        <div className={style.container}>
            {/* <h4 className={style.footer}>2015-2019 Fotoprokat24</h4> */}
            <img src={footer} className={style.footer}/>
            <div className={style.contact}>
                <div className={style.information}>
                    <img src={logo}/>
                    <h4>самый удобный в Москве сервис 
                        аренды фото-, видео-, и кинотехники
                    </h4>
                    <h4>2015-2019 Fotoprokat24</h4>
                </div>
                <div className={style.company}>
                    <h3>Компания</h3>
                    <h4>О компании</h4>
                    <h4>Новости</h4>
                    <h4>Вакансии</h4>
                    <h4>Политика</h4>
                    <h4>Конфиденциальность</h4>
                </div>
                <div className={style.client}>
                    <h3>Клиентам</h3>
                    <h4>Точки выдачи</h4>
                    <h4>Скидки</h4>
                    <h4>Бонусные программы</h4>
                </div>
                <div className={style.help}>
                    <h3>Помощь</h3>
                    <h4>Вопрос-ответ</h4>
                    <h4>Правила аренды</h4>
                    <h4>Доставка</h4>
                    <h4>Оплата</h4>
                </div>
                <div className={style.contact_us}>
                    <h3>Кантакты</h3>
                    <h4>Fotoprokat24</h4>
                    <h4>г.Москве, Проспект мира,
                         дом 12 </h4>
                    <h4>Пн-Вс 9:00-12:00</h4>
                    <h4>+7 (999) 999-99-99</h4> 
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact