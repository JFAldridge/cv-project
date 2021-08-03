import React from 'react';
import CVInput from './cv-input';

function DeletableFieldset({fields, groupNum, inputChangeHandle, fieldSetDelete}) {

    const deleteFieldSet = () => {
        fieldSetDelete(fields)
    }
        
    return (
        <fieldset>
            {groupNum > 0 &&
            <i 
                className="bi bi-x-square"
                onClick={() => deleteFieldSet()}
            ></i> }  
            {
                Object.entries(fields).map(([inputName, inputInfo]) => {
                    return (
                        <CVInput 
                            inputName={inputName}
                            currentValue={inputInfo[0]}
                            inputType={inputInfo[1]}
                            labelContent={inputInfo[2]}
                            placeholder={inputInfo[3]}
                            key={inputName}
                            inputChangeHandle={inputChangeHandle}
                        />                 
                    );
                }) 
            }
        </fieldset>
    );
}

export default DeletableFieldset;