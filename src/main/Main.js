import React, { Component } from 'react';
import './Main.css';
import {Router, Route, Link} from 'react-router-dom';
import getWeekMenu from '../utils/getWeekMenu.js';
import getMorningDayMenu from '../utils/getMorningDayMenu.js';
import DayMenu from './dayMenu/DayMenu';

class Main extends Component {

	render() {

		const morningMenu = getMorningDayMenu();

		return (
			<div>
				<h1> Заказать на завтра </h1>
				<DayMenu dishs={morningMenu} />
			</div>
		);
	}
}

export default Main;