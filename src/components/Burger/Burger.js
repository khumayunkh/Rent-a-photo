import React from "react";
import "./Burger.css"

function Menu({ isOpen, onChange }){
    
    return (
    <div className={`Menu ${isOpen && "open"}`}>
      <span
        className="material-icons btn-close"
        onClick={() => onChange(false)}
      >
        <img className="img_burger" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1024px-Grey_close_x.svg.png"/>
      </span>
      <div className="Menu-items">
          <a>каталог</a>
          <a>о компании</a>
          <a>новости</a>
          <a>контакты</a>
      </div>
    </div>
    );
}

export default Menu;