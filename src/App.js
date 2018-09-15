import React, { Component } from 'react';
import './App.css'

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Header from './commons/header/Header';
import Main from './pages/main/Main';
import Menu from './pages/menu/Menu';
import Callback from './pages/callback/Callback';
import Subheader from './commons/subheader/Subheader';
import DeliveryZone from './pages/deliveryZone/DeliveryZone';


import menuDataService from './utils/menuDataService';

class App extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			currentMenu: null,
			menuDayName: null
		}
	}

	componentWillMount() {
		this.setMenu()
	}

	setMenu() {
		const timeOfNextDay = menuDataService.getMsToToggleMenuOnNextDay();

		if(timeOfNextDay > 0) {
			let currentMenu = menuDataService.getTodayMenu();
			this.setState({
				currentMenu,
				menuDayName: menuDataService.getDayName(currentMenu).toLowerCase()
			});
			this.toggleMenuTimer = setTimeout(() => this.setMenu(), timeOfNextDay);
		} else {
			let currentMenu = menuDataService.getNextDayMenu();
			console.log(currentMenu);
			this.setState({
				currentMenu,
				menuDayName: menuDataService.getDayName(currentMenu).toLowerCase()
			});
		}
	}

	componentWillUnmount() {
		clearTimeout(this.toggleMenuTimer);
	}

	render() {

		return (
			<Router>
				<div className='wrapper'>
					<Header />
					<Subheader />
					<div
						className='content'
					>
						<Route exact path="/main" render={props => <Main menu={this.state.currentMenu} menuDayName={this.state.menuDayName}/>}/>
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
