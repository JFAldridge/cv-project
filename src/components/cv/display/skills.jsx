import React, {useState, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';

function SkillGroup({fieldGroup, groupNum}) {
    
    function winnowAndSortListitems(fields) {
        let listItems = [];

        Object.keys(fields).forEach((field) => {
            const listItemIdentifier = field.charAt(field.length - 2);
            if (listItemIdentifier === listItemIdentifier.toUpperCase()) {
                const listItem = fieldGroup[field];

                if (listItem !== null && listItem !== '') {
                    listItems.push(<li key={listItemIdentifier}>{listItem}</li>);
                }
            }
        });

        const sortedListItems = listItems.sort()
        return sortedListItems;
    }

    return (
		<div className="skill-list-container">
			<h4>{fieldGroup['skills_heading' + groupNum]}</h4>
			<ul className="skill-list">
				{winnowAndSortListitems(fieldGroup)}
			</ul>
		</div>
    );
}

function Skills({fields, formDisplay}) {
	const [displayEditIcon, setDisplayEditIcon] = useState(false);
    const editIconContainer = useRef(null);

	const displayForm = () => {
		formDisplay('skills');
	}

	function groupTheFields(fields) {
        let groupedFields = [];

        Object.keys(fields).forEach((field) => {
            const groupNum = field.charAt(field.length - 1);
            if (!groupedFields[groupNum]) {
                groupedFields[groupNum] = {}
            }
            groupedFields[groupNum][field] = fields[field];
        });

        return groupedFields;
    }

    return (
        <section 
			className="skills"
			onMouseEnter={() => setDisplayEditIcon(true)}
            onMouseLeave={() => setDisplayEditIcon(false)}
		>
			<CSSTransition 
                nodeRef={editIconContainer}
                in={displayEditIcon}
                timeout={300}
                classNames="edit-icon"
                unmountOnExit
            >
                <div className="edit-icon-container" ref={editIconContainer}>
                    <i 
                        className="bi bi-pencil-square edit-section"
                        onClick={displayForm}
                    ></i>
                </div>
            </CSSTransition>
            <h2>Skills</h2>
				{
                    groupTheFields(fields).map((group, i) => {
                        return (
                            <SkillGroup 
                                fieldGroup={group}
                                groupNum={i}
                                key={i}
                            />
                        );
                    })
                }
        </section>
    );
}

export default Skills;