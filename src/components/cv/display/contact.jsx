import React, { Component } from 'react';

class ContactItem extends Component {
	getIconClass(type) {
		const iconClasses = {
			contact_phone: "bi bi-telephone-fill",
			contact_email: "bi bi-envelope-fill",
			contact_portfolio: "bi bi-border-style",
			contact_github: "bi bi-github",
		};

		return iconClasses[type];
	}
	
	render() {
		const {type, value} = this.props;

		if (value === null) return null;

		return (
			<li className={type}>
				<i className={this.getIconClass(type)}></i>
				{value}
			</li>
		);	
	}
}

class Contact extends Component {
	constructor(props) {
		super(props);

		this.displayForm = this.displayForm.bind(this);
	}

	allFieldValuesNull(fields) {
		/* When all field values are null, the cv is populated
		by placeholder text. This provides a design guide to the
		templates usage.
		*/
		return Object.values(fields).every((inputInfo) => inputInfo[0] === null);
	}

	displayForm() {
		this.props.formDisplay('contact');
	}

	render() {
		const fields = this.props.fields;

		return (
			<section className="contact">
				<i 
                    className="bi bi-pencil-square edit-section"
                    onClick={() => this.displayForm()}
                ></i>
				<h2>Contact</h2>
				<ul className="contact-list">
					{ Object.entries(fields).map(([key, inputInfo]) => {
						return (
							<ContactItem 
								type={key}
								value={this.allFieldValuesNull(fields) ? inputInfo[3] : inputInfo[0]}
								key={key}
							/>
						);
					})}
				</ul>
			</section>
		);
	}
}

export default Contact;