import React from "react";

function CVInput( {inputName, currentValue, inputType, labelContent, placeholder, inputChangeHandle} ) {
    
    const handleInputChange = (event) => {
        inputChangeHandle(event);
    }

    return (
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label 
                    htmlFor={inputName} 
                    className="form-label">
                {labelContent}
                </label>
            </div>
            <div className="col-auto">
                {inputType === 'textarea' 
                ? <textarea 
                    id={inputName}
                    name={inputName}
                    value={currentValue || ''}
                    type={inputType} 
                    placeholder={placeholder}
                    className="form-control mb-3"
                    rows="6"
                    cols="40"
                    onChange={handleInputChange}
                ></textarea>
                : <input 
                    id={inputName}
                    name={inputName}
                    value={currentValue || ''}
                    type={inputType} 
                    placeholder={placeholder}
                    className="form-control mb-3"
                    onChange={handleInputChange}
                />
                }
            </div>
        </div>
    );
}

export default CVInput;