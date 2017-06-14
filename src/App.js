import React, { Component } from 'react';
import deliver from './delivery.png';
import './App.css'

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Header from './header/Header';
import Main from './main/Main';
import Menu from './menu/Menu';
import Callback from './callback/Callback';

import getMsToToggleMenuOnNextDay from './utils/getMsToToggleMenuOnNextDay';
import getDayMenu from './utils/getDayMenu';
import getNextDayMenu from './utils/getNextDayMenu';


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
		const msToToggleMenuOnNextDay = getMsToToggleMenuOnNextDay();

		if(msToToggleMenuOnNextDay > 0) {
			this.setState({
				menu: getDayMenu(),
				menuDay: 'сегодня'
			});
			setTimeout(() => this.setMenu(), msToToggleMenuOnNextDay);
		} else {
			this.setState({
				menu: getNextDayMenu(),
				menuDay: 'завтра'
			});
		}
	}

	render() {
		return (
			<Router>
				<div>
					<Header menuDay={this.state.menuDay} />
					<div
						className='info'
						>
							<p>
								 Разнообразные, свежие обеды за 200 рублей!
							</p>
							<div
								className='deliver'
							>
								<img src={deliver} width='50px' alt='доставка' />
								Доставка осуществляется <strong>бесплатно</strong>!
						</div>
					</div>
					<div
						className='content'
					>
						<Route exact path="/main" render={props => <Main menu={this.state.menu} menuDay={this.state.menuDay}/>}/>
						<Route path="/menu" component={Menu}/>
						<Route path="/callback" component={Callback}/>
						<Redirect to='/main' />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
