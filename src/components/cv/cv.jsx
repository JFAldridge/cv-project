import React from 'react';
import Contact from './display/contact.jsx';

function CV({contact, formDisplay}) {
	return (
		<div className="resume">
			<div className="sidebar">
				<Contact 
					fields={contact}
					formDisplay={formDisplay}
				/>
			</div>
			<div className="main-content">

			</div>
		</div>
	);
}

export default CV;