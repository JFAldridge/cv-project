import React from 'react';
import Portrait from './display/portrait';
import Contact from './display/contact';
import Education from './display/education';
import Skills from './display/skills';
import Introduction from './display/introduction';
import WorkExperience from './display/work-experience';

function CV({portrait, contact, education, skills, introduction, workExperience, formDisplay}) {
	return (
		<div className="resume">
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
		</div>
	);
}

export default CV;