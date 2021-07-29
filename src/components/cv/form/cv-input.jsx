
function CVInput( {inputName, inputType, currentValue, labelContent, inputChangeHandle} ) {
    
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
                    type={inputType} 
                    className="form-control" 
                    id={inputName}
                    name={inputName}
                    value={currentValue || ''} 
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
}

export default CVInput;