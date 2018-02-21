import React, {Component} from 'react';
import CountTo  from 'react-count-to';
import './CountersLine.css';

class CountersLine extends Component {
	render() {
		return (
			<div
				className='counters-line'
			>
				<div className="counters-line__item">
					<CountTo className="counters-line__item-counter" to={21} speed={1220} />
					<div className="counters-line__item-title">Салатов</div>
				</div>
				<div className="counters-line__item">
					<CountTo className="counters-line__item-counter" to={21} speed={1220} />
					<div className="counters-line__item-title">Супов</div>
				</div>
				<div className="counters-line__item">
					<CountTo className="counters-line__item-counter" to={21} speed={1320} />
					<div className="counters-line__item-title">Вторых блюд</div>
				</div>
				<div className="counters-line__item">
					<CountTo className="counters-line__item-counter" to={201} speed={1420} />
					<div className="counters-line__item-title">Довольных клиентов</div>
				</div>
			</div>
		)
	}
}

export default CountersLine;