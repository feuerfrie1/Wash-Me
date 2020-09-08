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
          <button className="social__subscribe">подписаться</button>
        </div>
      </div>
    </div>
  )
}

export default Social
