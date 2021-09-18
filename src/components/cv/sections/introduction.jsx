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
                <FirstName>{fields.givenName}</FirstName> 
                {fields.surname}
            </h1>
            <ProfessionalTitle className="pro-title">{fields.title}</ProfessionalTitle>
            <p className="about">{fields.about}</p>
        </>
    );
}

export default Introduction;