import React from "react";
import Cover from "../components/Cover";
import logo from "../images/logo.png";
import nav from "../images/nav.png";
import inst from "../images/inst_logo.png";
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

function Header(props) {

  return (
    <ScrollableAnchor id={'main'}>
    <header className="header">
        <Cover />
        <div className="header__info">
            <div className="header__left">
                <img className="header__logo" src={logo} alt="Логотип" />
                <h1 className="header__title">премиум<br />мойка</h1>
                <div className="header__instagram"><a href="https://www.instagram.com/washme_moscow/" target="_blank" rel="noferrer" className="header__instagram-text">подписаться</a><img className="header__instagram-logo" src={inst} alt="Логотип" /></div>
            </div>
            <div className="header__right">
            <div className="header__contacts">
                <p className="header__address">Саввинская наб., 25, стр. 1</p>
                <p className="header__tel">+7 495 297-77-75</p>
            </div>
            <button className="header__nav" onClick={props.onNavOpen}><img src={nav} alt="Меню" / ></button>
            <div className="header__line"></div>
            <div className="header__visit">
              <a href="#" className="header__button">онлайн запись</a>
            </div>
            </div>
        </div>      
    </header>
    </ScrollableAnchor>
  );
}

export default Header;
