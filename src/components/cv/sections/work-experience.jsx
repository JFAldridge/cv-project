import React from 'react';
import styled from 'styled-components';

const PositionTitle = styled.span`
    font-weight: normal;
`;

function Position({fieldGroup, groupNum}) {
    
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
        <div className="position">
            <h4 className="company">{fieldGroup['company' + groupNum]} <PositionTitle>{fieldGroup['position' + groupNum]}</PositionTitle></h4>
            <p className="duration">{fieldGroup['duration' + groupNum]}</p>
            <p className="position-summary">{fieldGroup['summary' + groupNum]}</p>
            <ul className="achievements">
                {winnowAndSortListitems(fieldGroup)}
            </ul>
        </div>
    );
}

function WorkExperience({fields}) {

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
        <h2>Work Experience</h2>
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
        </>
    );
}

export default WorkExperience;