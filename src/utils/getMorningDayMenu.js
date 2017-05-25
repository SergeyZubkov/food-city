import getWeekMenu from './getWeekMenu.js';
import getNextWeekMenu from './getNextWeekMenu.js';

function getMorningDayMenu() {
	
	let dayWeek = new Date().getDay();
	let week = getWeekMenu();

	if ([0,6,5].indexOf(dayWeek) !== -1) {
		dayWeek = 1;
		week = getNextWeekMenu();
	}

	return week[dayWeek];

}

export default getMorningDayMenu;