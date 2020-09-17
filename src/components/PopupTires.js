import React from "react";
import firstClass from "../images/first_class.png";
import secondClass from "../images/second_class.png";
import thirdClass from "../images/third_class.png";
import fourthClass from "../images/fourth_class.png";

function PopupTires(props) {    
    return (
      <section className={`popup popup__wash ${props.isOpen && "popup_opened"}`}>
        <div className="popup__container popup__container_wash">
          <table className="popup__table">
      <tbody>
          <tr>
              <td className="popup__table-title popup__table-title_detail">Шиномонтажные работы</td>
              <td><img className="popup__class" src={firstClass}></img></td>
              <td><img className="popup__class" src={secondClass}></img></td>
              <td><img className="popup__class" src={thirdClass}></img></td>
              <td><img className="popup__class" src={fourthClass}></img></td>
          </tr>
          <tr className ="popup__description">
              <td>Съем+Устан. колеса R13 (легковой)</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
          </tr>
          <tr className ="popup__description">
              <td>Съем+Устан. колеса R14 (легковой)</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
          </tr>
          <tr className ="popup__description">
              <td>Съем+Устан. колеса R14 (джип/автобус)</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
          </tr>
          <tr className ="popup__description">
              <td>Съем+Устан. колеса R15 (легковой)</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
          </tr>
          <tr className ="popup__description">
              <td>Съем+Устан. колеса R15 (джип/автобус)</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
          </tr>
          <tr className ="popup__description">
              <td>Съем+Устан. колеса R16 (легковой)</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
          </tr>
          <tr className ="popup__description">
              <td>Съем+Устан. колеса R16 (джип/автобус)</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
          </tr>
          <tr className ="popup__description">
              <td>Съем+Устан. колеса R17 (легковой)</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
          </tr>
          <tr className ="popup__description">
              <td>Съем+Устан. колеса R17 (джип/автобус)</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
          </tr>
          <tr className ="popup__description">
              <td>Съем+Устан. колеса R18 (легковой)</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
          </tr>
      </tbody>
  </table>
          <button className="popup__close popup__close_wash" onClick={props.onClose} />
          <a href="" target="_blank" rel="noreferrer" className="popup__button">записаться</a>
        </div>
      </section>
    );
  }
  
  export default PopupTires;