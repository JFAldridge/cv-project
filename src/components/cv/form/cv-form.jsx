import React, { Component } from 'react';
import CVInput from './cv-input';

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
                            { Object.entries(this.props.fields).map(([inputName, inputInfo]) => {
                                return (
                                    <CVInput 
                                        inputName={inputName}
                                        inputType={inputInfo[1]}
                                        currentValue={inputInfo[0]}
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