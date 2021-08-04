import React from 'react';

function Introduction({fields, formDisplay}) {
    return (
        <section class="introduction">
            <h1 class="name">
                <span class="first-name">Given</span>
                <span class="second-name">Surname</span>
            </h1>
            <h4 class="professional-title">Professional title</h4>
            <p class="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>
    );
}

export default Introduction;