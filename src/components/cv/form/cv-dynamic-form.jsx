import React from 'react';
import DeletableFieldGroup from './deletable-field-group';

function CVDynamicFrom({fields, section, inputChangeHandle, fieldGroupCreate, fieldGroupDelete, formDisplay}) {
 
    const displayForm = () => {
        formDisplay(null);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
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

    const createFieldGroup = (groupedFields) => {
        // Creates new field group to add to state
        const newGroup = {};
        const newGroupNum = groupedFields.length;

        const firstGroupCopy = {...groupedFields[0]};

        Object.keys(firstGroupCopy).forEach((field) => {
            // Copy field name, but with new groupNum, and copy inputInfo
            const newFieldName = field.slice(0, -1) + newGroupNum;
            newGroup[newFieldName] = firstGroupCopy[field];

            // Clear input value of inputInfo
            newGroup[newFieldName][0] = '';
        })

        fieldGroupCreate(newGroup);
    }

    const groupedFields = groupTheFields(fields)

    return(
        <div className="form-modal">
            <div className="form-container">
            <h2>{capitalizeFirstLetter(section)}</h2>
                <form>
                    {
                        groupedFields.map((group, groupNum) => {
                            return (
                                <DeletableFieldGroup 
                                    fields={group}
                                    groupNum={groupNum}
                                    inputChangeHandle={inputChangeHandle}
                                    fieldGroupDelete={fieldGroupDelete}
                                    key={section + groupNum}
                                />
                            );
                        })
                    }
                </form>
                <button
                    className="btn btn-outline-primary mb-3"
                    onClick={() => createFieldGroup(groupedFields)}
                >
                    Add Field Group
                </button>
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