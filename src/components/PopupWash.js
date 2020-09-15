import React from "react";
import firstClass from "../images/first_class.png";
import secondClass from "../images/second_class.png";
import thirdClass from "../images/third_class.png";
import fourthClass from "../images/fourth_class.png";

function PopupWash(props) {    
  return (
    <section className={`popup popup__wash ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container popup__container_wash">
        <table className="popup__table">
	<tbody>
		<tr>
			<td className="popup__table-title">кузов</td>
			<td><img className="popup__wash-className" src={firstClass}></img></td>
			<td><img className="popup__wash-className" src={secondClass}></img></td>
			<td><img className="popup__wash-className" src={thirdClass}></img></td>
			<td><img className="popup__wash-className" src={fourthClass}></img></td>
		</tr>
		<tr className ="popup__description">
			<td>Мойка кузова "стандарт" (Двухфазная)</td>
			<td>700</td>
			<td>800</td>
			<td>1000</td>
			<td>1200</td>
		</tr>
		<tr className ="popup__description">
			<td>Мойка кузова "стандарт" (Трехфазная)</td>
			<td>1000</td>
			<td>1200</td>
			<td>1400</td>
			<td>1600</td>
		</tr>
		<tr className ="popup__description">
			<td>Комплексная мойка (двухфазная)</td>
			<td>1300</td>
			<td>1400</td>
			<td>1600</td>
			<td>1800</td>
		</tr>
		<tr className ="popup__description">
			<td>Комплексная мойка (трехфазная)</td>
			<td>1600</td>
			<td>1800</td>
			<td>2000</td>
			<td>2200</td>
		</tr>
		<tr className ="popup__description">
			<td>Легкое кварцевое покрытие ULTRA</td>
			<td>700</td>
			<td>800</td>
			<td>900</td>
			<td>1000</td>
		</tr>
		<tr className ="popup__description">
			<td>Пакет "Wash Me"</td>
			<td>5000</td>
			<td>5000</td>
			<td>6000</td>
			<td>6000</td>
		</tr>
		<tr className ="popup__description">
			<td>Пакет "Антидождь"</td>
			<td>3500</td>
			<td>3500</td>
			<td>4000</td>
			<td>4000</td>
		</tr>
		<tr className ="popup__description">
			<td>Пакет "Интерьер"</td>
			<td>2500</td>
			<td>2500</td>
			<td>3000</td>
			<td>3000</td>
		</tr>
		<tr className ="popup__description">
			<td>Пакет "Экстерьер"</td>
			<td>3000</td>
			<td>3000</td>
			<td>3500</td>
			<td>3500</td>
		</tr>
		<tr className ="popup__description">
			<td>Полимер HIDRO SHINE</td>
			<td>700</td>
			<td>800</td>
			<td>900</td>
			<td>1000</td>
		</tr>
		<tr className ="popup__description">
			<td>Твёрдый воск</td>
			<td>4000</td>
			<td>5000</td>
			<td>6000</td>
			<td>7000</td>
		</tr>
		<tr className ="popup__description">
			<td>Удаление металических вкраплений</td>
			<td>1500</td>
			<td>2000</td>
			<td>2500</td>
			<td>3000</td>
		</tr>
		<tr className ="popup__description">
			<td>Удаление реагента</td>
			<td>1500</td>
			<td>1500</td>
			<td>1500</td>
			<td>1500</td>
		</tr>
		<tr className ="popup__description">
			<td>Удаление битума</td>
			<td>500</td>
			<td>500</td>
			<td>500</td>
			<td>500</td>
		</tr>
		<tr className ="popup__description">
			<td>Химчистка кузова (вкрапления, битум, смола)</td>
			<td>4000</td>
			<td>5000</td>
			<td>6000</td>
			<td>7000</td>
		</tr>
		<tr className ="popup__description">
			<td>Удаление тополиных почек, насекомых, клея</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
		</tr>
		<tr className ="popup__description">
			<td>Химчистка диска (1шт.)</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
		</tr>
		<tr className ="popup__description">
			<td>Химчистка насадок выхлопных труб</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
		</tr>
		<tr className ="popup__description">
			<td>Чистка хрома</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
		</tr>
		<tr className ="popup__description">
			<td>Чернение резины</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
		</tr>
		<tr className ="popup__description">
			<td>Обработка уплотнителей силиконом</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
		</tr>
		<tr className ="popup__description">
			<td>Антидождь (полусфера)</td>
			<td>1500</td>
			<td>1500</td>
			<td>1500</td>
			<td>1500</td>
		</tr>
		<tr className ="popup__description">
			<td>Мойка двигателя</td>
			<td>3000</td>
			<td>3500</td>
			<td>4000</td>
			<td>4500</td>
		</tr>
		<tr className ="popup__description">
			<td>Ополаскивание днища</td>
			<td>400</td>
			<td>500</td>
			<td>600</td>
			<td>800</td>
		</tr>
		<tr className ="popup__description">
			<td>Турбосушка авто</td>
			<td>500</td>
			<td>500</td>
			<td>500</td>
			<td>500</td>
		</tr>
		<tr className ="popup__description">
			<td>Уборка салона</td>
			<td>600</td>
			<td>600</td>
			<td>600</td>
			<td>600</td>
		</tr>
		<tr className ="popup__description">
			<td>Уборка багажника</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
		</tr>
		<tr className ="popup__description">
			<td>LeTech чистка</td>
			<td>1500</td>
			<td>1500</td>
			<td>1500</td>
			<td>1500</td>
		</tr>
		<tr className ="popup__description">
			<td>LeTech защитный крем</td>
			<td>1000</td>
			<td>1000</td>
			<td>1000</td>
			<td>1000</td>
		</tr>
		<tr className ="popup__description">
			<td>Ароматизация</td>
			<td>1000</td>
			<td>1000</td>
			<td>1000</td>
			<td>1000</td>
		</tr>
		<tr className ="popup__description">
			<td>Озонация салона</td>
			<td>1000</td>
			<td>1000</td>
			<td>1000</td>
			<td>1000</td>
		</tr>
        <tr className ="popup__description">
			<td>Мойка подвески</td>
			<td>6000</td>
			<td>8000</td>
			<td>10000</td>
			<td>12000</td>
		</tr>
		<tr>
			<td className="popup__table-title popup__table-title_second">салон</td>
		</tr>
		<tr className ="popup__description">
			<td>Химчистка ковриков (1шт.)</td>
			<td>200</td>
			<td>200</td>
			<td>200</td>
			<td>200</td>
		</tr>
		<tr className ="popup__description">
			<td>Хим. чистка полная</td>
			<td>10000</td>
			<td>12000</td>
			<td>14000</td>
			<td>16000</td>
		</tr>
		<tr className ="popup__description">
			<td>Хим. чистка крыши кабриолета</td>
			<td>2000</td>
			<td>2000</td>
			<td>2000</td>
			<td>2000</td>
		</tr>
		<tr className ="popup__description">
			<td>Хим. чистка потолок</td>
			<td>2500</td>
			<td>2750</td>
			<td>3000</td>
			<td>3500</td>
		</tr>
		<tr className ="popup__description">
			<td>Хим. чистка торпедо</td>
			<td>1500</td>
			<td>1750</td>
			<td>2000</td>
			<td>2250</td>
		</tr>
		<tr className ="popup__description">
			<td>Хим. чистка дверных карт</td>
			<td>1000</td>
			<td>1250</td>
			<td>1500</td>
			<td>2000</td>
		</tr>
		<tr className ="popup__description">
			<td>Хим. чистка сиденье</td>
			<td>1500</td>
			<td>1750</td>
			<td>2000</td>
			<td>2250</td>
		</tr>
		<tr className ="popup__description">
			<td>Хим. чистка пол</td>
			<td>2500</td>
			<td>3000</td>
			<td>3500</td>
			<td>4000</td>
		</tr>
		<tr className ="popup__description">
			<td>Хим. чистка багажник</td>
			<td>1000</td>
			<td>1500</td>
			<td>2000</td>
			<td>2500</td>
		</tr>
		<tr className ="popup__description">
			<td>Хим. чистка частичная</td>
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

export default PopupWash;