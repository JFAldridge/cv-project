import React, { Component } from 'react';

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

class CVForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayForm: false,
        };

        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    toggleDisplay() {
        this.setState ({
            displayForm: this.state.displayForm ? false : true
        });
    }

    render(){


        if (this.state.displayForm) {

            return(
                <div className="form-modal">
                    <div className="form-container">
                        <form>
                            { Object.entries(this.props.fields).map(([inputName, inputValue]) => {
                                return (
                                    <CVInput 
                                        fieldName={inputName}
                                        currentValue={inputValue}
                                        key={inputName}
                                        inputChangeHandle={this.props.inputChangeHandle}
                                    />                 
                                );
                            }) }
                            <button
                                className="btn btn-primary"
                                onClick={this.toggleDisplay}
                                type="button"
                            >Done</button>
                        </form>
                    </div>
                </div>
            );
        } else {
            return (
                <i 
                    className="bi bi-pencil-square edit-section"
                    onClick={() => this.toggleDisplay()}
                ></i>
            );
        }
    }
}

export default CVForm;