import m from '../data/menu.json';
import changeQuotesType from './changeQuotesType';

let isLastDayOfMonth;

const menu = m.map(menuOfDay => {
	for (let key in menuOfDay) {
		if (typeof menuOfDay[key] === 'string') {
			menuOfDay[key] = changeQuotesType(menuOfDay[key]);
			menuOfDay[key] = menuOfDay[key].substr(0,1).toUpperCase() + menuOfDay[key].substr(1);
		}
	}
	return menuOfDay;
})

const increaseDateIfNeeded = (d) => {

	if (menu.some(i => i.day === d.getDate())) {
		return d.getDate()
	} else {
		console.log('increase')

		return increaseDateIfNeeded(new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1))
	}
}

function getTodayMenu() {

	const t = new Date();
		isLastDayOfMonth = t.getDate() === new Date(t.getFullYear(), t.getMonth() +1 , 0);
	let day = t.getDate();

	day = increaseDateIfNeeded(t);

	const dayMenu = menu.find(i => i.day === day);

	return dayMenu||menu[menu.length-1]
}

function getNextDayMenu() {
	const t = new Date();
		isLastDayOfMonth = t.getDate() === new Date(t.getFullYear(), t.getMonth() + 1, 0);
	const nextDay = new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1);
	let nextDayDate = nextDay.getDate();

	nextDayDate = increaseDateIfNeeded(nextDay);

	const nextDayMenu = menu.find(i => i.day === nextDayDate);

	return nextDayMenu||menu[menu.length-1]
}

function getDayName(menu) {
	console.log(menu)

	let today = new Date();
	if (menu.day === today.getDate()) return 'сегодня'
	if (menu.day === today.getDate() + 1) return "завтра"
		console.log(isLastDayOfMonth)
	if (isLastDayOfMonth) today = new Date(today.getFullYear(), today.getMonth() + 1, menu.day)


	return [
		'Воскресенье', 
		'Понедельник', 
		'Вторник', 
		'Среду', 
		'Четверг', 
		'Пятницу', 
		'Субботу'
	][new Date(today.getFullYear(), today.getMonth(), menu.day).getDay()];
}

function getMsToToggleMenuOnNextDay() {
	// сегоднешнее меню меняется на завтрашнее в 17:00
		const addHours = 14;
		const d = new Date();
		const currentTime = d.getTime();
		const nextDayMenuTime = new Date(d.getFullYear(), d.getMonth(), d.getDate(), addHours).getTime();

		const diff = nextDayMenuTime - currentTime;

		return diff;

}


export default {
	getTodayMenu,
	getDayName,
	getNextDayMenu,
	getMsToToggleMenuOnNextDay
}
