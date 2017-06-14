import React, { Component } from 'react';
import './Menu.css';
import DayMenuItem from './dayMenuItem/DayMenuItem';

import getWeekName from '../utils/getWeekName.js';
import getNextWeekName from '../utils/getNextWeekName.js';
import menu from '../data/menu.json'

class Menu extends Component {
	render() {
		const currentWeek = menu[getWeekName()];
		const nextWeek = menu[getNextWeekName()];
		return (
			<div className='menu'>
				<h1> Меню</h1>
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