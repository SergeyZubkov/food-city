import React, { Component } from 'react';
import './Menu.css';

import DayMenuItem from './dayMenuItem/DayMenuItem';
import Submenu from '../../commons/submenu/Submenu.js';
import AsteriksMenu from '../../commons/asteriksMenu/AsteriksMenu.js';


import menu from '../../data/menu.json'
import whatsapp from '../../whatsapp.png';

import jsCalendar from 'js-calendar';


class Menu extends Component {
	render() {
		const t = new Date();
		const currentYear = t.getFullYear()
		const currentMonth = t.getMonth();

		const currentMonthName = [
		 'январь',
	   'февраль',
	   'март',
	   'апрель', 
	   'май',
	   'июнь',
	   'июль',
	   'август',
	   'сентябрь',
	   'ноябрь',
	   'декабрь',
		][currentMonth];
		const generator = new jsCalendar.Generator({language: 'ru'});
		let currentMonthCells = generator(currentYear, currentMonth);

		currentMonthCells = currentMonthCells.cells
		.filter(item => item.date)
		.map(item => new Date(item.date));
		// первая неделя текущего месяца дополняется числами из предыдущего месяца, а
		// последняя неделя - числами из следующего месяца. Иногда, если месяц начинается 
		// или кончается в субботу или воскресенья, нужно обрезать первую неделю или последнию
		// месяца
		// есть еще проблемы связанные с переходом меню на другой месяц, когда текующий месяц еще
		// не кончился, а число выпло на выходной и надо показать меню на следующего дня, который
		// уже приходится на другой месяц.
		console.log(currentMonth)
		return (
			<div className='menu'>
				<h1> 
					Меню на {currentMonthName}
					<div className="phone-print">
						<span
						>
							<img src={whatsapp} width='20px' alt='доставка' />
							8 929 672-93-24
						</span>
						<span
						>
							8 495 532-14-34
						</span>
					</div>
					<div className="link-to-sight-print">
						www.едасити.рф
					</div>
					<div
						className="btn btn-second"
						onClick={() => window.print()}
					>
						Распечатать
					</div>
				</h1>
					<AsteriksMenu />
					<div
						className='menu-container'
					>
						{currentMonthCells.map((date, i) => {
							let menuOfDay = menu.find(item => item.day === date.getDate());							
							
							if (menuOfDay&&date.getMonth() === currentMonth) {
								return <DayMenuItem key={i} dishs={menuOfDay} day={date.getDate()} /> 					
							}
						})}
					</div>
					<Submenu/>
			</div>
		);
	}
}

export default Menu;