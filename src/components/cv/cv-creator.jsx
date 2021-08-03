import React, { useState } from 'react';
import CVForm from './form/cv-form';
import CV from './cv';
import CVDynamicFrom from './form/cv-dynamic-form';

function CVCreator(props) {
	const [inputFields, setInputFields] = useState({
		contact_phone: [null, 'tel', 'Phone', '555-555-5555'],
		contact_email: [null, 'email', 'Email', 'email@me.com'],
		contact_portfolio: [null, 'url', 'Portfolio', 'www.portfolio.com'],
		contact_github: [null, 'url', 'Github', 'github.com/me'],
		education_degree0: [null, 'text', 'Degree', 'Bachelors of a Field'],
		education_institution0: [null, 'text', 'Institution', 'University of a State'],
		education_timeToDegree0: [null, 'timeSpan', 'Time to Degree', '2014-2018'],
		education_degree1: [null, 'text', 'Degree', 'Bachelors of a Field'],
		education_institution1: [null, 'text', 'Institution', 'University of a State'],
		education_timeToDegree1: [null, 'timeSpan', 'Time to Degree', '2014-2018'],
		displayForm: null,
	}); 

	const [displayForm, setDisplayForm] = useState(null);

	const handleInputChange = (event) => {
		const name = event.target.name;
		
		// Convert empty string to null to remove unused fields
		let value = event.target.value;
		if (value === '') {
			value = null;
		}

		let inputField = inputFields[name].slice();
		inputField[0] = value;
		
		const newInputObject = {[name]: inputField};

		setInputFields((prevState) => {
			return {...prevState, ...newInputObject};
		});
	}

	const deleteField = (fields) => {
		setInputFields((prevState) => {
			const newState = {...prevState};
			
			Object.keys(fields).forEach((field) => delete newState[field]);

    		return newState;
		});
	}

	const displaySectionForm = (section) => {
		setDisplayForm(section);
	}

	const sortStateIntoSections = (inputFlds) => {
		/* {contact: {field1: [i, n, f, o], field2: [], ...}, education: {}, ...} */
		const sectionSortedFields = {};

		Object.keys(inputFlds).forEach((key) => {
			const underscoreIndex = key.indexOf('_');
			// Filter out non-section oriented states
			if (underscoreIndex === -1) return;

			const section = key.slice(0, underscoreIndex);
		
			if (!sectionSortedFields[section]) {
				sectionSortedFields[section] = {};
			}
		
			sectionSortedFields[section][key] = inputFlds[key];
		});

		return sectionSortedFields;
	}

	const allInputValuesNull = (flds) => {
		return Object.values(flds).every((inputInfo) => {
			return inputInfo[0] === null;
		});
	}

	const distillDisplayData = (sortedState) => {
		/* {contact: {field1: displayStr, field2: displayStr, ...}, education: {}, ...} */
		const displayData = {}
		Object.keys(sortedState).forEach(section => {
			displayData[section] = {}

			/* When all field values are null, the cv is populated
			by the placeholder text instead of the input. This provides 
			a readily available design guide for the template.
			*/
			const inputValuesNull = allInputValuesNull(sortedState[section]);
			const displayIndex = inputValuesNull ? 3 : 0;

			Object.keys(sortedState[section]).forEach((field) => { 
			displayData[section][field] = sortedState[section][field][displayIndex];
			})
		})
		return displayData;
	}

	const isDynamicForm = (section) => {
        const dynamicSections = [
            'education',
        ];
        return dynamicSections.includes(section);
    }

	
	const sectionedFields = sortStateIntoSections(inputFields);
	const displayData = distillDisplayData(sectionedFields);
	const dynamicForm = isDynamicForm(displayForm);

	return (
		<div className="cv-creator">
			<CV 
				contact={displayData.contact}
				education={displayData.education}
				formDisplay={displaySectionForm}
			/>
			{displayForm && !dynamicForm &&
				<CVForm 
					fields={sectionedFields[displayForm]}
					section={displayForm} 
					inputChangeHandle={handleInputChange}
					formDisplay={displaySectionForm}
				/>
			}
			{displayForm && dynamicForm &&
				<CVDynamicFrom 
					fields={sectionedFields[displayForm]}
					section={displayForm} 
					inputChangeHandle={handleInputChange}
					formDisplay={displaySectionForm}
					fieldSetDelete={deleteField}
				/>
			}
		</div>
	);
	
}

export default CVCreator;