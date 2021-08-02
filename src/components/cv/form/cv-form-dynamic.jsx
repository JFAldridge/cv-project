import React from 'react';
import CVInput from './cv-input';

function CVFormDynamic({fields, section, inputChangeHandle, formDisplay}) {
 
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
                    Object.entries(groupedFields[group]).map(([inputName, inputInfo]) => {
                        return (
                            <CVInput 
                                inputName={inputName}
                                currentValue={inputInfo[0]}
                                inputType={inputInfo[1]}
                                labelContent={inputInfo[2]}
                                placeholder={inputInfo[3]}
                                key={inputName}
                                inputChangeHandle={inputChangeHandle}
                            />                 
                        );
                    })
                );
            })
        );
    }

    console.log(buildForm(groupTheFields()))

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

export default CVFormDynamic;