import React, { Component } from 'react';
import './DayMenu.css';

class DayMenu extends Component {

	render() {

		const menu = this.props.dishs;

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
					{menu.firstDish}
				</div>
								<div
					className='day-menu__item'
				>
					<div
						className='day-menu__category'
					>
						Суп
					</div>
					{menu.secondDish}
				</div>
								<div
					className='day-menu__item'
				>
					<div
						className='day-menu__category'
					>
						Горячее
					</div>
					{menu.thirdDish}
				</div>
			</div>
		);
	}
}

export default DayMenu;