import React from 'react';
import CVInput from './cv-input';

function DeletableFieldGroup({fields, section, groupNum, inputChangeHandle, fieldGroupDelete}) {

    const deleteFieldGroup = () => {
        fieldGroupDelete(fields, section)
    }
        
    return (
        <fieldset>
            {groupNum > 0 &&
            <i 
                className="bi bi-x-square close-input-group"
                onClick={() => deleteFieldGroup()}
            ></i> }  
            {
                Object.entries(fields).map(([inputName, inputInfo]) => {
                    return (
                        <CVInput 
                            inputName={inputName}
                            currentValue={inputInfo[0]}
                            inputType={inputInfo[1]}
                            labelContent={inputInfo[2]}
                            section={section}
                            key={inputName}
                            inputChangeHandle={inputChangeHandle}
                        />                 
                    );
                }) 
            }
        </fieldset>
    );
}

export default DeletableFieldGroup;
