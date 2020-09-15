import React from "react"
import Cover from "./Cover"
import ScrollableAnchor from 'react-scrollable-anchor';

function Social() {
  return (
    <ScrollableAnchor id={'shares'}>
    <div className="shares">
      <Cover />
      <div className="shares__content">
      <p className="shares__title">Акции</p> 
      <div className="shares__polishing"> 
         <p className="shares__text">Полировка + нанесение защитного состава</p>
        </div>
        <div className="shares__dry">
        <p className="shares__text">Химчистка + антидождь в подарок</p>
        </div>
      </div>
    </div>
    </ScrollableAnchor>
  )
}

export default Social