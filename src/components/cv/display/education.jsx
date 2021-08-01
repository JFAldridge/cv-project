import React from 'react';

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
    console.log(fields);
    

    const getFieldGroupNumbers = () => {
        const numberIdentifiers = Object.keys(fields).map((key) => key.charAt(key.length - 1));
        const uniqueIdentifiers = [... new Set(numberIdentifiers)];
        return uniqueIdentifiers;
    }

    return (
        <section className="education">
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
                            />
                        );
                    })
                }
        </section>
    );
}

export default Education;