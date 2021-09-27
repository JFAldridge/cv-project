import React from 'react';
import styled from 'styled-components';

const PositionTitle = styled.span`
    font-weight: normal;
`;

const Achievement = styled.li`
    && {
        font-size: .85em;
    }
`;

function Position({fieldGroup, groupNum}) {
    
    function winnowAndSortListitems(fields) {
        let listItems = [];

        Object.keys(fields).forEach((field,i) => {
            // Check whether catalogue tag has two chars
            if (field.split('_')[1].length === 2) {
                const listItem = fieldGroup[field];

                if (listItem !== null && listItem !== '') {
                    listItems.push(<Achievement key={i}>{listItem}</Achievement>);
                }
            }
        });

        const sortedListItems = listItems.sort()
        return sortedListItems;
    }

    return (
        <div className="position">
            <h4 className="company">{fieldGroup['company_' + groupNum]} <PositionTitle>{fieldGroup['position_' + groupNum]}</PositionTitle></h4>
            <p className="duration">{fieldGroup['duration_' + groupNum]}</p>
            <p className="position-summary">{fieldGroup['summary_' + groupNum]}</p>
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