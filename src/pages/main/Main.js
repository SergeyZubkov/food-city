import React, { Component } from 'react';
import './Main.css';

import DayMenu from './dayMenu/DayMenu';
import Submenu from '../../commons/submenu/Submenu';
import AsteriksMenu from '../../commons/asteriksMenu/AsteriksMenu';

class Main extends Component {

	render() {
		return (
			<div className="main">
				<h1> Меню на <span>  {this.props.menuDayName} </span></h1>
				<AsteriksMenu textAlign='center' />
				<DayMenu dishs={this.props.menu} />
				<Submenu/>
			</div>
		);
	}
}

export default Main;