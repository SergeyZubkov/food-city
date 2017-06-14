import getWeekName from './getWeekName.js';
import getNextWeekName from './getNextWeekName.js';
import menu from '../data/menu.json';

function getDayMenu() {
	//  0 - это воскресенье, 6 - суббота
	let dayWeek = new Date().getDay();
	let week = getWeekName();
	let dayMenu;

	if ([0,6].indexOf(dayWeek) !== -1) {
	// если текущий день воскресенье или суббота, то
	// возвращать меню на понедельник следующей недели
		dayWeek = 0;
		week = getNextWeekName();
		dayMenu = menu[week][dayWeek];
	} else {
		dayMenu = menu[week][dayWeek-1];
	}

	return dayMenu;

}

export default getDayMenu;