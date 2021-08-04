import React from 'react';

function Introduction({fields, formDisplay}) {

    const displayForm = () => {
		formDisplay('introduction');
	}

    return (
        <section className="introduction">
            <i 
				className="bi bi-pencil-square edit-section"
				onClick={displayForm}
			></i>
            <h1 className="name">
                <span className="first-name">{fields.introduction_given}</span>
                <span className="second-name">{fields.introduction_surname}</span>
            </h1>
            <h4 className="professional-title">{fields.introduction_title}</h4>
            <p className="about">{fields.introduction_about}</p>
        </section>
    );
}

export default Introduction;