import React, { Component } from 'react';
import CVForm from './form/cv-form';
import CV from './cv';

class CVCreator extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			contact_phone: [null, 'tel', 'Phone', '555-555-5555'],
			contact_email: [null, 'email', 'Email', 'email@me.com'],
			contact_portfolio: [null, 'url', 'Portfolio', 'www.portfolio.com'],
			contact_github: [null, 'url', 'Github', 'github.com/me'],
			displayForm: null,
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.displayForm = this.displayForm.bind(this);
	}

	handleInputChange(event) {
		const name = event.target.name;

		// Convert empty string to null to remove unused fields
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

	displayForm(section) {
		this.setState({
			displayForm: section
		});
	}

	sortedFields(fields) {
		const sortedFields = {};
		Object.keys(this.state).forEach((key) => {
			const underscoreIndex = key.indexOf('_');
			if (underscoreIndex === -1) return;

			const section = key.slice(0, underscoreIndex);
		
			if (!sortedFields[section]) {
				sortedFields[section] = {};
			}
		
			sortedFields[section][key] = this.state[key];
		})

		return sortedFields;
	}

	render() {
		const sortedFields = this.sortedFields();

		return (
			<div className="cv-creator">
				<CV 
					contact={sortedFields.contact}
					formDisplay={this.displayForm}
				/>
				{this.state.displayForm && 
					<CVForm 
						fields={sortedFields[this.state.displayForm]} 
						inputChangeHandle={this.handleInputChange}
						formDisplay={this.displayForm}
					/>
				}
			</div>
		);
	}
}

export default CVCreator;