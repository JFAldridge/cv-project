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
	
	if (props.freshMount) {
		return (
			<li className={props.type}>
				<i className={iconClasses[props.type]}></i>
				{props.placeholder}
			</li>
		);
	} else {
		if (props.value === null) return null;

		return (
			<li className={props.type}>
				<i className={iconClasses[props.type]}></i>
				{props.value}
			</li>
		);
	}
}

class Contact extends Component {
	constructor(props) {
		super(props);

		this.state = {
			phone: [null, 'tel', 'Phone', '555-555-5555'],
			email: [null, 'email', 'Email', 'email@me.com'],
			portfolio: [null, 'url', 'Portfolio', 'www.portfolio.com'],
			github: [null, 'url', 'Github', 'github.com/me'],
			freshMount: true,
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	ageMount() {
		if (this.state.freshMount) {
			this.setState({
				freshMount: false
			});
		}
	}

	handleInputChange(event) {
		const name = event.target.name;

		// Convert empty string to null to remove field
		let value = event.target.value;
		if (value === '') {
			value = null;
		}

		let inputInfo = this.state[name].slice();
		inputInfo[0] = value;

		this.ageMount();
	
		this.setState({
		  [name]: inputInfo
		});

	}

	render() {
		const {freshMount, ...fields} = this.state;

		return (
			<section className="contact">
				<h2>Contact</h2>
				<ul className="contact-list">
					{ Object.entries(fields).map(([key, inputInfo]) => {
						return (
							<ContactItem 
								type={key}
								value={inputInfo[0]}
								placeholder={inputInfo[3]}
								key={uuidv4()}
								freshMount={freshMount}
							/>
						);
					})}
				</ul>
				<CVForm 
					fields={fields} 
					inputChangeHandle={this.handleInputChange}
				/>
			</section>
		);
	}
}

export default Contact;