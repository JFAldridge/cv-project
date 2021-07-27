import React, { Component } from 'react';
import '../../styles/cv.css';
import Contact from './display/contact.jsx';

class CV extends Component {
	render() {
		return (
			<div className="resume">
				<div className="sidebar">
					<Contact />
				</div>
				<div className="main-content">

				</div>
			</div>
		);
	}
}

export default CV;