import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import CV from './cv';
import CVForm from './form/cv-form';
import CVDynamicFrom from './form/cv-dynamic-form';
import CVImageForm from './form/cv-image-form';

function CVCreator(props) {
	// Ref used for ReactToPrint
	const CVRef = useRef();

	// State

	const [inputFields, setInputFields] = useState({
		contact_phone: [null, 'tel', 'Phone', '555-555-5555'],
		contact_email: [null, 'email', 'Email', 'email@me.com'],
		contact_portfolio: [null, 'url', 'Portfolio', 'www.portfolio.com'],
		contact_github: [null, 'url', 'Github', 'github.com/me'],
		education_degree0: [null, 'text', 'Degree', 'Bachelors of a Field'],
		education_institution0: [null, 'text', 'Institution', 'University of a State'],
		education_timeToDegree0: [null, 'text', 'Time to Degree', '2014-2018'],
		education_degree1: [null, 'text', 'Degree', 'Bachelors of a Field'],
		education_institution1: [null, 'text', 'Institution', 'University of a State'],
		education_timeToDegree1: [null, 'text', 'Time to Degree', '2014-2018'],
		skills_heading1: [null, 'text', 'Skill Heading', '/ / Technical'],
		skills_item1: [null, 'text', 'Skill', 'Making list items'],
		skills_item2: [null, 'text', 'Skill', 'Making list items'],
		skills_item3: [null, 'text', 'Skill', 'Making list items'],
		skills_item4: [null, 'text', 'Skill', 'Making list items'],
		skills_item5: [null, 'text', 'Skill', 'Making list items'],
		skills_item6: [null, 'text', 'Skill', 'Making list items'],
		skills_item7: [null, 'text', 'Skill', ''],
		skills_item8: [null, 'text', 'Skill', ''],
		skills_item9: [null, 'text', 'Skill', ''],
		skills_heading2: [null, 'text', 'Skill Heading', '/ / Soft'],
		skills_item10: [null, 'text', 'Skill', 'Being well liked'],
		skills_item11: [null, 'text', 'Skill', 'Being well liked'],
		skills_item12: [null, 'text', 'Skill', 'Being well liked'],
		skills_item13: [null, 'text', 'Skill', 'Being well liked'],
		skills_item14: [null, 'text', 'Skill', 'Being well liked'],
		skills_item15: [null, 'text', 'Skill', ''],
		skills_item16: [null, 'text', 'Skill', ''],
		skills_item17: [null, 'text', 'Skill', ''],
		introduction_given: [null, 'text', 'First Name', 'Given'],
		introduction_surname: [null, 'text', 'Last Name', 'Surname'],
		introduction_title: [null, 'text', 'Professional Title', 'Professional Title'],
		introduction_about: [null, 'textarea', 'About', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],
		workExperience_company1: [null, 'text', 'Company', 'Company Name'],
		workExperience_position1: [null, 'text', 'Position', '/ Position Title'],
		workExperience_duration1: [null, 'text', 'Duration of Employment', 'From 2018 to 2020'],
		workExperience_summary1: [null, 'text', 'Position Summary', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'],
		workExperience_achievementA1: [null, 'text', 'Achievement', 'Made x money doing y things'],
		workExperience_achievementB1: [null, 'text', 'Achievement', 'Made x money doing y things'],
		workExperience_achievementC1: [null, 'text', 'Achievement', 'Made x money doing y things'],
		workExperience_achievementD1: [null, 'text', 'Achievement', ''],
		workExperience_achievementE1: [null, 'text', 'Achievement', ''],
		workExperience_achievementF1: [null, 'text', 'Achievement', ''],
		workExperience_company2: [null, 'text', 'Company', 'Company Name'],
		workExperience_position2: [null, 'text', 'Position', '/ Position Title'],
		workExperience_duration2: [null, 'text', 'Duration of Employment', 'From 2018 to 2020'],
		workExperience_summary2: [null, 'text', 'Position Summary', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'],
		workExperience_achievementA2: [null, 'text', 'Achievement', 'Made x money doing y things'],
		workExperience_achievementB2: [null, 'text', 'Achievement', 'Made x money doing y things'],
		workExperience_achievementC2: [null, 'text', 'Achievement', 'Made x money doing y things'],
		workExperience_achievementD2: [null, 'text', 'Achievement', ''],
		workExperience_achievementE2: [null, 'text', 'Achievement', ''],
		workExperience_achievementF2: [null, 'text', 'Achievement', ''],
		workExperience_company3: [null, 'text', 'Company', 'Company Name'],
		workExperience_position3: [null, 'text', 'Position', '/ Position Title'],
		workExperience_duration3: [null, 'text', 'Duration of Employment', 'From 2018 to 2020'],
		workExperience_summary3: [null, 'text', 'Position Summary', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'],
		workExperience_achievementA3: [null, 'text', 'Achievement', 'Made x money doing y things'],
		workExperience_achievementB3: [null, 'text', 'Achievement', 'Made x money doing y things'],
		workExperience_achievementC3: [null, 'text', 'Achievement', 'Made x money doing y things'],
		workExperience_achievementD3: [null, 'text', 'Achievement', ''],
		workExperience_achievementE3: [null, 'text', 'Achievement', ''],
		workExperience_achievementF3: [null, 'text', 'Achievement', ''],
		portrait_image: [''],
	}); 

	const [displayForm, setDisplayForm] = useState(null);

	// Event handlers

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

	const handleImageChange = (result) => {
		const imageChangeObject = {portrait_image: [result]};
	
		setInputFields((prevState) => {
			return {...prevState, ...imageChangeObject};
		});
	}

	const createFieldGroup = (group) => {
		setInputFields((prevState) => {
			return {...prevState, ...group}
		})
	}

	const deleteFieldGroup = (fields) => {
		setInputFields((prevState) => {
			const newState = {...prevState};
			
			Object.keys(fields).forEach((field) => delete newState[field]);

    		return newState;
		});
	}

	const displaySectionForm = (section) => {
		setDisplayForm(section);
	}

	const handlePrint = useReactToPrint({
		content: () => CVRef.current,
	});

	// State distribution functions

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

	const getFormType = (section) => {
		if (section === null) return null;

        const dynamicSections = [
            'education',
			'workExperience'
        ];

		if (dynamicSections.includes(section)) {
			return 'dynamic';
		} else if (section === 'portrait') {
			return 'image';
		} else {
			return 'form';
		}
    }

	
	const sectionedFields = sortStateIntoSections(inputFields);
	const displayData = distillDisplayData(sectionedFields);
	const formType = getFormType(displayForm);

	return (
		<div className="cv-creator">
			<button 
				className="btn btn-primary"
				onClick={handlePrint}>
			Print / Save PDF
			</button>
			<CV 
				portrait={displayData.portrait}
				contact={displayData.contact}
				education={displayData.education}
				skills={displayData.skills}
				introduction={displayData.introduction}
				workExperience={displayData.workExperience}
				formDisplay={displaySectionForm}
				ref={CVRef}
			/>
			{formType === 'form' &&
				<CVForm 
					fields={sectionedFields[displayForm]}
					section={displayForm} 
					inputChangeHandle={handleInputChange}
					formDisplay={displaySectionForm}
				/>
			}
			{formType === 'dynamic' &&
				<CVDynamicFrom 
					fields={sectionedFields[displayForm]}
					section={displayForm} 
					inputChangeHandle={handleInputChange}
					formDisplay={displaySectionForm}
					fieldGroupDelete={deleteFieldGroup}
					fieldGroupCreate={createFieldGroup}
				/>
			}
			{formType === 'image' &&
				<CVImageForm 
					section={displayForm} 
					imageChangeHandle={handleImageChange}
					formDisplay={displaySectionForm}
				/>
			}
		</div>
	);
	
}

export default CVCreator;