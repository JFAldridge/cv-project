import React from 'react';
import CVInput from './cv-input';

function CVForm({fields, section, inputChangeHandle, formDisplay}) {
 
    const displayForm = () => {
        formDisplay(null);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <div className="form-modal">
            <div className="form-container">
                <i 
                    className="bi bi-x-square close-form"
                    onClick={displayForm}
                ></i>
                <h2>{capitalizeFirstLetter(section)}</h2>
                <p className="mb-3">(Unused fields will not show up on the CV)</p>
                <form>
                    {
                        Object.entries(fields).map(([inputName, inputInfo]) => {
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

export default CVForm;