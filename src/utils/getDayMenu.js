import menu from '../data/menu-december.json';

function getDayMenu() {
	const day = new Date().getDate()
	
	return menu.find(menuItem => menuItem.day >= day)
}

export default getDayMenu;