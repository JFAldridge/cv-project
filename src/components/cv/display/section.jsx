import React, {useState, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';

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
                <div className="edit-icon-container" ref={editIconContainer}>
                    <i 
                        className="bi bi-pencil-square edit-section"
                        onClick={displayForm}
                    ></i>
                </div>
            </CSSTransition>
            {children}
        </section>
    );
}

export default Section;