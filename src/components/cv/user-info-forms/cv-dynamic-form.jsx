import React from 'react';
import DeletableFieldGroup from './deletable-field-group';

function CVDynamicFrom({fields, section, inputChangeHandle, fieldGroupCreate, fieldGroupDelete, formDisplay}) {
 
    const displayForm = () => {
        formDisplay(null);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function splitCamelCaseString(string) {
        return string.split(/(?=[A-Z])/).join(' ')
    }

    function groupTheFields(fields) {
        /* [{field1: displayStr, alsoField1: displayStr}, {field2: displayStr, ...}, ...]*/
        let groupedFields = [];

        Object.keys(fields).forEach((field) => {
            const groupNum = field.charAt(field.length - 1);
            if (!groupedFields[groupNum]) {
                groupedFields[groupNum] = {}
            }
            groupedFields[groupNum][field] = fields[field];
        });
        console.log(groupedFields)
        return groupedFields;
    }

    const createFieldGroup = (groupedFields) => {
        console.log(groupedFields)
        // Creates new field group to add to state
        /* {field3: ['', 'tel', 'Phone', '555-555-5555'], alsoField3: [...], ...}*/
        const newGroup = {};
        const newGroupNum = groupedFields.length;

        const firstGroupCopy = JSON.parse(JSON.stringify(groupedFields[0]));

        Object.keys(firstGroupCopy).forEach((field) => {
            // Copy field name, but with new groupNum, and copy inputInfo
            const newFieldName = field.slice(0, -1) + newGroupNum;
            newGroup[newFieldName] = firstGroupCopy[field];

            // Clear input value of inputInfo
            newGroup[newFieldName][0] = null;
        })

        fieldGroupCreate(newGroup, section);
    }

    const groupedFields = groupTheFields(fields)
    const prettifiedSectionName = splitCamelCaseString(capitalizeFirstLetter(section));
    return(
        <div className="form-modal">
            <div className="form-container">
                <i 
                    className="bi bi-x-square close-form"
                    onClick={displayForm}
                ></i>
                <h2>{prettifiedSectionName}</h2>
                <p className="mb-3">(Unused fields will not show up on the CV)</p>
                <form>
                    {
                        groupedFields.map((group, groupNum) => {
                            return (
                                <DeletableFieldGroup 
                                    fields={group}
                                    groupNum={groupNum}
                                    inputChangeHandle={inputChangeHandle}
                                    fieldGroupDelete={fieldGroupDelete}
                                    section={section}
                                    key={section + groupNum}
                                />
                            );
                        })
                    }
                </form>
                <div
                    className="btn btn-outline-primary mb-3 create-field-group"
                    onClick={() => createFieldGroup(groupedFields)} >
                    <i className="bi bi-plus-square add-icon"></i>
                    Add {prettifiedSectionName}
                </div>
                <br />
                <button
                    className="btn btn-primary"
                    onClick={displayForm}
                    type="button"
                >Done</button>
            </div>
        </div>
    );
}

export default CVDynamicFrom;