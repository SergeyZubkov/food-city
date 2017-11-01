import React, { Component } from 'react';
import './Callback.css';
import serialize from '../utils/serialize';
import nanoajax from "nanoajax"

class Callback extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	name: '',
    	phone: '',
    	amount: '',
    	addressDeliver: '',
    	error: false,
    	submit: false,
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangePhone(event) {
    this.setState({phone: event.target.value});
  }

  handleChangeAmount(event) {
    this.setState({amount: event.target.value});
  }

  handleChangeAddress(event) {
    this.setState({addressDeliver: event.target.value});
  }

  handleSubmit(event) {
  	if (this.state.name&&this.state.phone&&this.state.addressDeliver&&this.state.amount) {
  		this.setState({error: false, submit: true});
  		this.sendForm();
  	} else {
  		this.setState({error: true});
  	}

    event.preventDefault();
  }

  sendForm() {
  	const {
  		name,
  		phone,
  		amount,
  		addressDeliver
  	} = this.state;

  	nanoajax.ajax({
  		url: 'mail.php', 
  		method: 'POST', 
  		body: serialize({
  			name,
  			phone,
  			amount,
  			addressDeliver
  		})
  	}, () => null)
  	console.log({name, phone, amount, addressDeliver})
  }

	render() {
		return (
			<div className="callback">
				<h2> Оставьте ваши контактные данные и наш консультант свяжется с вами </h2>
				<form 
					style={{display: this.state.submit ? 'none' : 'block'}}
					onSubmit={this.handleSubmit}
				>
					<div
						className='form__line'
					>
						<label htmlFor='name'>Имя:</label>
						<input 
							name='name'
	          	type="text" 
	          	value={this.state.name} 
	          	onChange={this.handleChangeName}
	          />
					</div>
					<div
						className='form__line'
					>
						<label htmlFor='phone'>Телефон:</label>
						<input 
							name='phone'
	          	type="text" 
	          	value={this.state.phone} 
	          	onChange={this.handleChangePhone}
	          />
					</div>
					<div
						className='form__line'
					>
						<label htmlFor='amount'>Кол. обедов:</label>
						<input 
							name='amount'
	          	type="number" 
	          	min='0'
	          	value={this.state.amount} 
	          	onChange={this.handleChangeAmount}
	          />
					</div>
					<div
						className='form__line'
					>
						<label htmlFor='address'>Адрес:</label>
						<input 
							name='addressDeliver'
	          	type="text" 
	          	value={this.state.addressDeliver} 
	          	onChange={this.handleChangeAddress}
	          />
					</div>
	        <div
	        	className='callback-error'
	        	style={{display: this.state.error ? 'block' : 'none'}}
	        >
	        	Заполните поля формы!
	        </div>
	        <input 
	        	type="submit" 
	        	value="Отправить" 
	        />
	      </form>
      	<div
        	className='callback-after-submit'
        	style={{display: this.state.submit ? 'block' : 'none'}}
        >
        	Ожидайте звонка
        </div>
			</div>
		);
	}
}

export default Callback;