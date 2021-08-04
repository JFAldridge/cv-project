import React from 'react';

function Skills({fields, formDisplay}) {

	const displayForm = () => {
		formDisplay('skills');
	}

    return (
        <section className="skills">
			<i 
				className="bi bi-pencil-square edit-section"
				onClick={displayForm}
			></i>
            <h2>Skills</h2>
            <div className="skill-list-container">
				<h4>{fields.skills_heading1}</h4>
				<ul className="skill-list">
					<li>{fields.skills_item1}</li>
					<li>{fields.skills_item2}</li>
					<li>{fields.skills_item3}</li>
					<li>{fields.skills_item4}</li>
					<li>{fields.skills_item5}</li>
					<li>{fields.skills_item6}</li>
				</ul>
            </div>
            <div className="skill-list-container">
				<h4>{fields.skills_heading2}</h4>
				<ul className="skill-list">
					<li>{fields.skills_item7}</li>
					<li>{fields.skills_item8}</li>
					<li>{fields.skills_item9}</li>
					<li>{fields.skills_item10}</li>
					<li>{fields.skills_item11}</li>
					<li>{fields.skills_item12}</li>
					<li>{fields.skills_item13}</li>
				</ul>
            </div>
        </section>
    );
}

export default Skills;