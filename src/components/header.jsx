import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LogoContainer = styled.div`
    transform: translateX(-50%);
    left: 50%;
    position: absolute;
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    a {
        text-decoration: none;
        color: #ededed;
        margin-left: 13px;
        padding: 4px;
        padding: 7px;
        padding-bottom: 2px;
        &:hover {
            color: #ffffff;
        }
    }
    button {
        background: none;
        color: inherit;
        border: none;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        color: #ededed;
        margin-left: 13px;
        font-size: 1rem;
        &:hover {
            color: #ffffff;
        }
    }
`;

function Header({loggedIn, logoutHandle}) {

    return (
        <header id="header" className="d-flex align-items-center header-transparent">
            <div className="container d-flex align-items-center justify-content-end">
                <LogoContainer className="logo">
                    <h1 className="text-light"><span>CVCreator</span></h1>
                </LogoContainer>
                <NavList>
                    <li>
                        <NavLink activeStyle={{boxShadow: '0 5px 3px -5px #ededed6b'}} exact to='/'>Home</NavLink>
                    </li>
                
                    {loggedIn ?
                        <li onClick={logoutHandle}>
                            <button>Logout</button>
                        </li>
                        :
                        <li>
                            <NavLink activeStyle={{boxShadow: '0 5px 3px -5px #ededed6b'}} exact to='/login'>Login</NavLink>
                        </li>
                    }
                </NavList>
            </div>
        </header>
    );
}

export default Header;