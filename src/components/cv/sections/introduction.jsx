import React from 'react';
import styled from 'styled-components';

const FirstName = styled.span`
    font-weight: bold;
`;

const ProfessionalTitle = styled.h4`
    && {
        letter-spacing: .15em;
        margin-bottom: 1em;
    }
`;

function Introduction({fields}) {
    return (
        <>
            <h1>
                <FirstName>{fields.introduction_givenName}</FirstName> 
                {fields.introduction_surname}
            </h1>
            <ProfessionalTitle className="pro-title">{fields.introduction_title}</ProfessionalTitle>
            <p className="about">{fields.introduction_about}</p>
        </>
    );
}

export default Introduction;