import React from 'react';
import styled from 'styled-components';

const Skill = styled.li`
    && {
        margin: 0;
    }
`;

function SkillGroup({fieldGroup, groupNum}) {
    
    function winnowAndSortListitems(fields) {
        // Removes any empty list items
        let listItems = [];

        Object.keys(fields).forEach((field) => {
            const listItemIdentifier = field.charAt(field.length - 2);
            if (listItemIdentifier === listItemIdentifier.toUpperCase()) {
                const listItem = fieldGroup[field];

                if (listItem !== null && listItem !== '') {
                    listItems.push(<Skill key={listItemIdentifier}>{listItem}</Skill>);
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

function Skills({fields}) {

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
        <>
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
        </>
    );
}

export default Skills;