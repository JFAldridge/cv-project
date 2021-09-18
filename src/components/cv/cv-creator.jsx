import React, { useState, useRef, useEffect} from 'react';
import CV from './cv';
import Dashboard from './dashboard/dashboard';

// Form imports
import CVForm from './user-info-forms/cv-form';
import CVDynamicFrom from './user-info-forms/cv-dynamic-form';
import CVImageForm from './user-info-forms/cv-image-form';

// React to print
import { useReactToPrint } from 'react-to-print';

// Theme hook
import { useTheme } from '../../theme/useTheme.jsx';

// Styled-components
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';


const CVCreatorWrapper = styled.div`
	display: flex;
    background-color: #1e4356;
    z-index: 10;
`;

const Creator = styled.div`
	margin: 120px auto 0 auto;
    z-index: 5;
    background-color: #1e4356b0;
    border-radius: 8px;
    box-shadow: 0 0 3px #ffffff4d;
    text-align: center;
`;

function CVCreator(props) {
	// Ref used for ReactToPrint
	const CVRef = useRef();

	// Pull from usedTheme hook, created needed local states

	const {theme} = useTheme();
	const [workingTheme, setWorkingTheme] = useState(theme);
	
	useEffect(() => {
		// Working theme should be name New Theme when first loaded
		setWorkingTheme({...theme, ...{name: 'New Theme'}});
	}, [theme]);

	/* State for user info */

	const [contactFields, setContactFields] = useState({
		phone: [null, 'tel', 'Phone', '555-555-5555'],
		email: [null, 'email', 'Email', 'email@me.com'],
		portfolio: [null, 'url', 'Portfolio', 'www.portfolio.com'],
		github: [null, 'url', 'Github', 'github.com/me'],
		linkedIn: [null, 'url', 'LinkedIn', ''],
		instagram: [null, 'url', 'Instagram', ''],
		youtube: [null, 'url', 'Youtube', ''],
		facebook: [null, 'url', 'Facebook', ''],
	});
	
	const [educationFields, setEducationFields] = useState({
		degree0: [null, 'text', 'Degree', 'Bachelors of a Field'],
		institution0: [null, 'text', 'Institution', 'University of a State'],
		timeToDegree0: [null, 'text', 'Time to Degree', '2014-2018'],
		degree1: [null, 'text', 'Degree', 'Bachelors of a Field'],
		institution1: [null, 'text', 'Institution', 'University of a State'],
		timeToDegree1: [null, 'text', 'Time to Degree', '2014-2018'],
	});

	const [skillsFields, setSkillsFields] = useState({
		heading0: [null, 'text', 'Skill Heading', '/ / Technical'],
		itemA0: [null, 'text', 'Skill', 'Making list items'],
		itemB0: [null, 'text', 'Skill', 'Making list items'],
		itemC0: [null, 'text', 'Skill', 'Making list items'],
		itemD0: [null, 'text', 'Skill', 'Making list items'],
		itemE0: [null, 'text', 'Skill', 'Making list items'],
		itemF0: [null, 'text', 'Skill', 'Making list items'],
		itemG0: [null, 'text', 'Skill', ''],
		itemH0: [null, 'text', 'Skill', ''],
		itemI0: [null, 'text', 'Skill', ''],
		heading1: [null, 'text', 'Skill Heading', '/ / Soft'],
		itemA1: [null, 'text', 'Skill', 'Being well liked'],
		itemB1: [null, 'text', 'Skill', 'Being well liked'],
		itemC1: [null, 'text', 'Skill', 'Being well liked'],
		itemD1: [null, 'text', 'Skill', 'Being well liked'],
		itemE1: [null, 'text', 'Skill', 'Being well liked'],
		itemF1: [null, 'text', 'Skill', ''],
		itemG1: [null, 'text', 'Skill', ''],
		itemH1: [null, 'text', 'Skill', ''],
	});

	const [introductionFields, setIntroductionFields] = useState({
		givenName: [null, 'text', 'First Name', 'Given'],
		surname: [null, 'text', 'Last Name', 'Surname'],
		title: [null, 'text', 'Professional Title', 'Professional Title'],
		about: [null, 'textarea', 'About', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],
	});

	const [workExperienceFields, setWorkExperienceFields] = useState({
		company0: [null, 'text', 'Company', 'Company Name'],
		position0: [null, 'text', 'Position', '/ Position Title'],
		duration0: [null, 'text', 'Tenure', 'From 2018 to 2020'],
		summary0: [null, 'text', 'Position Summary', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'],
		achievementA0: [null, 'text', 'Achievement', 'Made x money doing y things'],
		achievementB0: [null, 'text', 'Achievement', 'Made x money doing y things'],
		achievementC0: [null, 'text', 'Achievement', 'Made x money doing y things'],
		achievementD0: [null, 'text', 'Achievement', ''],
		achievementE0: [null, 'text', 'Achievement', ''],
		company1: [null, 'text', 'Company', 'Company Name'],
		position1: [null, 'text', 'Position', '/ Position Title'],
		duration1: [null, 'text', 'Tenure', 'From 2018 to 2020'],
		summary1: [null, 'text', 'Position Summary', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'],
		achievementA1: [null, 'text', 'Achievement', 'Made x money doing y things'],
		achievementB1: [null, 'text', 'Achievement', 'Made x money doing y things'],
		achievementC1: [null, 'text', 'Achievement', 'Made x money doing y things'],
		achievementD1: [null, 'text', 'Achievement', ''],
		achievementE1: [null, 'text', 'Achievement', ''],
		achievementF1: [null, 'text', 'Achievement', ''],
	});
	
	const [portraitFields, setPortraitFields] = useState({
		portrait_image: [''],
	});

	const allFields = {
		contact: contactFields,
		education: educationFields,
		skills: skillsFields,
		introduction: introductionFields,
		workExperience: workExperienceFields,
		portrait: portraitFields,
	}

	const allFieldSetters = {
		contact: setContactFields,
		education: setEducationFields,
		skills: setSkillsFields,
		introduction: setIntroductionFields,
		workExperience: setWorkExperienceFields,
		portrait: setPortraitFields,
	}

	// Build and save new state when given userInfo from database

	useEffect(() => {
		if (props.location && props.location.state.userInfo) {

		}
	}, [])

	// Form Toggle

	const [displayForm, setDisplayForm] = useState(null);

	/* Event handlers */
	// For theme

	const handleThemeChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		const newInputObject = {[name]: value};

		setWorkingTheme((prevState) => {
			return {...prevState, ...newInputObject};
		});
	}

	// For userInfo

	const handleInputChange = (event, section) => {
		const sectionFields = allFields[section];
		const name = event.target.name;
		
		// Convert empty string to null to remove unused fields
		let value = event.target.value;
		if (value === '') {
			value = null;
		}

		let inputField = sectionFields[name].slice();
		inputField[0] = value;
		
		const newInputObject = {[name]: inputField};

		allFieldSetters[section]((prevState) => {
			return {...prevState, ...newInputObject};
		});
	}

	const handleImageChange = (result) => {
		const imageChangeObject = {portrait_image: [result]};
	
		setPortraitFields((prevState) => {
			return {...prevState, ...imageChangeObject};
		});
	}

	// For dynamic forms

	const createFieldGroup = (group, section) => {
		allFieldSetters[section]((prevState) => {
			return {...prevState, ...group}
		})
	}

	const deleteFieldGroup = (fields, section) => {
		allFieldSetters[section]((prevState) => {
			const newState = {...prevState};
			
			Object.keys(fields).forEach((field) => delete newState[field]);

    		return newState;
		});
	}

	// Display form

	const displaySectionForm = (section) => {
		setDisplayForm(section);
	}

	// For printing

	const handlePrint = useReactToPrint({
		content: () => CVRef.current,
	});

	/*  When all field values are null, the cv is populated
		by the placeholder [3] text instead of the input [0]. 
		This provides a readily available design guide for 
		the template.
	*/

	const allInputValuesNull = (flds) => {
		return Object.values(flds).every((inputInfo) => {
			return inputInfo[0] === null;
		});
	}

	const determineDataDisplayed = (fields) => {
		/* {field1: displayStr, field2: displayStr, ...}*/
		const displayData = {}
				
		const inputValuesNull = allInputValuesNull(fields);
		const displayIndex = inputValuesNull ? 3 : 0;

		Object.keys(fields).forEach((field) => { 
		displayData[field] = fields[field][displayIndex];
		})

		return displayData;
	}

	/* Determine form for section calling it */

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

	const formType = getFormType(displayForm);

	return (
		<CVCreatorWrapper>
			<Creator>
				<ThemeProvider theme={workingTheme}>
					<Dashboard 
					printHandle={handlePrint} 
					workingThemeSet={setWorkingTheme}
					themeChangeHandle={handleThemeChange}
					/>
					<CV 
						portrait={determineDataDisplayed(portraitFields)}
						contact={determineDataDisplayed(contactFields)}
						education={determineDataDisplayed(educationFields)}
						skills={determineDataDisplayed(skillsFields)}
						introduction={determineDataDisplayed(introductionFields)}
						workExperience={determineDataDisplayed(workExperienceFields)}
						formDisplay={displaySectionForm}
						ref={CVRef}
					/>
				</ThemeProvider>
				{formType === 'form' &&
					<CVForm 
						fields={allFields[displayForm]}
						section={displayForm} 
						inputChangeHandle={handleInputChange}
						formDisplay={displaySectionForm}
					/>
				}
				{formType === 'dynamic' &&
					<CVDynamicFrom 
						fields={allFields[displayForm]}
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
			</Creator>
		</CVCreatorWrapper>
	);
}

export default CVCreator;