import React from 'react';
import Contact from './display/contact';
import Education from './display/education';
import Skills from './display/skills';

function CV({contact, education, skills, formDisplay}) {
	return (
		<div className="resume">
			<div className="sidebar">
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

			</div>
		</div>
	);
}

export default CV;