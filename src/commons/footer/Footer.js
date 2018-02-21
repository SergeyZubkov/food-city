

import React, { Component } from 'react';
import './Footer.css';

import mailIcon from '../../mail.jpg';

class Footer extends Component {

	render() {
		return (
			<div className="footer">
					<div
						className='header__mail'
					>
						<div className='header-mail__icon-container'> 
							<img src={mailIcon} width='25' alt=''/>
						</div>
						<p className='header-mail__text'>edacity@yandex.ru</p>
					</div>
			</div>
		);
	}
}

export default Footer;