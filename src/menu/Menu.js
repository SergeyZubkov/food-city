import React, { Component } from 'react';
import './Menu.css';
import DayMenuItem from './dayMenuItem/DayMenuItem';

import getWeekMenu from '../utils/getWeekMenu.js';
import getNextWeekMenu from '../utils/getNextWeekMenu.js';

class Menu extends Component {
	render() {
		const currentWeek = getWeekMenu();
		const nextWeek = getNextWeekMenu();
		return (
			<div>
				<h1> Меню</h1>
				<h2> Текущая неделя </h2>
					{currentWeek.map((d) => <DayMenuItem dishs={d} />)}
				<h2> Следующая неделя </h2>
					{nextWeek.map((d) => <DayMenuItem dishs={d} />)}
			</div>
		);
	}
}

export default Menu;