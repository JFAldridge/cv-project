import React, {useState} from 'react';
import { CSSTransition } from 'react-transition-group';

function InstitutionDiv({degree, institution, timeToDegree}) {
    return (
        <div className="institution">
            <h4>{degree}</h4>
            <p>{institution}</p>
            <p>{timeToDegree}</p>
        </div>
    );
}

function Education({fields, formDisplay}) {   
    const [displayEditIcon, setDisplayEditIcon] = useState(false);
 

    const getFieldGroupNumbers = () => {
        const numberIdentifiers = Object.keys(fields).map((key) => key.charAt(key.length - 1)).sort();
        const uniqueIdentifiers = [...new Set(numberIdentifiers)];
        return uniqueIdentifiers;
    }

    const displayForm = () => {
		formDisplay('education');
	}

    return (
        <section 
            className="education"
            onMouseEnter={() => setDisplayEditIcon(true)}
            onMouseLeave={() => setDisplayEditIcon(false)}
        >
            <CSSTransition 
                in={displayEditIcon}
                timeout={300}
                classNames="edit-icon"
                unmountOnExit
            >
                <div className="edit-icon-container">
                    <i 
                        className="bi bi-pencil-square edit-section"
                        onClick={displayForm}
                    ></i>
                </div>
            </CSSTransition>
            <h2>Education</h2>
                {
                    getFieldGroupNumbers().map((groupNum) => {
                        const degreeInfo = fields['education_degree' + groupNum];
                        const institutionInfo = fields['education_institution' + groupNum];
                        const timeToDegreeInfo = fields['education_timeToDegree' + groupNum];

                        return (
                            <InstitutionDiv 
                                degree={degreeInfo}
                                institution={institutionInfo}
                                timeToDegree={timeToDegreeInfo}
                                key={degreeInfo + groupNum}
                            />
                        );
                    })
                }
        </section>
    );
}

export default Education;