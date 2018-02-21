import React, { Component } from 'react';

import './DeliveryZone.css';
import deliveryZone from '../../delivery-zone.png';

export default class DeliveryZone extends Component {
	render() {
		return (
			<div className='delivery-zone'>
				<h2>Зона бесплатной доставки</h2>
				<img src={deliveryZone} />

				<p className="delivery-zone__text">
					Бесплатная доставка в другие районы, при заказе от 10 обедов.
				</p>
			</div>
		);
	}
}
