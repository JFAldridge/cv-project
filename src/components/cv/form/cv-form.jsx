import React, { Component } from 'react';
import CVInput from './cv-input';

class CVForm extends Component {
    constructor(props) {
        super(props);

        this.displayForm = this.displayForm.bind(this);
    }

    displayForm() {
        this.props.formDisplay(null);
    }

    render(){
        const fields = this.props.fields;

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
                                    inputChangeHandle={this.props.inputChangeHandle}
                                />                 
                            );
                        }) }
                        <button
                            className="btn btn-primary"
                            onClick={this.displayForm}
                            type="button"
                        >Done</button>
                    </form>
                </div>
            </div>
        );
    }
    
}

export default CVForm;