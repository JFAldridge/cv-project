import React from 'react';

function Header(props) {
    return (
        <header id="header" className="fixed-top d-flex align-items-center header-transparent">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                    <h1 className="text-light"><span>Moderna</span></h1>
                </div>
            </div>
        </header>
    );
}

export default Header;