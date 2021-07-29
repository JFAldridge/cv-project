
function CVInput( {inputName, inputType, currentValue, inputChangeHandle} ) {
    
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleInputChange = (event) => {
        inputChangeHandle(event);
    }


    return (
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label 
                    htmlFor={inputName} 
                    className="form-label">
                {capitalize(inputName)}
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