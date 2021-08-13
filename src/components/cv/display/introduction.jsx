import React from 'react';

function Introduction({fields}) {
    return (
        <>
            <h1 className="name">
                <span className="first-name">{fields.introduction_given}</span>
                <span className="second-name">{fields.introduction_surname}</span>
            </h1>
            <h4 className="professional-title">{fields.introduction_title}</h4>
            <p className="about">{fields.introduction_about}</p>
        </>
    );
}

export default Introduction;