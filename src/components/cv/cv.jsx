import React from 'react';
import Portrait from './display/portrait';
import Contact from './display/contact';
import Education from './display/education';
import Skills from './display/skills';
import Introduction from './display/introduction';
import WorkExperience from './display/work-experience';
import styled from 'styled-components';

//react-to-print only prints class components

const CVWrapper = styled.div`
	word-wrap: break-word;
    display: flex;
    width: 8.5in;
    height: 11in;
    background-color: rgb(248, 248, 248);
    color: $rgb(24, 24, 24);
    font-family: 'Open Sans', sans-serif;
    text-align: left;
`;

class CV extends React.Component {
	render() {
		const {portrait, contact, education, skills, introduction, workExperience, formDisplay} = this.props;

		return (
			<CVWrapper className="cv">
					<div className="sidebar">
						<Portrait 
							fields={portrait}
							formDisplay={formDisplay}
						/>
						<Contact 
							fields={contact}
							formDisplay={formDisplay}
						/>
						<Education 
							fields={education}
							formDisplay={formDisplay}
						/>
						<Skills 
							fields={skills}
							formDisplay={formDisplay}
						/>
					</div>
					<div className="main-content">
						<Introduction 
							fields={introduction}
							formDisplay={formDisplay}
						/>
						<WorkExperience 
							fields={workExperience}
							formDisplay={formDisplay}
						/>
					</div>
			</CVWrapper>
		);
	
	}
}

export default CV;