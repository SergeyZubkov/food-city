import React, { Component } from 'react';
import './Main.css';

import DayMenu from './dayMenu/DayMenu';
import CountersLine from './countersLine/CountersLine';

class Main extends Component {

	render() {
		return (
			<div className="main">
				<h1> Меню на <span>  {this.props.menuDay} </span></h1>
				<DayMenu dishs={this.props.menu} />
				<CountersLine />
			</div>
		);
	}
}

export default Main;