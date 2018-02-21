import React, { Component } from 'react';
import './App.css'

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Header from './commons/header/Header';
import Main from './pages/main/Main';
import Menu from './pages/menu/Menu';
import Callback from './pages/callback/Callback';
import Subheader from './commons/subheader/Subheader';
import DeliveryZone from './pages/deliveryZone/DeliveryZone';

import getMsToToggleMenuOnNextDay from './utils/getMsToToggleMenuOnNextDay';
import getDayMenu from './utils/getDayMenu';
import getNextDayMenu from './utils/getNextDayMenu';
import getMenuDay from './utils/getMenuDay';

import menuDataService from './utils/menuDataService';

class App extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			menu: null,
			menuDay: null
		}
	}

	componentWillMount() {
		this.setMenu()
	}

	setMenu() {
		const timeOfNextDay = menuDataService.getMsToToggleMenuOnNextDay();
		console.log(timeOfNextDay);
		if(timeOfNextDay > 0) {
			let menu = getDayMenu();
			this.setState({
				menu: menu,
				menuDay: getMenuDay(menu).toLowerCase()
			});
			this.toggleMenuTimer = setTimeout(() => this.setMenu(), timeOfNextDay);
		} else {
			let menu = getNextDayMenu();
			this.setState({
				menu: menu,
				menuDay: getMenuDay(menu).toLowerCase()
			});
		}
	}

	componentDidMount() {
		clearTimeout(this.toggleMenuTimer);
	}

	render() {

		return (
			<Router>
				<div className='wrapper'>
					<Header menuDay={this.state.menuDay} />
					<Subheader />
					<div
						className='content'
					>
						<Route exact path="/main" render={props => <Main menu={this.state.menu} menuDay={this.state.menuDay}/>}/>
						<Route path="/menu" component={Menu}/>
						<Route path="/callback" component={Callback}/>
						<Route path="/delivery-zone" component={DeliveryZone}/>
						<Redirect to='/main' />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
