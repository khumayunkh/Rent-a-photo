import React from "react";
import "./Burger.css"

function Menu({ isOpen, onChange }) {
  return (
    <div className={`Menu ${isOpen && "open"}`}>
      <span
        className="material-icons btn-close"
        onClick={() => onChange(false)}
      >
        close
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