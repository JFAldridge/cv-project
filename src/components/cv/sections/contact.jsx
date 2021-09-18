import React from 'react';

function ContactItem({type, value}) {

	const getIconClass = (type) => {
		const iconClasses = {
			phone: "bi bi-telephone-fill",
			email: "bi bi-envelope-fill",
			portfolio: "bi bi-border-style",
			github: "bi bi-github",
			linkedIn: "bi bi-linkedin",
			instagram: "bi bi-instagram",
			youtube: "bi bi-youtube",
			facebook: "bi bi-facebook",
		};

		return iconClasses[type];
	}
	
	if (value === null || value === '') return null;

	return (
		<li className="contact-item">
			<i className={getIconClass(type)}></i>
			{value}
		</li>
	);	
	
}

function Contact({fields, formDisplay}) {

	return (
		<>
			<h2>Contact</h2>
			<ul className="contact-list">
				{ Object.entries(fields).map(([key, inputInfo]) => {
					return (
						<ContactItem 
							type={key}
							value={(inputInfo)}
							key={key}
						/>
					);
				})}
			</ul>
		</>
	);
}

export default Contact;