import m from '../data/menu.json';
import changeQuotesType from './changeQuotesType';

const menu = m.map(menuOfDay => {
	console.log(menuOfDay)
	for (let key in menuOfDay) {
		if (typeof menuOfDay[key] === 'string') menuOfDay[key] = changeQuotesType(menuOfDay[key])
	}
	return menuOfDay;
})

function getTodayMenu() {
	const day = new Date().getDate()
	
	return menu.find(menuItem => menuItem.day >= day)
}

function getNextDayMenu() {
	const day = new Date().getDate() + 1
	return menu.find((menuItem) => menuItem.day >= day)
}

function getDayName(menu) {
	let today = new Date();
	if (menu.day === today.getDate()) return 'сегодня'
	if (menu.day === today.getDate() + 1) return 'завтра';

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
		const addHours = 17;
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
