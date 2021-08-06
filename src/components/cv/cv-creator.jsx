import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import CV from './cv';
import CVForm from './form/cv-form';
import CVDynamicFrom from './form/cv-dynamic-form';
import CVImageForm from './form/cv-image-form';

function CVCreator(props) {
	// Ref used for ReactToPrint
	const CVRef = useRef();

	// All user info is held here.

	const [inputFields, setInputFields] = useState({
		contact_phoneA0: [null, 'tel', 'Phone', '555-555-5555'],
		contact_emailB0: [null, 'email', 'Email', 'email@me.com'],
		contact_portfolioC0: [null, 'url', 'Portfolio', 'www.portfolio.com'],
		contact_githubD0: [null, 'url', 'Github', 'github.com/me'],
		contact_linkedInE0: [null, 'url', 'Github', ''],
		contact_instagramF0: [null, 'url', 'Github', ''],
		contact_youtubeG0: [null, 'url', 'Github', ''],
		contact_facebookH0: [null, 'url', 'Github', ''],
		education_degree0: [null, 'text', 'Degree', 'Bachelors of a Field'],
		education_institution0: [null, 'text', 'Institution', 'University of a State'],
		education_timeToDegree0: [null, 'text', 'Time to Degree', '2014-2018'],
		education_degree1: [null, 'text', 'Degree', 'Bachelors of a Field'],
		education_institution1: [null, 'text', 'Institution', 'University of a State'],
		education_timeToDegree1: [null, 'text', 'Time to Degree', '2014-2018'],
		skills_heading0: [null, 'text', 'Skill Heading', '/ / Technical'],
		skills_itemA0: [null, 'text', 'Skill', 'Making list items'],
		skills_itemB0: [null, 'text', 'Skill', 'Making list items'],
		skills_itemC0: [null, 'text', 'Skill', 'Making list items'],
		skills_itemD0: [null, 'text', 'Skill', 'Making list items'],
		skills_itemE0: [null, 'text', 'Skill', 'Making list items'],
		skills_itemF0: [null, 'text', 'Skill', 'Making list items'],
		skills_itemG0: [null, 'text', 'Skill', ''],
		skills_itemH0: [null, 'text', 'Skill', ''],
		skills_itemI0: [null, 'text', 'Skill', ''],
		skills_heading1: [null, 'text', 'Skill Heading', '/ / Soft'],
		skills_itemA1: [null, 'text', 'Skill', 'Being well liked'],
		skills_itemB1: [null, 'text', 'Skill', 'Being well liked'],
		skills_itemC1: [null, 'text', 'Skill', 'Being well liked'],
		skills_itemD1: [null, 'text', 'Skill', 'Being well liked'],
		skills_itemE1: [null, 'text', 'Skill', 'Being well liked'],
		skills_itemF1: [null, 'text', 'Skill', ''],
		skills_itemG1: [null, 'text', 'Skill', ''],
		skills_itemH1: [null, 'text', 'Skill', ''],
		introduction_given: [null, 'text', 'First Name', 'Given'],
		introduction_surname: [null, 'text', 'Last Name', 'Surname'],
		introduction_title: [null, 'text', 'Professional Title', 'Professional Title'],
		introduction_about: [null, 'textarea', 'About', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],
		workExperience_company0: [null, 'text', 'Company', 'Company Name'],
		workExperience_position0: [null, 'text', 'Position', '/ Position Title'],
		workExperience_duration0: [null, 'text', 'Duration of Employment', 'From 2018 to 2020'],
		workExperience_summary0: [null, 'text', 'Position Summary', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'],
		workExperience_achievementA0: [null, 'text', 'Achievement', 'Made x money doing y things'],
		workExperience_achievementB0: [null, 'text', 'Achievement', 'Made x money doing y things'],
		workExperience_achievementC0: [null, 'text', 'Achievement', 'Made x money doing y things'],
		workExperience_achievementD0: [null, 'text', 'Achievement', ''],
		workExperience_achievementE0: [null, 'text', 'Achievement', ''],
		workExperience_achievementF0: [null, 'text', 'Achievement', ''],
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
			'skills',
            'education',
			'workExperience',
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