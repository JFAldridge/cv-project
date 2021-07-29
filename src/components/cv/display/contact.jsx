import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CVForm from '../form/cv-form.jsx';

function ContactItem(props) {
	const iconClasses = {
			phone: "bi bi-telephone-fill",
			email: "bi bi-envelope-fill",
			portfolio: "bi bi-border-style",
			github: "bi bi-github",
		};

		if (props.value === null) return null;
		
		return (
			<li className={props.type}><i className={iconClasses[props.type]}></i>{props.value}</li>
		);
}

class Contact extends Component {
	constructor(props) {
		super(props);

		this.state = {
			phone: ['555-555-5555', 'tel', 'Phone'],
			email: ['email@me.com', 'email', 'Email'],
			portfolio: ['www.portfolio.com', 'url', 'Portfolio'],
			github: ['github.com/me', 'text', 'Github'],
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const name = target.name;

		// Convert empty string to null to remove field
		let value = target.value;
		if (value === '') {
			value = null;
		}

		let inputInfo = this.state[name].slice();
		inputInfo[0] = value;
	
		this.setState({
		  [name]: inputInfo
		});
	  }

	render() {
		return (
			<section className="contact">
				<h2>Contact</h2>
				<ul className="contact-list">
					{ Object.entries(this.state).map(([key, inputInfo]) => {
						return (
							<ContactItem 
								type={key}
								value={inputInfo[0]}
								key={uuidv4()}
							/>
						);
					})}
				</ul>
				<CVForm 
					fields={this.state} 
					inputChangeHandle={this.handleInputChange}
				/>
			</section>
		);
	}
}

export default Contact;