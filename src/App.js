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
import getMenuDay from './utils/getMenuDay';

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
		const timeOfNextDay = getMsToToggleMenuOnNextDay();

		if(timeOfNextDay > 0) {
			let menu = getDayMenu();
			this.setState({
				menu: menu,
				menuDay: getMenuDay(menu)
			});
			this.toggleMenuTimer = setTimeout(() => this.setMenu(), timeOfNextDay);
		} else {
			let menu = getNextDayMenu();
			this.setState({
				menu: menu,
				menuDay: getMenuDay(menu)
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
					<div
						className='info'
						>
							<div className="info__content">
									Разнообразные, свежие обеды за 200 рублей!
								<span
									className='deliver'
								>
									<img src={deliver} width='50px' alt='доставка' />
									Доставка по <b>СЗАО</b> осуществляется <strong>бесплатно</strong>!<br/>
									В другие округа стоимость доставки составляет 390 рублей.
							</span>
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
