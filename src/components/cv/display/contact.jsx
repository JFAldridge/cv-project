import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CVForm from '../form/cv-form.jsx';

class ContactItem extends Component {
	getIconClass(type) {
		const iconClasses = {
			phone: "bi bi-telephone-fill",
			email: "bi bi-envelope-fill",
			portfolio: "bi bi-border-style",
			github: "bi bi-github",
		};

		return iconClasses[type];
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.freshMount) {
			this.props.mountAge();
		}
	}
	
	render() {
		const {type, placeholder, value} = this.props;

		if (this.props.freshMount) {
			return (
				<li className={type}>
					<i className={this.getIconClass(type)}></i>
					{placeholder}
				</li>
			);
		} else {
			if (value === null) return null;

			return (
				<li className={type}>
					<i className={this.getIconClass(type)}></i>
					{value}
				</li>
			);
		}
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

		this.ageMount = this.ageMount.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	ageMount() {
		this.setState({
			freshMount: false
		});
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
								key={key}
								freshMount={freshMount}
								mountAge={this.ageMount}
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