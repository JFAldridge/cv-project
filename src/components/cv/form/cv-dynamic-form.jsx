import React from 'react';
import DeletableFieldset from './deletable-fieldset';

function CVDynamicFrom({fields, section, inputChangeHandle, fieldSetDelete, formDisplay}) {
 
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

    function buildForm(groupedFields) {
        return (
            groupedFields.map((group, groupNum) => {
                return (
                    <DeletableFieldset 
                        fields={group}
                        groupNum={groupNum}
                        inputChangeHandle={inputChangeHandle}
                        fieldSetDelete={fieldSetDelete}
                        key={section + groupNum}
                    />
                );
            })
        );
    }
    /* 
    const createFieldset = (groupedFields) => {
        const hightestGroupNum = Object.keys(groupTheFields).sort.pop(); 
        const newGroupNum = hightestGroupNum + 1;

        const groupCopy = groupTheFields[1]
    }
    */

    const groupedFields = groupTheFields(fields)

    return(
        <div className="form-modal">
            <div className="form-container">
            <h2>{capitalizeFirstLetter(section)}</h2>
                <form>
                    {
                        groupedFields.map((group, groupNum) => {
                            return (
                                <DeletableFieldset 
                                    fields={group}
                                    groupNum={groupNum}
                                    inputChangeHandle={inputChangeHandle}
                                    fieldSetDelete={fieldSetDelete}
                                    key={section + groupNum}
                                />
                            );
                        })
                    }
                    <button
                        className="btn btn-primary"
                        onClick={displayForm}
                        type="button"
                    >Done</button>
                </form>
            </div>
        </div>
    );
}

export default CVDynamicFrom;