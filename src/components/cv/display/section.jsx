import React, {useState, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

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

function Section({children, formDisplay}) {
    const [displayEditIcon, setDisplayEditIcon] = useState(false);
    const editIconContainer = useRef(null);

    const displayForm = () => {
		formDisplay('introduction');
	}

    return (
        <section 
            className="introduction"
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
                <EditIconContainer ref={editIconContainer}>
                    <EditIcon
                        className="bi bi-pencil-square edit-section"
                        onClick={displayForm}
                    ></EditIcon>
                </EditIconContainer>
            </CSSTransition>
            {children}
        </section>
    );
}

export default Section;