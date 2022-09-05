import React, {useState} from "react";
import style from './Burger.module.css'


function Burger() {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div style={{width: '100%', height: '100vh'}}>
            <nav>
                <div className={style.burger_menu} onClick={updateMenu}>
                    <div className={style.burger_class} >sdfsdc</div>
                    <div className={style.burger_class} >cds</div>
                    <div className={style.burger_class} >cs</div>
                </div>
            </nav>

            <div className={style.menu_class}></div>
        </div>
    )
}

export default Burger