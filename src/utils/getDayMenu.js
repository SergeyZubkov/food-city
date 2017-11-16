import menu from '../data/menu-november.json';

function getDayMenu() {
	const day = new Date().getDate()
	
	return menu.find(menuItem => menuItem.day >= day)
}

export default getDayMenu;