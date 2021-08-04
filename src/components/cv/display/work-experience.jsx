import React from 'react';

function Position({fieldGroup, groupNum}) {
    
    function winnowAndSortListitems(fields) {
        let listItems = [];

        Object.keys(fields).forEach((field) => {
            const listItemIdentifier = field.charAt(field.length - 2);
            if (listItemIdentifier === listItemIdentifier.toUpperCase()) {
                const listItem = fieldGroup[field];

                if (listItem !== null && listItem !== '') {
                    console.log(listItem)
                    listItems.push(<li key={listItemIdentifier}>{listItem}</li>);
                }
            }
        });

        const sortedListItems = listItems.sort()
        return sortedListItems;
    }

    return (
        <div className="position">
            <h4 className="company">{fieldGroup['workExperience_company' + groupNum]} <span className="position">{fieldGroup['workExperience_position' + groupNum]}</span></h4>
            <p className="duration">{fieldGroup['workExperience_duration' + groupNum]}</p>
            <p className="position-summary">{fieldGroup['workExperience_summary' + groupNum]}</p>
            <ul className="achievements">
                {winnowAndSortListitems(fieldGroup)}
            </ul>
        </div>
    );
}

function WorkExperience({fields, formDisplay}) {
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

    const displayForm = () => {
		formDisplay('workExperience');
	}

    return (
        <section className="work-experience">
            <i 
				className="bi bi-pencil-square edit-section"
				onClick={displayForm}
			></i>
            <h2>Work Expierence</h2>
                {
                    groupTheFields(fields).map((group, i) => {
                        return (
                            <Position 
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

export default WorkExperience;