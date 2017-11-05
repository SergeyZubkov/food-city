const getMenuDay = (menu) => {
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

export default getMenuDay;