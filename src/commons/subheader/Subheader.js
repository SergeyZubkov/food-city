import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import delivery from '../../delivery.png';
import './Subheader.css'

export default class Subheader extends Component {
	render() {
		return (
			<div
				className='info'
			>
				<div className="info__content">
					<div className="info__row">
						<div className="info__message-1">Разнообразные, свежие обеды за <b>200 рублей!</b></div>
						<div
							className='deliver'
						>
							<div className="deliver__text"> 
								<Link to="/delivery-zone" className="deliver__link">
									<img src={delivery} width='50px' alt='доставка' />
									Зона бесплатной доставки
								</Link>
							</div>
						</div>
					</div>
					<div className="info__row">
						<div className="info__message-2">
							Заказы принимаются до 11:00 на текущий день! 
							Если вы позвоните позже, мы постараемся для вас что-нибудь придумать.
						</div>
						<div className="info__message-2">
							<b>Акция!</b> При заказе обеда до 19:00 на следующий день - ягодный напиток 250 мл. БЕСПЛАТНО!
						</div>
					</div>
				</div>
			</div>
		);
	}
}
