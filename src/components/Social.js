import React from "react"
import Cover from "./Cover"
import iphone from "../images/iphone_inst.png"

function Social() {
  return (
    <div className="social">
      <Cover />
      <div className="social__content">
        <img
          className="social__iphone-inst"
          src={iphone}
          alt="WashMe Instagram"
        />
        <div className="social__link">
          <p className="social__title">Наш instagram</p>  
          <a href="https://www.instagram.com/washme_moscow/" target="_blank" rel="noreferrer" className="social__subscribe-text">подписаться</a>
        </div>
      </div>
    </div>
  )
}

export default Social
