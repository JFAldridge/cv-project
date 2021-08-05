import React from 'react';

function Portrait({fields, formDisplay}) {
    const displayForm = () => {
		formDisplay('portrait');
	}

    console.log(fields.portrait_image)

    return (
        <section className="portrait-container">
            <i 
				className="bi bi-pencil-square edit-section"
				onClick={displayForm}
			></i>
            <div className="portrait">
                {fields.portrait_image !== '' &&
                    <img src={fields.portrait_image} alt="Portrait" />}
            </div>
        </section>
    );
}

export default Portrait;