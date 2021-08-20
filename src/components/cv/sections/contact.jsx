import React from 'react';

function ContactItem({type, value}) {

	const getIconClass = (type) => {
		const iconClasses = {
			contact_phone: "bi bi-telephone-fill",
			contact_email: "bi bi-envelope-fill",
			contact_portfolio: "bi bi-border-style",
			contact_github: "bi bi-github",
			contact_linkedIn: "bi bi-linkedin",
			contact_instagram: "bi bi-instagram",
			contact_youtube: "bi bi-youtube",
			contact_facebook: "bi bi-facebook",
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