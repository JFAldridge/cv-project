import React from 'react';
import styled from 'styled-components';

const PortraitContainer = styled.div`
    display: flex;
    align-items: center;
    height: 2.4in;
`;

const PortraitWrapper = styled.div`
    background-color: rgb(189, 189, 189);
    width: 1.61in;
    height: 1.61in;
    border-radius: 50%;
    margin-top: 1em;
`;

const PortraitImage = styled.img`
    width: 1.62in;
    height: 1.62in;
    border-radius: 50%;
    background-color: $accent-bg;
`;

function Portrait({fields}) {

    return (
        <PortraitContainer>
            <PortraitWrapper>
                {fields.image &&
                    <PortraitImage src={fields.image} alt="Portrait" />}
            </PortraitWrapper>
        </PortraitContainer>
    );
}

export default Portrait;