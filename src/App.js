import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Main from './main/Main';
import Menu from './menu/Menu';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<div
						className='header'
					>
						<div
							className='header__content'
						>
							<div
								className='header__right'
							>
								<div
									className='header-right__menu'
								>
									<Link to='/menu'>Все меню</Link>
								</div>
								<div
									className='header-right__menu'
								>
									<Link to='/'>Меню на завтра</Link>
								</div>
								<div
									className='btn'
								>
									Заказать обратный звонок
								</div>
							</div>
						</div>
					</div>
					<div
						className='content'
					>
						<Route exact path="/" component={Main}/>
						<Route path="/menu" component={Menu}/>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
