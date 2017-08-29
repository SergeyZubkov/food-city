import getWeekName from './getWeekName.js';
import getNextWeekName from './getNextWeekName.js';
import menu from '../data/menu.json';

function getNextDayMenu() {
	//  0 - это воскресенье, 6 - суббота
	let d = new Date();
	let dayWeek = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1).getDay();
	let week = getWeekName();
	let dayMenu;

	if ([0, 6, 1].indexOf(dayWeek) !== -1) {
	// если следующий день суббота, воскресенье или понедельник, то
	// возвращать меню на понедельник следующей недели
		dayWeek = 0;
		week = getNextWeekName();
		dayMenu = menu[week][dayWeek];
	} else {
		dayMenu = menu[week][dayWeek-1];
	}

	return dayMenu;

}

export default getNextDayMenu;