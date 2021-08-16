import React from 'react';
import styled from 'styled-components';

const InstitutionWrapper = styled.div`
    margin-bottom: 1em;
        p {
            margin-bottom: .2em;
        }
`;

function InstitutionDiv({degree, institution, timeToDegree}) {
    return (
        <InstitutionWrapper>
            <h4>{degree}</h4>
            <p>{institution}</p>
            <p>{timeToDegree}</p>
        </InstitutionWrapper>
    );
}

function Education({fields}) {   

    const getFieldGroupNumbers = () => {
        const numberIdentifiers = Object.keys(fields).map((key) => key.charAt(key.length - 1)).sort();
        const uniqueIdentifiers = [...new Set(numberIdentifiers)];
        return uniqueIdentifiers;
    }

    return (
        <>  
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
        </>
    );
}

export default Education;