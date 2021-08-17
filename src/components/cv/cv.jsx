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

const headerFont = '"Noto Sans JP", sans-serif;';
const contentFont = '"Open Sans", sans-serif';

const fg = 'rgb(24, 24, 24)';
const bg = 'rgb(248, 248, 248)';

const accentFg = 'rgb(184, 184, 189)';
const accentBg = 'rgb(50, 59, 76)';

const CVWrapper = styled.div`
	word-wrap: break-word;
    display: flex;
    width: 8.5in;
    height: 11in;
    background-color: rgb(248, 248, 248);
    color: rgb(24, 24, 24);
    font-family: "Open Sans", sans-serif;
    text-align: left;
	h1, h2, h3, h4, h5 {
        font-family: "Noto Sans JP", sans-serif;
        color: rgb(50, 59, 76);
    }
	h2 {
        font-size: 1.4em;
        letter-spacing: .1em;
        border-bottom: 1.5px solid rgb(50, 59, 76);
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
	background-color: rgb(50, 59, 76);
	color: rgb(198, 198, 198);
	padding-left: .6in;
	padding-bottom: .6in;
	.edit-icon-container {
		margin-right: .5em;
	}

	h1, h2, h3, h4, h5 {
            color: rgb(248, 248, 248);
        }

    h2 {
        border-bottom: 1.5px solid rgb(248, 248, 248);
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