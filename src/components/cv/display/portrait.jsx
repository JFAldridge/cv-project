import React, {useState, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';

function Portrait({fields, formDisplay}) {
    const [displayEditIcon, setDisplayEditIcon] = useState(false);
    const editIconContainer = useRef(null);

    const displayForm = () => {
		formDisplay('portrait');
	}

    console.log(fields.portrait_image)

    return (
        <section 
            className="portrait-container"
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
            <div className="portrait">
                {fields.portrait_image !== '' &&
                    <img src={fields.portrait_image} alt="Portrait" />}
            </div>
        </section>
    );
}

export default Portrait;