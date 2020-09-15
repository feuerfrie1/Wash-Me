import React from "react"
import Cover from "./Cover"
import ScrollableAnchor from 'react-scrollable-anchor';

function Services(props) {
  return (
    <ScrollableAnchor id={'services'}>
      <div className="services">
      <Cover />
      <div className="services__content">
      <h2 className="services__title">услуги</h2>
      <div className="services__cards">
      <div className="services__card">
        <button className="services__button" onClick={props.onPopupWashOpen}></button>
        <p className="services__card-description services__card-description_wash">Автомойка <span className="services__card-arrow">&#8594;</span></p>
        </div>
        <div className="services__card">
        <button className="services__button services__button_detail" onClick={props.onPopupDetailOpen}></button>
        <p className="services__card-description services__card-description_detail">Детейлинг <span className="services__card-arrow">&#8594;</span></p>
        </div>
        <div className="services__card">
        <button className="services__button services__button_pasting" onClick={props.onPopupPastingOpen}></button>
        <p className="services__card-description services__card-description_pasting">Оклейка <span className="services__card-arrow">&#8594;</span></p>
        </div>
        <div className="services__card">
        <button className="services__button services__button_tire" onClick={props.onPopupTiresOpen}></button>
        <p className="services__card-description services__card-description_tire">Шиномонтаж <span className="services__card-arrow">&#8594;</span></p>
        </div>
      </div>
      </div>
    </div>
    </ScrollableAnchor>
  )
}

export default Services
