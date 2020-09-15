import React from "react";
import firstClass from "../images/first_class.png";
import secondClass from "../images/second_class.png";
import thirdClass from "../images/third_class.png";
import fourthClass from "../images/fourth_class.png";

function PopupDetail(props) {    
    return (
      <section className={`popup popup__wash ${props.isOpen && "popup_opened"}`}>
        <div className="popup__container popup__container_wash">
          <table className="popup__table">
      <tbody>
          <tr>
              <td className="popup__table-title popup__table-title_detail">Технический детейлинг</td>
              <td><img className="popup__wash-className" src={firstClass}></img></td>
              <td><img className="popup__wash-className" src={secondClass}></img></td>
              <td><img className="popup__wash-className" src={thirdClass}></img></td>
              <td><img className="popup__wash-className" src={fourthClass}></img></td>
          </tr>
          <tr className ="popup__description">
              <td>Локальня полировка</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
          </tr>
          <tr className ="popup__description">
              <td>Подготовка кузова к полировке</td>
              <td>2000</td>
              <td>2500</td>
              <td>3000</td>
              <td>3500</td>
          </tr>
          <tr className ="popup__description">
              <td>Восстановительная полировка</td>
              <td>15000</td>
              <td>17000</td>
              <td>19000</td>
              <td>21000</td>
          </tr>
          <tr className ="popup__description">
              <td>Антиголограммная полировка</td>
              <td>5000</td>
              <td>6000</td>
              <td>7000</td>
              <td>8000</td>
          </tr>
          <tr className ="popup__description">
              <td>Полировка оптики</td>
              <td>2000</td>
              <td>2000</td>
              <td>2000</td>
              <td>2000</td>
          </tr>
          <tr className ="popup__description">
              <td>Полировка салонных вставок</td>
              <td>2000</td>
              <td>2000</td>
              <td>2000</td>
              <td>2000</td>
          </tr>
          <tr className ="popup__description">
              <td>Жидкое стекло</td>
              <td>10000</td>
              <td>12000</td>
              <td>14000</td>
              <td>15000</td>
          </tr>
          <tr className ="popup__description">
              <td>Керамическое покрытие 2+1</td>
              <td>25000</td>
              <td>28000</td>
              <td>30000</td>
              <td>32000</td>
          </tr>
          <tr className ="popup__description">
              <td>Керамическое покрытие 4+1</td>
              <td>34000</td>
              <td>38000</td>
              <td>40000</td>
              <td>45000</td>
          </tr>
          <tr className ="popup__description">
              <td>Керамическое покрытие для пленки</td>
              <td>20000</td>
              <td>25000</td>
              <td>28000</td>
              <td>30000</td>
          </tr>
          <tr>
              <td className="popup__table-title popup__table-title_second">интерьер</td>
          </tr>
          <tr className ="popup__description">
              <td>Защитное покрытие сиденья (1шт.)</td>
              <td>2000</td>
              <td>2000</td>
              <td>2000</td>
              <td>2000</td>
          </tr>
          <tr className ="popup__description">
              <td>Защитная пленка для пола</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
          </tr>
          <tr className ="popup__description">
              <td>Локальный окрас</td>
              <td>9000</td>
              <td>9000</td>
              <td>9000</td>
              <td>9000</td>
          </tr>
          <tr className ="popup__description">
              <td>Удаление вмятин</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
          </tr>
          <tr className ="popup__description">
              <td>Нанесение гидрофобного покрытия на крышу</td>
              <td>6000</td>
              <td>6000</td>
              <td>6000</td>
              <td>6000</td>
          </tr>
      </tbody>
  </table>
          <button className="popup__close popup__close_wash" onClick={props.onClose} />
          <a href="" target="_blank" rel="noreferrer" class="popup__button">записаться</a>
        </div>
      </section>
    );
  }
  
  export default PopupDetail;