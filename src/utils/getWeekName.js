import getWeekNumber from './getWeekNumber.js';

function getWeekName() {
	//  0 - это воскресенье, 6 - суббота
	let date = new Date();
	let week = getWeekNumber(date) % 2 ? "secondWeek" : "firstWeek";

	return week;
}

export default getWeekName;