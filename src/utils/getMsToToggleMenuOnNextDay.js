function getMsToToggleMenuOnNextDay() {
	// сегоднешнее меню меняется на завтрашнее в 17:00
		const addHours = 17;
		const d = new Date();
		const currentTime = d.getTime();
		const nextDayMenuTime = new Date(d.getFullYear(), d.getMonth(), d.getDate(), addHours).getTime();
		const diff = nextDayMenuTime - currentTime;

		return diff;

}

export default getMsToToggleMenuOnNextDay;