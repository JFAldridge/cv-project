import React, { Component } from 'react';
import CVForm from './form/cv-form';
import CVDynamicForm from './form/cv-dynamic-form';
import CV from './cv';
import CVDynamicFrom from './form/cv-dynamic-form';

class CVCreator extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			contact_phone: [null, 'tel', 'Phone', '555-555-5555'],
			contact_email: [null, 'email', 'Email', 'email@me.com'],
			contact_portfolio: [null, 'url', 'Portfolio', 'www.portfolio.com'],
			contact_github: [null, 'url', 'Github', 'github.com/me'],
			education_degree1: [null, 'text', 'Degree', 'Bachelors of a Field'],
			education_institution1: [null, 'text', 'Institution', 'University of a State'],
			education_timeToDegree1: [null, 'timeSpan', 'Time to Degree', '2014-2018'],
			education_degree2: [null, 'text', 'Degree', 'Bachelors of a Field'],
			education_institution2: [null, 'text', 'Institution', 'University of a State'],
			education_timeToDegree2: [null, 'timeSpan', 'Time to Degree', '2014-2018'],
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

	sortStateIntoSections() {
		/* {contact: {field1: [i, n, f, o], field2: [], ...}, education: {}, ...} */
		const sectionSortedFields = {};

		Object.keys(this.state).forEach((key) => {
			const underscoreIndex = key.indexOf('_');
			// Filter out non-section oriented states
			if (underscoreIndex === -1) return;

			const section = key.slice(0, underscoreIndex);
		
			if (!sectionSortedFields[section]) {
				sectionSortedFields[section] = {};
			}
		
			sectionSortedFields[section][key] = this.state[key];
		});

		return sectionSortedFields;
	}

	allInputValuesNull(flds) {
		
		return Object.values(flds).every((inputInfo) => inputInfo[0] === null);
	}

	distillDisplayData(sortedState) {
		/* {contact: {field1: displayStr, field2: displayStr, ...}, education: {}, ...} */
		const displayData = {}
		Object.keys(sortedState).forEach(section => {
			displayData[section] = {}

			/* When all field values are null, the cv is populated
			by the placeholder text instead of the input. This provides 
			a readily available design guide for the template.
			*/
			const inputValuesNull = this.allInputValuesNull(sortedState[section]);
			const displayIndex = inputValuesNull ? 3 : 0;

			Object.keys(sortedState[section]).forEach((field) => { 
			displayData[section][field] = sortedState[section][field][displayIndex];
			})
		})
		return displayData;
	}

	isDynamicForm(section) {
        const dynamicSections = [
            'education',
        ];
        return dynamicSections.includes(section);
    }

	render() {
		const sectionedFields = this.sortStateIntoSections();
		const displayData = this.distillDisplayData(sectionedFields);
		const displayForm = this.state.displayForm;
		const dynamicForm = this.isDynamicForm(displayForm);
		return (
			<div className="cv-creator">
				<CV 
					contact={displayData.contact}
					education={displayData.education}
					formDisplay={this.displayForm}
				/>
				{displayForm && !dynamicForm &&
					<CVForm 
						fields={sectionedFields[this.state.displayForm]}
						section={this.state.displayForm} 
						inputChangeHandle={this.handleInputChange}
						formDisplay={this.displayForm}
					/>
				}
				{displayForm && dynamicForm &&
					<CVDynamicFrom 
						fields={sectionedFields[this.state.displayForm]}
						section={this.state.displayForm} 
						inputChangeHandle={this.handleInputChange}
						formDisplay={this.displayForm}
					/>
				}
			</div>
		);
	}
}

export default CVCreator;