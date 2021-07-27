import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
			phone: '555-555-5555',
			email: 'email@me.com',
			portfolio: 'www.portfolio.com',
			github: 'github.com/me',
		};

	}

	render() {
		return (
			<section className="contact">
				<h2>Contact</h2>
				<ul className="contact-list">
					{ Object.entries(this.state).map(([key, value]) => {
						return (
							<ContactItem 
								type={key}
								value={value}
								key={uuidv4()}
							/>
						);
					})}
				</ul>
			</section>
		);
	}
}

export default Contact;