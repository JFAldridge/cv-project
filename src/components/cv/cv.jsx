import React, { Component } from 'react';
import Contact from './display/contact.jsx';

class CV extends Component {
	render() {
		const {contact, formDisplay} = this.props;

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
}

export default CV;