import getWeekNumber from './getWeekNumber.js';
import menu from '../data/menu.json';


function getWeekMenu() {
	let morning = new Date().getDate() + 1;
	console.log(morning)
	let week = getWeekNumber(morning) % 2 ? "secondWeek" : "firstWeek";

	return menu[week]
}

export default getWeekMenu;