import React from "react";
import firstClass from "../images/first_class.png";
import secondClass from "../images/second_class.png";
import thirdClass from "../images/third_class.png";
import fourthClass from "../images/fourth_class.png";

function PopupPasting(props) {    
    return (
      <section className={`popup popup__wash ${props.isOpen && "popup_opened"}`}>
        <div className="popup__container popup__container_wash">
          <table className="popup__table">
      <tbody>
          <tr>
              <td className="popup__table-title popup__table-title_detail">Антигравийная плёнка</td>
              <td><img className="popup__wash-className" src={firstClass}></img></td>
              <td><img className="popup__wash-className" src={secondClass}></img></td>
              <td><img className="popup__wash-className" src={thirdClass}></img></td>
              <td><img className="popup__wash-className" src={fourthClass}></img></td>
          </tr>
          <tr className ="popup__description">
              <td>Полная оклейка (прозрачная) (без крыши)</td>
              <td>210000</td>
              <td>220000</td>
              <td>230000</td>
              <td>250000</td>
          </tr>
          <tr className ="popup__description">
              <td>Полная оклейка (матовая) (без крыши)</td>
              <td>230000</td>
              <td>240000</td>
              <td>250000</td>
              <td>270000</td>
          </tr>
          <tr className ="popup__description">
              <td>Полная оклейка (прозрачная)</td>
              <td>220000</td>
              <td>230000</td>
              <td>240000</td>
              <td>260000</td>
          </tr>
          <tr className ="popup__description">
              <td>Полная оклейка (матовая)</td>
              <td>240000</td>
              <td>250000</td>
              <td>260000</td>
              <td>280000</td>
          </tr>
          <tr className ="popup__description">
              <td>Оклейка зон риска "Стандарт"</td>
              <td>70000</td>
              <td>75000</td>
              <td>80000</td>
              <td>90000</td>
          </tr>
          <tr className ="popup__description">
              <td>Оклейка зон риска "Расширенный"</td>
              <td>85000</td>
              <td>90000</td>
              <td>95000</td>
              <td>100000</td>
          </tr>
          <tr className ="popup__description">
              <td>Оклейка фар головной оптики</td>
              <td>6000</td>
              <td>6000</td>
              <td>6000</td>
              <td>7000</td>
          </tr>
          <tr className ="popup__description">
              <td>Оклейка фар противотуманных</td>
              <td>4000</td>
              <td>4000</td>
              <td>4000</td>
              <td>4000</td>
          </tr>
          <tr className ="popup__description">
              <td>Оклейка переднего бампера</td>
              <td>34000</td>
              <td>38000</td>
              <td>40000</td>
              <td>45000</td>
          </tr>
          <tr className ="popup__description">
              <td>Оклейка заднего бампера</td>
              <td>25000</td>
              <td>26000</td>
              <td>28000</td>
              <td>30000</td>
          </tr>
          <tr className ="popup__description">
              <td>Оклейка накладок дверей (1шт.)</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
          </tr>
          <tr className ="popup__description">
              <td>Оклейка передних стоек (1шт.)</td>
              <td>2500</td>
              <td>2500</td>
              <td>3000</td>
              <td>3000</td>
          </tr>
          <tr className ="popup__description">
              <td>Оклейка внутренего порога (1шт.)</td>
              <td>1500</td>
              <td>1500</td>
              <td>1500</td>
              <td>1500</td>
          </tr>
          <tr className ="popup__description">
              <td>Оклейка зеркала заднего вида (1шт.)</td>
              <td>2000</td>
              <td>2500</td>
              <td>3000</td>
              <td>3500</td>
          </tr>
          <tr className ="popup__description">
              <td>Оклейка зоны погрузки</td>
              <td>4000</td>
              <td>4000</td>
              <td>5000</td>
              <td>5000</td>
          </tr>
          <tr className ="popup__description">
              <td>Оклейка пространства под ручками (4шт.)</td>
              <td>2000</td>
              <td>2000</td>
              <td>2500</td>
              <td>2500</td>
          </tr>
          <tr className ="popup__description">
              <td>Оклейка оконных молдингов</td>
              <td>16000</td>
              <td>18000</td>
              <td>20000</td>
              <td>22000</td>
          </tr>
          <tr className ="popup__description">
              <td>Оклейка расширителя арки (1шт.)</td>
              <td>5000</td>
              <td>5000</td>
              <td>6000</td>
              <td>6000</td>
          </tr>
          <tr className ="popup__description">
              <td>Арматурные работы</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
          </tr>
          <tr className ="popup__description">
              <td>Защитное стекло GLE (W167) (глянец)</td>
              <td>8000</td>
              <td>8000</td>
              <td>8000</td>
              <td>8000</td>
          </tr>
          <tr>
              <td className="popup__table-title popup__table-title_second">Тонировка</td>
          </tr>
          <tr className ="popup__description">
              <td>Два боковых стекла (тонировочная)</td>
              <td>3000</td>
              <td>3000</td>
              <td>4000</td>
              <td>4000</td>
          </tr>
          <tr className ="popup__description">
              <td>Лобовое стекло (тонировочная)</td>
              <td>4000</td>
              <td>4000</td>
              <td>5000</td>
              <td>5000</td>
          </tr>
          <tr className ="popup__description">
              <td>Заднее стекло (тонировочное)</td>
              <td>3000</td>
              <td>3000</td>
              <td>4000</td>
              <td>4000</td>
          </tr>
          <tr className ="popup__description">
              <td>Форточка большая (тонировочная) (1шт.)</td>
              <td>1000</td>
              <td>1000</td>
              <td>1200</td>
              <td>1000</td>
          </tr>
          <tr className ="popup__description">
              <td>Форточка маленькая (тонировочная) (1шт.)</td>
              <td>500</td>
              <td>500</td>
              <td>600</td>
              <td>600</td>
          </tr>
          <tr className ="popup__description">
              <td>Два боковых стекла (атермальная)</td>
              <td>5000</td>
              <td>5000</td>
              <td>6000</td>
              <td>6000</td>
          </tr>
          <tr className ="popup__description">
              <td>Лобовое стекло (атермальная)</td>
              <td>7000</td>
              <td>7000</td>
              <td>8000</td>
              <td>8000</td>
          </tr>
          <tr className ="popup__description">
              <td>Заднее стекло (атермальная)</td>
              <td>6000</td>
              <td>6000</td>
              <td>7000</td>
              <td>7000</td>
          </tr>
          <tr className ="popup__description">
              <td>Форточка большая (атермальная) (1шт.)</td>
              <td>2000</td>
              <td>2000</td>
              <td>2500</td>
              <td>2500</td>
          </tr>
          <tr className ="popup__description">
              <td>Форточка маленькая (атермальная) (1шт.)</td>
              <td>1500</td>
              <td>1500</td>
              <td>2000</td>
              <td>2000</td>
          </tr>
          <tr className ="popup__description">
              <td>Демонатж пленки двух боковых стекол</td>
              <td>1000</td>
              <td>1000</td>
              <td>1500</td>
              <td>1500</td>
          </tr>
          <tr className ="popup__description">
              <td>Демонтаж пленки (заднее/лобовое стекло)</td>
              <td>2000</td>
              <td>2000</td>
              <td>2500</td>
              <td>2500</td>
          </tr>
          <tr className ="popup__description">
              <td>Демонтаж плёнки</td>
              <td>500</td>
              <td>500</td>
              <td>500</td>
              <td>500</td>
          </tr>
      </tbody>
  </table>
          <button className="popup__close popup__close_wash" onClick={props.onClose} />
          <a href="" target="_blank" rel="noreferrer" class="popup__button">записаться</a>
        </div>
      </section>
    );
  }
  
  export default PopupPasting;