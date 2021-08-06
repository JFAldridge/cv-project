import React, {useState, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';

function Introduction({fields, formDisplay}) {
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
            <h1 className="name">
                <span className="first-name">{fields.introduction_given}</span>
                <span className="second-name">{fields.introduction_surname}</span>
            </h1>
            <h4 className="professional-title">{fields.introduction_title}</h4>
            <p className="about">{fields.introduction_about}</p>
        </section>
    );
}

export default Introduction;