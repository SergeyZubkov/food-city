import getWeekName from './getWeekName.js';


function getNextWeekMenu() {
	return getWeekName() === 'secondWeek'? "firstWeek" : "secondWeek";
}

export default getNextWeekMenu;