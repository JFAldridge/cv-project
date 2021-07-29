function CVInput( {fieldName, currentValue, inputChangeHandle} ) {
    
    const inputType = (name) => {
        if (name === 'tel' || name === 'email') {
            return name
        } else {
            return 'text';
        }
    }

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
                    htmlFor={fieldName} 
                    className="form-label">
                {capitalize(fieldName)}
                </label>
            </div>
            <div className="col-auto">
                <input 
                    type={inputType(fieldName)} 
                    className="form-control" 
                    id={fieldName}
                    name={fieldName}
                    value={currentValue} 
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
}

export default CVInput;