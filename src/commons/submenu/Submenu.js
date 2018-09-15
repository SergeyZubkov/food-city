import React, { Component } from 'react';
import './Submenu.css';

import s from '../../data/submenu/souces';
import b from '../../data/submenu/bread';
import j from '../../data/submenu/juices';


export default class Submenu extends Component {
	render() {
		return (
			<div className="submenu">
				<div className="submenu-header">Дополнительное меню</div>
				<div className="submenu-category">
					<div className="submenu-category-title">Соусы:</div>
					{s.map((i,k) => <div className="submenu-category-item" key={k}>
							<div className="submenu-category-item-name">{i.name}</div>
							<div className="submenu-category-item-price">{i.price} руб.</div>
						</div>)}
					<div className="submenu-category-title">Хлеб:</div>
					{b.map((i,k) => <div className="submenu-category-item" key={k}>
							<div className="submenu-category-item-name">{i.name}</div>
							<div className="submenu-category-item-price">{i.price} руб.</div>
						</div>)}
					<div className="submenu-category-title">Соки (250 мл.):</div>
					{j.map((i,k) => <div className="submenu-category-item" key={k}>
							<div className="submenu-category-item-name">{i.name}</div>
							<div className="submenu-category-item-price">{i.price} руб.</div>
						</div>)}
				</div>
			</div>
		);
	}
}
