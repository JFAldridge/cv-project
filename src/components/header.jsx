import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header id="header" className="d-flex align-items-center header-transparent">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                    <h1 className="text-light"><span>CVCreator</span></h1>
                </div>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
            </div>
        </header>
    );
}

export default Header;