import React from 'react';

function ContactItem({type, value}) {

	const getIconClass = (type) => {
		const iconClasses = {
			contact_phone: "bi bi-telephone-fill",
			contact_email: "bi bi-envelope-fill",
			contact_portfolio: "bi bi-border-style",
			contact_github: "bi bi-github",
		};

		return iconClasses[type];
	}
	
	if (value === null) return null;

	return (
		<li className="contact-item">
			<i className={getIconClass(type)}></i>
			{value}
		</li>
	);	
	
}

function Contact({fields, formDisplay}) {

	const displayForm = () => {
		formDisplay('contact');
	}

	return (
		<section className="contact">
			<i 
				className="bi bi-pencil-square edit-section"
				onClick={displayForm}
			></i>
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
		</section>
	);
}

export default Contact;