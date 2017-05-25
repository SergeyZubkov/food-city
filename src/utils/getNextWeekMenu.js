import getWeekMenu from './getWeekMenu.js';
import menu from '../data/menu.json';


function getNextWeekMenu() {
	let nextWeek = getWeekMenu() === 'secondWeek' % 2 ? "firstWeek" : "secondWeek";

	return menu[nextWeek];
}

export default getNextWeekMenu;