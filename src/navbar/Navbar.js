import React, { Component } from 'react';
import './Navbar.css';

import {NavLink} from 'react-router-dom';

class Navbar extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			isOpen: false
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		console.log(e)
		if (this.state.isOpen) {
			this.setState({isOpen: false});
		} else {
			this.setState({isOpen: true});
		}
	}

	render() {
		const generateItemJSX = (item) => {
			return (
				<div className="navbar-menu__item"
					key={item.title}
				>
					<NavLink
						to={item.path}
						className='link'
						activeClassName='link_active'
					>
						{item.title}
					</NavLink>
				</div>
			)
		}
		return (
			<div 
				className="navbar"
				onClick={this.handleClick}
			>
				<div
					className='navbar__icon'
				>
					<span className="navbar-icon__line"></span>
					<span className="navbar-icon__line"></span>
					<span className="navbar-icon__line"></span>
				</div>
				<div 
					className={`navbar__menu ${this.state.isOpen ? "navbar__menu_opened": "navbar__menu_closed"}`} 
				>
					{this.props.items.map(item => generateItemJSX(item))}
				</div>
			</div>
		);
	}
}

export default Navbar;