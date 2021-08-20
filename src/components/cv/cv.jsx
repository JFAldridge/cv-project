import React from 'react';
import Section from './sections/section'
import Portrait from './sections/portrait';
import Contact from './sections/contact';
import Education from './sections/education';
import Skills from './sections/skills';
import Introduction from './sections/introduction';
import WorkExperience from './sections/work-experience';
import styled from 'styled-components';

//react-to-print only prints class components

const CVWrapper = styled.div`
	word-wrap: break-word;
    display: flex;
    width: 8.5in;
    height: 11in;
    background-color: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.fg};
    font-family: ${props => props.theme.fonts.content};
    text-align: left;
	h1, h2, h3, h4, h5 {
        font-family: ${props => props.theme.fonts.header};
        color: ${props => props.theme.colors.accent.bg};
    }
	h2 {
        font-size: 1.4em;
        letter-spacing: .1em;
        border-bottom: ${props => props.theme.colors.accent.bg};
        padding: .3em 0;
        margin-bottom: 1em;
    }

	h4 {
        font-size: .9em;
        margin-bottom: .2em;
        font-weight: bold;
    }

	p {
        font-size: .8em;
        margin-bottom: .9em;
    }

    li {
        font-size: .9em;
    }
`;

const LeftColumn = styled.div`
	width: 32%;
	background-color: ${props => props.theme.colors.accent.bg};
	color: ${props => props.theme.colors.accent.fg};
	padding-left: .6in;
	padding-bottom: .6in;
	.edit-icon-container {
		margin-right: .5em;
	}

	h1, h2, h3, h4, h5 {
            color: ${props => props.theme.colors.bg};
        }

    h2 {
        border-bottom: 1.5px solid ${props => props.theme.colors.bg};
    }
	
	ul {
            list-style: none;
            padding: 0;

            li {
                margin: .5em 0;
            }
            
            i {
                margin-right: .5em;
            }           
        }
`;

const RightColumn = styled.div`
	width: 68%;
    padding: .6in .6in .6in 2.5em;
	ul {
        padding-left: 1em;
    }
`;

class CV extends React.Component {
	render() {
		const {portrait, contact, education, skills, introduction, workExperience, formDisplay} = this.props;

		return (
			<CVWrapper className="cv">
					<LeftColumn className="left-column">
						<Section formDisplay={formDisplay} sectionName="portrait">
							<Portrait fields={portrait} />
						</Section>
						<Section formDisplay={formDisplay} sectionName="contact">
							<Contact fields={contact} />
						</Section>
						<Section formDisplay={formDisplay} sectionName="education">
							<Education fields={education} />
						</Section>
						<Section formDisplay={formDisplay} sectionName="skills">
							<Skills fields={skills} />
						</Section>
					</LeftColumn>
					<RightColumn className="right-column">
						<Section formDisplay={formDisplay} sectionName="introduction">
							<Introduction fields={introduction} />
						</Section>
						<Section formDisplay={formDisplay} sectionName="workExperience">
							<WorkExperience fields={workExperience}/>
						</Section>
					</RightColumn>
			</CVWrapper>
		);
	
	}
}

export default CV;