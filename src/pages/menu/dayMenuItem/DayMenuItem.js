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
					{menu.salad} <span className='day-menu-item__category-or'>или</span> <i>{menu.asalad}</i>*
				</div>
								<div
					className='day-menu-item__item'
				>
					<div
						className='day-menu-item__category'
					>
						Суп
					</div>
					{menu.soup} <span className='day-menu-item__category-or'>или</span> <i>{menu.asoup}</i>*
				</div>
				<div
					className='day-menu-item__item'
				>
					<div
						className='day-menu-item__category'
					>
						Горячее
					</div>
					{menu.hotter} <span className='day-menu-item__category-or'>или</span> <i>{menu.ahotter}</i>*
				</div>
				<div
					className='day-menu-item__item'
				>
					<div
						className='day-menu-item__category'
					>
						Гарнир
					</div>
					{menu.dish} <span className={menu.dish ? "day-menu-item__category-or": "day-menu-item__category-or-off"}>или</span> <i>{menu.adish}</i>*
				</div>
			</div>
		)
		: <div className='day-menu-item day-menu-item_inactive'>
				<div className='day-menu-item__day'> {day} </div>
		 </div>
	}
}

export default DayMenuItem;