import React, { Component } from 'react';
import './DayMenu.css';

class DayMenu extends Component {

	render() {

		const menu = this.props.dishs;
		console.log(menu)
		return (
			<div
				className='day-menu'
			>
				<div
					className='day-menu__item'
				>
					<div
						className='day-menu__category'
					>
						Салат
					</div>
					{menu.salad}
				</div>
								<div
					className='day-menu__item'
				>
					<div
						className='day-menu__category'
					>
						Суп
					</div>
					{menu.soup}
				</div>
				<div
					className='day-menu__item'
				>
					<div
						className='day-menu__category'
					>
						Горячее
					</div>
					{menu.hotter}
				</div>
				{menu.sidedish&&<div
					className='day-menu__item'
				>
					<div
						className='day-menu__category'
					>
						Гарнир
					</div>
					{menu.sidedish}
				</div>}
			</div>
		);
	}
}

export default DayMenu;