import React from "react";

function CVInput( {inputName, currentValue, inputType, labelContent, section, inputChangeHandle} ) {
    
    const handleInputChange = (event) => {
        inputChangeHandle(event, section);
    }

    return (
        <div className="form-floating mb-3">
            {inputType === 'textarea' 
            ? <textarea 
                id={inputName}
                name={inputName}
                value={currentValue || ''}
                type={inputType} 
                className="form-control mb-3 text-area"
                rows="6"
                cols="40"
                onChange={handleInputChange}
            ></textarea>
            : <input 
                id={inputName}
                name={inputName}
                value={currentValue || ''}
                type={inputType} 
                className="form-control mb-3"
                onChange={handleInputChange}
            />
            }
            <label 
                htmlFor={inputName} 
                className="form-label">
                {labelContent}
            </label>
        </div>
    );
}

export default CVInput;