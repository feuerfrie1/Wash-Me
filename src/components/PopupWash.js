import React from "react";
import firstClass from "../images/first_class.png";
import secondClass from "../images/second_class.png";
import thirdClass from "../images/third_class.png";
import fourthClass from "../images/fourth_class.png";
import washHeader from "../images/popup-wash_header.png";

function PopupWash(props) {    
  return (
    <section className={`popup popup__wash ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container popup__container_wash">
        <img className="popup__wash-header" src={washHeader}></img>
        <table className="popup__table">
	<tbody>
		<tr>
			<td></td>
			<td><img className="popup__wash-class" src={firstClass}></img></td>
			<td><img className="popup__wash-class" src={secondClass}></img></td>
			<td><img className="popup__wash-class" src={thirdClass}></img></td>
			<td><img className="popup__wash-class" src={fourthClass}></img></td>
		</tr>
		<tr>
			<td>Мойка кузова "стандарт" (Двухфазная)</td>
			<td>700</td>
			<td>800</td>
			<td>1000</td>
			<td>1200</td>
		</tr>
		<tr>
			<td>Мойка кузова "стандарт" (Трехфазная)</td>
			<td>1000</td>
			<td>1200</td>
			<td>1400</td>
			<td>1600</td>
		</tr>
		<tr>
			<td>Комплексная мойка (двухфазная)</td>
			<td>1300</td>
			<td>1400</td>
			<td>1600</td>
			<td>1800</td>
		</tr>
		<tr>
			<td>Комплексная мойка (трехфазная)</td>
			<td>1600</td>
			<td>1800</td>
			<td>2000</td>
			<td>2200</td>
		</tr>
		<tr>
			<td>Легкое кварцевое покрытие ULTRA</td>
			<td>700</td>
			<td>800</td>
			<td>900</td>
			<td>1000</td>
		</tr>
		<tr>
			<td>Пакет "Wash Me"</td>
			<td>5000</td>
			<td>5000</td>
			<td>6000</td>
			<td>6000</td>
		</tr>
		<tr>
			<td>Пакет "Антидождь"</td>
			<td>3500</td>
			<td>3500</td>
			<td>4000</td>
			<td>4000</td>
		</tr>
		<tr>
			<td>Пакет "Интерьер"</td>
			<td>2500</td>
			<td>2500</td>
			<td>3000</td>
			<td>3000</td>
		</tr>
		<tr>
			<td>Пакет "Экстерьер"</td>
			<td>3000</td>
			<td>3000</td>
			<td>3500</td>
			<td>3500</td>
		</tr>
		<tr>
			<td>Полимер HIDRO SHINE</td>
			<td>700</td>
			<td>800</td>
			<td>900</td>
			<td>1000</td>
		</tr>
		<tr>
			<td>Твёрдый воск</td>
			<td>4000</td>
			<td>5000</td>
			<td>6000</td>
			<td>7000</td>
		</tr>
		<tr>
			<td>Удаление металических вкраплений</td>
			<td>1500</td>
			<td>2000</td>
			<td>2500</td>
			<td>3000</td>
		</tr>
		<tr>
			<td>Удаление реагента</td>
			<td>1500</td>
			<td>1500</td>
			<td>1500</td>
			<td>1500</td>
		</tr>
		<tr>
			<td>Удаление битума</td>
			<td>500</td>
			<td>500</td>
			<td>500</td>
			<td>500</td>
		</tr>
		<tr>
			<td>Химчистка кузова (вкрапления, битум, смола)</td>
			<td>4000</td>
			<td>5000</td>
			<td>6000</td>
			<td>7000</td>
		</tr>
		<tr>
			<td>Удаление тополиных почек, насекомых, клея</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
		</tr>
		<tr>
			<td>Химчистка диска (1шт.)</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
		</tr>
		<tr>
			<td>Химчистка насадок выхлопных труб</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
		</tr>
		<tr>
			<td>Чистка хрома</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
		</tr>
		<tr>
			<td>Чернение резины</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
		</tr>
		<tr>
			<td>Обработка уплотнителей силиконом</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
		</tr>
		<tr>
			<td>Антидождь (полусфера)</td>
			<td>1500</td>
			<td>1500</td>
			<td>1500</td>
			<td>1500</td>
		</tr>
		<tr>
			<td>Мойка двигателя</td>
			<td>3000</td>
			<td>3500</td>
			<td>4000</td>
			<td>4500</td>
		</tr>
		<tr>
			<td>Ополаскивание днища</td>
			<td>400</td>
			<td>500</td>
			<td>600</td>
			<td>800</td>
		</tr>
		<tr>
			<td>Турбосушка авто</td>
			<td>500</td>
			<td>500</td>
			<td>500</td>
			<td>500</td>
		</tr>
		<tr>
			<td>Уборка салона</td>
			<td>600</td>
			<td>600</td>
			<td>600</td>
			<td>600</td>
		</tr>
		<tr>
			<td>Уборка багажника</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
			<td>300</td>
		</tr>
		<tr>
			<td>LeTech чистка</td>
			<td>1500</td>
			<td>1500</td>
			<td>1500</td>
			<td>1500</td>
		</tr>
		<tr>
			<td>LeTech защитный крем</td>
			<td>1000</td>
			<td>1000</td>
			<td>1000</td>
			<td>1000</td>
		</tr>
		<tr>
			<td>Ароматизация</td>
			<td>1000</td>
			<td>1000</td>
			<td>1000</td>
			<td>1000</td>
		</tr>
		<tr>
			<td>Озонация салона</td>
			<td>1000</td>
			<td>1000</td>
			<td>1000</td>
			<td>1000</td>
		</tr>
        <tr>
			<td>Мойка подвески</td>
			<td>6000</td>
			<td>8000</td>
			<td>10000</td>
			<td>12000</td>
		</tr>
	</tbody>
</table>
        <button className="popup__close popup__close_wash" onClick={props.onClose} />
      </div>
    </section>
  );
}

export default PopupWash;