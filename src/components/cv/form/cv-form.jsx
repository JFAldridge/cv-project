import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

function CVInput({fieldName, currentValue}) {

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
                    class="form-control" 
                    id={fieldName}
                    value={currentValue} 
                />
            </div>
        </div>
    
    );
}

class CVForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false
        };
    }

    render(){
        console.log(this.props);

        return(
            <div className="form-modal">
                <div className="form-container">
                    <form>
                        { Object.entries(this.props.fields).map(([key, value]) => {
                            return (
                                <CVInput 
                                    fieldName={key}
                                    currentValue={value}
                                    key={uuidv4()}
                                />                 
                            );
                        }) }
                    </form>
                </div>
            </div>
        );
    }
}

export default CVForm;