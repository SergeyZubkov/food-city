import React, { Component } from 'react';
import './Menu.css';
import DayMenuItem from './dayMenuItem/DayMenuItem';

import getWeekName from '../utils/getWeekName.js';
import getNextWeekName from '../utils/getNextWeekName.js';
import menu from '../data/menu.json'
import whatsapp from '../whatsapp.png';

class Menu extends Component {
	render() {
		const currentWeek = menu[getWeekName()];
		const nextWeek = menu[getNextWeekName()];
		return (
			<div className='menu'>
				<h1> 
					Меню
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
				<div className="current-week">
					<h2> Текущая неделя </h2>
					{currentWeek.map((d, i) => <DayMenuItem key={i} dishs={d} day={i}/>)}
				</div>
				<div className="next-week">
					<h2> Следующая неделя </h2>
					{nextWeek.map((d, i) => <DayMenuItem key={i} dishs={d} day={i}/>)}
				</div>
				<div
					className='menu-addition'
				>
					Дополнительная порция: салата - 30 р., супа - 30 р., горячего - 70 р.
				</div>
			</div>
		);
	}
}

export default Menu;