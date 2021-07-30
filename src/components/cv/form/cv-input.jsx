
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
                <input 
                    id={inputName}
                    name={inputName}
                    value={currentValue || ''}
                    type={inputType} 
                    placeholder={placeholder}
                    className="form-control"
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
}

export default CVInput;