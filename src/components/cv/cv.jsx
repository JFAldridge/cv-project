import React from 'react';
import Section from './display/section'
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

const LeftColumn = styled.div`
	width: 32%;
	background-color: rgb(50, 59, 76);
	color: rgb(184, 184, 189);
	padding-left: .6in;
	padding-bottom: .6in;
`;

const RightColumn = styled.div`
	width: 68%;
    padding: .6in .6in .6in 2.5em;
`;

class CV extends React.Component {
	render() {
		const {portrait, contact, education, skills, introduction, workExperience, formDisplay} = this.props;

		return (
			<CVWrapper className="cv">
					<LeftColumn className="left-column">
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
					</LeftColumn>
					<RightColumn className="right-column">
						<Section formDisplay={formDisplay} sectionName="introduction">
							<Introduction fields={introduction} />
						</Section>
						<WorkExperience 
							fields={workExperience}
							formDisplay={formDisplay}
						/>
					</RightColumn>
			</CVWrapper>
		);
	
	}
}

export default CV;