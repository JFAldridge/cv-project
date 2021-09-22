import React, { useState, useRef, useEffect} from 'react';
import CV from './cv';
import Dashboard from './dashboard/dashboard';

// Form imports
import CVForm from './user-info-forms/cv-form';
import CVDynamicForm from './user-info-forms/cv-dynamic-form';
import CVImageForm from './user-info-forms/cv-image-form';

// React to print
import { useReactToPrint } from 'react-to-print';

// Theme hook
import { useTheme } from '../../theme/useTheme.jsx';

// Styled-components
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

// Axios
import axios from 'axios';

// Localstorage
import { getFromLS } from '../../utils/storage';


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
		degree_0: [null, 'text', 'Degree', 'Bachelors of a Field'],
		institution_0: [null, 'text', 'Institution', 'University of a State'],
		timeToDegree_0: [null, 'text', 'Time to Degree', '2014-2018'],
		degree_1: [null, 'text', 'Degree', 'Bachelors of a Field'],
		institution_1: [null, 'text', 'Institution', 'University of a State'],
		timeToDegree_1: [null, 'text', 'Time to Degree', '2014-2018'],
	});

	const [skillsFields, setSkillsFields] = useState({
		skillType_0: [null, 'text', 'Skill Heading', '/ / Technical'],
		skill_A0: [null, 'text', 'Skill', 'Making list items'],
		skill_B0: [null, 'text', 'Skill', 'Making list items'],
		skill_C0: [null, 'text', 'Skill', 'Making list items'],
		skill_D0: [null, 'text', 'Skill', 'Making list items'],
		skill_E0: [null, 'text', 'Skill', 'Making list items'],
		skill_F0: [null, 'text', 'Skill', 'Making list items'],
		skill_G0: [null, 'text', 'Skill', ''],
		skill_H0: [null, 'text', 'Skill', ''],
		skill_I0: [null, 'text', 'Skill', ''],
		skillType_1: [null, 'text', 'Skill Heading', '/ / Soft'],
		skill_A1: [null, 'text', 'Skill', 'Being well liked'],
		skill_B1: [null, 'text', 'Skill', 'Being well liked'],
		skill_C1: [null, 'text', 'Skill', 'Being well liked'],
		skill_D1: [null, 'text', 'Skill', 'Being well liked'],
		skill_E1: [null, 'text', 'Skill', 'Being well liked'],
		skill_F1: [null, 'text', 'Skill', ''],
		skill_G1: [null, 'text', 'Skill', ''],
		skill_H1: [null, 'text', 'Skill', ''],
	});

	const [introductionFields, setIntroductionFields] = useState({
		givenName: [null, 'text', 'First Name', 'Given'],
		surname: [null, 'text', 'Last Name', 'Surname'],
		title: [null, 'text', 'Professional Title', 'Professional Title'],
		about: [null, 'textarea', 'About', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],
	});

	const [workExperienceFields, setWorkExperienceFields] = useState({
		company_0: [null, 'text', 'Company', 'Company Name'],
		position_0: [null, 'text', 'Position', '/ Position Title'],
		duration_0: [null, 'text', 'Tenure', 'From 2018 to 2020'],
		summary_0: [null, 'text', 'Position Summary', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'],
		achievement_A0: [null, 'text', 'Achievement', 'Made x money doing y things'],
		achievement_B0: [null, 'text', 'Achievement', 'Made x money doing y things'],
		achievement_C0: [null, 'text', 'Achievement', 'Made x money doing y things'],
		achievement_D0: [null, 'text', 'Achievement', ''],
		achievement_E0: [null, 'text', 'Achievement', ''],
		company_1: [null, 'text', 'Company', 'Company Name'],
		position_1: [null, 'text', 'Position', '/ Position Title'],
		duration_1: [null, 'text', 'Tenure', 'From 2018 to 2020'],
		summary_1: [null, 'text', 'Position Summary', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'],
		achievement_A1: [null, 'text', 'Achievement', 'Made x money doing y things'],
		achievement_B1: [null, 'text', 'Achievement', 'Made x money doing y things'],
		achievement_C1: [null, 'text', 'Achievement', 'Made x money doing y things'],
		achievement_D1: [null, 'text', 'Achievement', ''],
		achievement_E1: [null, 'text', 'Achievement', ''],
		achievement_F1: [null, 'text', 'Achievement', ''],
	});
	
	const [portraitFields, setPortraitFields] = useState({
		image: [null],
	});

	/* For dynamic access to fields and setters*/

	const allFields = {
		contact: contactFields,
		education: educationFields,
		skills: skillsFields,
		introduction: introductionFields,
		workExperience: workExperienceFields,
	}

	const allFieldSetters = {
		contact: setContactFields,
		education: setEducationFields,
		skills: setSkillsFields,
		introduction: setIntroductionFields,
		workExperience: setWorkExperienceFields,
	}
	
	/* 	These functions convert MongoDb's nested state to
		this React Apps flattened state, which uses
		Classification Tags in the key to distinguish
		data: '0' for Groups 'A' for list items.
	*/

	function groupSansClassificationTags(section) {
		/*	Grabs fields group from state of dynamic
			section and strips tags so that the fields
			array can be applied to mongodb data before
			tags are added back on
		*/
		const sectionFields = allFields[section];
        let groupWithoutClassificationTags = {};

        Object.keys(allFields[section]).forEach((fieldKey) => {
			const keyWithoutTag = fieldKey.split('_')[0];
			groupWithoutClassificationTags[keyWithoutTag] = [...sectionFields[fieldKey]];
        });

        return groupWithoutClassificationTags;
    }
			
	const updateStateWithMongoData = (mongoInfo, section) => {
		const newState = {};

		if (Array.isArray(mongoInfo)) {
			const gWithoutClassification = groupSansClassificationTags(section);

			mongoInfo.forEach((group, i) => {
				const groupTag = i.toString();

				Object.keys(group).filter(key => key !== '_id').forEach((key) => {
					const data = group[key];
					const fieldsCopy = [...gWithoutClassification[key]];

					if (Array.isArray(data)) {
						data.forEach((listItem, iter) => {
							const listItemTag = String.fromCharCode(65 + iter);
							const fieldsCopyCopy = [...fieldsCopy];

							fieldsCopy[0] = listItem;
							newState[key.concat('_', listItemTag, groupTag)] = fieldsCopyCopy;
						})
					} else {
						fieldsCopy[0] = data;
						newState[key.concat('_', groupTag)] = fieldsCopy;
					}
				})
			})
		} else { // For nondynamic sections
			// Copy field array, replace [0] with user info, add to new state obj
			Object.keys(mongoInfo).forEach((key) => {
				if (key !== '_id') {
					const sectionFields = allFields[section];
	
					const newField = [...sectionFields[key]];
					newField[0] = mongoInfo[key];
	
					newState[key] = newField;
				};
			})
		}

		allFieldSetters[section]((prevState) => {
			return({ ...prevState, ...newState });
		})
	}

	const userInfoLoaded = useRef(false);

	// Props have been loaded from login/register redirect and hadn't been there before
	if (props.location.state && !userInfoLoaded.current) { 
		const userInfo = props.location.state.userInfo;
		
		userInfoLoaded.current = true;
		
		Object.entries(userInfo).forEach(([section, data]) => {
			updateStateWithMongoData(data, section);
		});
	}

	const [localLoggedInStatus, setLocalLoggedInStatus] = useState(false);

	// Clear user info when log out occurs
	if (props.loggedIn !== localLoggedInStatus) {
		
		setLocalLoggedInStatus(props.loggedIn);

		if (!props.loggedIn) {
			Object.entries(allFields).forEach(([section, fields]) => {
				const newState = {}

				Object.entries(fields).forEach(([key, fields]) => {
					const fieldsCopy = [...fields];
					fieldsCopy[0] = null;

					newState[key] = fieldsCopy;
				})

				allFieldSetters[section]((prevState) => {
					return {...prevState, ...newState};
				})
			})
		}
	}

	/* 	These functions convert Reacts flattened state to
		MongoDB's nested state.
	*/

	const stateWithOnlyCurrentValueField = (sectionFields) => {
		/* {key: value, key2: value2, ...} */
		let currentValueState = {};

		Object.entries(sectionFields).forEach(([key, fields]) => {
			currentValueState[key] = fields[0];
		})

		return currentValueState;
	}

	const [exportError, setExportError] = useState(null);

	const exportStateInMongoFormat = () => {
		const mongoFormattedState = {};

		Object.entries(allFields).forEach(([section, sectionFields]) => {
			const currentValueState = stateWithOnlyCurrentValueField(sectionFields);
			const sampleKey = Object.keys(currentValueState)[0];

			if (sampleKey.split('_').length === 1) { // Non dynamic sections copy over
				mongoFormattedState[section] = currentValueState;	
			} else {
				mongoFormattedState[section] = [];
				mongoFormattedState[section][0] = {};

				// Keys must be sorted to maintain listTag ordering
				Object.keys(currentValueState).sort().forEach((fieldKey) => {
					const taglessKey = fieldKey.split('_')[0];
					const tag = fieldKey.split('_')[1];
					const groupTag = tag.slice(-1);
					const listItemTag = tag.slice(-2, -1); // Empty string if 1 character tag
					const currentValue = currentValueState[fieldKey];

					if (!mongoFormattedState[section][groupTag]) { // Creat group object if it doesn't exist
						mongoFormattedState[section][groupTag] = {}
					}

					const group = mongoFormattedState[section][groupTag];

					if (!listItemTag) { // Non-listitems can be copied into group objects 
						group[taglessKey] = currentValue;
					} else { // else a list array is needed
						if (!group[taglessKey]) {
							group[taglessKey] = [];
						}
						group[taglessKey].push(currentValue);
					}
				})
			}

		})
		
		axios({
            method: 'PUT',
            url: 'http://localhost:5000/user/userinfo',
			headers: { Authorization: `Bearer ${getFromLS('token')}`},
            data: {
                userInfo: mongoFormattedState
            }
        }).then( response => {
            console.log(response.data.message);
        }).catch( error => {
            console.log(error);
        })
	}
	
	// Form Toggle

	const [displayForm, setDisplayForm] = useState(null);

	/* Event handlers */

	// For backing up data
	const handleUserInfoBackup = () => {
		exportStateInMongoFormat();
	}

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
		const imageChangeObject = {image: [result]};
	
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
					userInfoBackupHandle={handleUserInfoBackup}
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
					<CVDynamicForm 
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