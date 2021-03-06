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
                    const degreeInfo = fields['degree_' + groupNum];
                    const institutionInfo = fields['institution_' + groupNum];
                    const timeToDegreeInfo = fields['timeToDegree_' + groupNum];

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