import React, { Component } from 'react';
import './DayMenuItem.css';

class DayMenuItem extends Component {

	render() {

		const menu = this.props.dishs;
		const day = this.props.day;

		return menu ? (
			<div
				className='day-menu-item'
			>
				<div className='day-menu-item__day'>{day}</div>
				<div
					className='day-menu-item__item'
				>
					<div
						className='day-menu-item__category'
					>
						Салат
					</div>
					{menu.salad}
				</div>
								<div
					className='day-menu-item__item'
				>
					<div
						className='day-menu-item__category'
					>
						Суп
					</div>
					{menu.soup}
				</div>
				<div
					className='day-menu-item__item'
				>
					<div
						className='day-menu-item__category'
					>
						Горячее
					</div>
					{menu.hotter}
				</div>
				{menu.sidedish&&<div
					className='day-menu-item__item'
				>
					<div
						className='day-menu-item__category'
					>
						Гарнир
					</div>
					{menu.sidedish}
				</div>}
			</div>
		)
		: <div className='day-menu-item day-menu-item_inactive'>
				<div className='day-menu-item__day'> {day} </div>
		 </div>
	}
}

export default DayMenuItem;