import React from "react";

function PopupNavigation(props) {
  return (
    <section className={`popup popup__navigation ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
      <nav className="header__nav">
            <ul className="header__nav-links">
                <li className="header__nav-item">
                <a href="#main" className="header__nav-link">Главная</a>
                </li>
                <li className="header__nav-item">
                <a href="#services" className="header__nav-link">Услуги</a>
                </li>
                <li className="header__nav-item">
                <a href="#shares" className="header__nav-link">Акции</a>
                </li>
                <li className="header__nav-item">
                <a href="#contacts" className="header__nav-link">Контакты</a>
                </li>
            </ul>
        </nav>
        <button className="popup__close popup__close_navigation" onClick={props.onClose} />
      </div>
    </section>
  );
}

export default PopupNavigation;