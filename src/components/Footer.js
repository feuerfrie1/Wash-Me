import React from "react";
import logo from "../images/logo.png";
import ScrollableAnchor from 'react-scrollable-anchor';

function Footer() {
  return (
    <ScrollableAnchor id={'contacts'}>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__services">
            <nav className="footer__nav">
              <h2 className="footer__title">Услуги</h2>
              <ul className="footer__nav-links">
                <li className="footer__nav-link">
                <a href="wash" className="footer__nav-link">Автомойка</a>
                </li>
                <li className="footer__nav-link">
                <a href="detail" className="footer__nav-link">Детейлинг</a>
                </li>
                <li className="footer__nav-link">
                <a href="" className="footer__nav-link">Оклейка</a>
                </li>
                <li className="footer__nav-link">
                <a href="tire" className="footer__nav-link">Шиномонтаж</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__contacts">
          <h2 className="footer__title">Контакты</h2>
          <p className="footer__address">Саввинская наб., 25, стр. 1</p>
          <p className="footer__tel">+7 495 297-77-75</p>
          <button className="footer__route"><a className="footer__route-link" href="yandexnavi://build_route_on_map?lat_to=55.731217&lon_to=37.558894">Построить маршрут</a></button>
          </div>
          <div className="footer__logo">  
            <img className="header__logo" src={logo} alt="Логотип" />
          </div>
        </div>
    </footer>
    </ScrollableAnchor>
  );
}

export default Footer;