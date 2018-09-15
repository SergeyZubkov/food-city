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
					{menu.salad} <span className='day-menu-item__category-or'>или</span> <i>{menu.asalad}</i>*
				</div>
								<div
					className='day-menu__item'
				>
					<div
						className='day-menu__category'
					>
						Суп
					</div>
					{menu.soup} <span className='day-menu-item__category-or'>или</span> <i>{menu.asoup}</i>*
				</div>
				<div
					className='day-menu__item'
				>
					<div
						className='day-menu__category'
					>
						Горячее
					</div>
					{menu.hotter} <span className='day-menu-item__category-or'>или</span> <i>{menu.ahotter}</i>*
				</div>
				<div
					className='day-menu__item'
				>
					<div
						className='day-menu__category'
					>
						Гарнир
					</div>
					{menu.dish} <span className={menu.dish ? "day-menu-item__category-or": "day-menu-item__category-or-off"}>или</span> <i>{menu.adish}</i>*
				</div>
			</div>
		);
	}
}

export default DayMenu;