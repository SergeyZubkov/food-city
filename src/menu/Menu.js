import React, { Component } from 'react';
import './Menu.css';
import DayMenuItem from './dayMenuItem/DayMenuItem';

import getWeekName from '../utils/getWeekName.js';
import getNextWeekName from '../utils/getNextWeekName.js';
import menu from '../data/menu-november.json'
import whatsapp from '../whatsapp.png';

import jsCalendar from 'js-calendar';


class Menu extends Component {
	render() {
		const generator = new jsCalendar.Generator({language: 'ru'})
		let november = generator(2017, 10)
		november = november.cells
		.filter(item => item.date)
		.filter(item => [1, 2, 3, 4, 5].indexOf(new Date(item.date).getDay()) > -1)
		.map(item => new Date(item.date));

		november = november.slice(0, -5)

		return (
			<div className='menu'>
				<h1> 
					Меню на ноябрь
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
					<div
						className='menu-container'
					>
						{november.map((date, i) => {
							console.log(date.getMonth())
							if (date.getMonth() !==  10) {
								return <DayMenuItem key={i} day={date.getDate()} />
							} else {
								const menuOfDay = menu.find(item => item.day == date.getDate())
								return <DayMenuItem key={i} dishs={menuOfDay} day={date.getDate()} /> 					
							}
						})}
					</div>
			</div>
		);
	}
}

export default Menu;