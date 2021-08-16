import React, {useState, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const CVSection = styled.section`
    margin-bottom: ${props => props.section === 'introduction' ? "0" : "1.5em"};
    position: relative;
    ${props => props.section === 'introduction' && "height: calc(1.8in + 1.5em);"};
`;

const EditIconContainer = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    height: .3in;
    width: .3in;
    display: flex;
    align-items: center;
    border-radius: 6%;
    box-shadow: 0 0 3px rgb(88,88,88);
    background-color: rgb(248, 248, 248);

    &:hover {
        background-color: rgb(88,88,88);
    }
`;

const EditIcon = styled.i`
    margin: 0 auto;
    font-size: 1.5em;
    color: rgb(88,88,88);
    ${EditIconContainer}:hover & {
        color: rgb(248, 248, 248);
    }
`;

function Section({children, formDisplay, sectionName}) {
    const [displayEditIcon, setDisplayEditIcon] = useState(false);
    const editIconContainer = useRef(null);

    const displayForm = () => {
		formDisplay(sectionName);
	}

    return (
        <CVSection
            section={sectionName}
            onMouseEnter={() => setDisplayEditIcon(true)}
            onMouseLeave={() => setDisplayEditIcon(false)}
        >
            <CSSTransition 
                nodeRef={editIconContainer}
                in={displayEditIcon}
                timeout={300}
                classNames="edit-icon"
                unmountOnExit
            >
                <EditIconContainer ref={editIconContainer} className="edit-icon-container">
                    <EditIcon
                        className="bi bi-pencil-square"
                        onClick={displayForm}
                    ></EditIcon>
                </EditIconContainer>
            </CSSTransition>
            {children}
        </CVSection>
    );
}

export default Section;