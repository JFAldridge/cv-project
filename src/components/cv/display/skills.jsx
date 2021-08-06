import React, {useState} from 'react';
import { CSSTransition } from 'react-transition-group';

function Skills({fields, formDisplay}) {
	const [displayEditIcon, setDisplayEditIcon] = useState(false);


	const displayForm = () => {
		formDisplay('skills');
	}

    return (
        <section 
			className="skills"
			onMouseEnter={() => setDisplayEditIcon(true)}
            onMouseLeave={() => setDisplayEditIcon(false)}
		>
			<CSSTransition 
                in={displayEditIcon}
                timeout={300}
                classNames="edit-icon"
                unmountOnExit
            >
                <div className="edit-icon-container">
                    <i 
                        className="bi bi-pencil-square edit-section"
                        onClick={displayForm}
                    ></i>
                </div>
            </CSSTransition>
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