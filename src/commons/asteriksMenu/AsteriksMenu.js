import React, { Component } from 'react';
import './AsteriksMenu.css';

export default class AsteriksMenu extends Component {
	render() {
		console.log('asteriks')
		console.log(this.props)
		return (
			<div className="asteriks-menu" style={{textAlign: this.props.textAlign||"left"}}>
				* Альтернативные блюда нужно заказывать заранее, до 19:00 предыдущего дня
			</div>
		);
	}
}
