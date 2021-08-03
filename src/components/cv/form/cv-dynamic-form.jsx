import React from 'react';
import DeletableFieldset from './deletable-fieldset';

function CVDynamicFrom({fields, section, inputChangeHandle, formDisplay}) {
 
    const displayForm = () => {
        formDisplay(null);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function groupTheFields() {
        let groupedFields = {}

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
            Object.keys(groupedFields).map((group) => {
                return (
                    <DeletableFieldset 
                        fields={groupedFields[group]}
                        key={section + group}
                        inputChangeHandle={inputChangeHandle}
                    />
                );
            })
        );
    }

    return(
        <div className="form-modal">
            <div className="form-container">
            <h2>{capitalizeFirstLetter(section)}</h2>
                <form>
                    {buildForm(groupTheFields())}
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