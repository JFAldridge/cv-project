import React from 'react';
import CVInput from './cv-input';

function CVForm({fields, inputChangeHandle, formDisplay}) {
 
    const displayForm = () => {
        formDisplay(null);
    }

    return(
        <div className="form-modal">
            <div className="form-container">
                <form>
                    { Object.entries(fields).map(([inputName, inputInfo]) => {
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
                    }) }
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