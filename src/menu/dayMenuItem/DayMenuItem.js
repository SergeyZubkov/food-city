import React, { Component } from 'react';
import './DayMenuItem.css';

class DayMenuItem extends Component {

	render() {

		const menu = this.props.dishs;

		return (
			<div
				className='day-menu-item'
			>
				<div
					className='day-menu-item__day'
				>
					{"Пн Вт Ср Чт Пт".split(" ")[this.props.day]}
				</div>
				<div
					className='day-menu-item__item'
				>
					<div
						className='day-menu-item__category'
					>
						Салат
					</div>
					{menu.firstDish}
				</div>
								<div
					className='day-menu-item__item'
				>
					<div
						className='day-menu-item__category'
					>
						Суп
					</div>
					{menu.secondDish}
				</div>
								<div
					className='day-menu-item__item'
				>
					<div
						className='day-menu-item__category'
					>
						Горячее
					</div>
					{menu.thirdDish}
				</div>
			</div>
		);
	}
}

export default DayMenuItem;