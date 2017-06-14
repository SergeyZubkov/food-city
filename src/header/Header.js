import React, { Component } from 'react';
import './Header.css';

import whatsapp from '../whatsapp.png';
import logo from '../food-city-logo.png';

import {NavLink, Link} from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const menu = [
	{
		title: 'Меню',
		path: '/menu'
	},
	{
		title: 'Текущий обед',
		path: '/main'
	},
	{
		title: 'Заказать',
		path: '/callback'
	}
]


class Header extends Component {

	render() {
		return (
			<div
				className='header'
			>
				<div
					className='header__content'
				>
					<NavLink 
						to='/main'
						className='logo-link'
					> 
						<img src={logo} width='80px' alt='ЕдаСити.рф'/>
					</NavLink>
					<div
						className='header__phone'
					>	
						<img src={whatsapp} width='20px' alt='доставка' />
						<a
							href='tel:89296729324'
							className='phone'
						>
							8 929 672-93-24
						</a>
						<a
							href='tel:84955321434'
							className='phone'
						>
							8 495 532-14-34
						</a>
					</div>
					<div 		
						className='header__right'
					>
						<Navbar items={menu} />
					</div>
				</div>
			</div>
		);
	}
}

export default Header;