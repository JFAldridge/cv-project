import React, { useState, useContext, useEffect } from 'react';
import ThemeSelector from './theme-selector';
import styled, { ThemeContext } from 'styled-components';
import CreateTheme from './create-theme';
import { getFromLS } from '../../../utils/storage';
import { v4 as uuidv4  } from 'uuid';
import { Link } from 'react-router-dom';

const DashboardWrapper = styled.div`
    display: flex;
    padding-left: 2em;
    padding-right: 2em;

    && .btn {
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 500;
        font-size: 14px;
        
        padding: 12px 15px;
        transition: 0.5s;
        line-height: 1;
        margin: 20px 10px;
        color: #fff;
        background-color: transparent;
        animation-delay: 0.8s;
        border: 2px solid #68A4C4;
        border-radius: 10px;
        letter-spacing: 1px;
        &:hover {
            background: #68A4C4;
            color: #fff;
        }
        &:active {
            background-color: transparent;
            border: 2px solid #68A4C4;
        }
        &:focus {
            background-color: transparent;
            border: 2px solid #68A4C4;
            box-shadow: 0 0 3px 1px #ffffff4d;
        }
    }
`;

const DashButton = styled.button`
    &&.btn {
    }
`;

const FlashMessageContainer = styled.div`
    color: #fefefe;
    padding: 12px 15px;
    display: flex;
    align-items: center;
    margin-right: auto;
    p {
        margin: 0;
        color: ${props => props.message === 'Info saved' ? '#95ffb1;' : '#ffdb77;'}
    }
`;

const CallToRegister = styled.div`
    width: 45%;
    border: 2px solid #68A4C4;
    border-radius: 10px;
    letter-spacing: 1px;
    box-shadow: 0 0 3px #ffffff6b;
    margin: 9px;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        margin: 0;
        color: #fefefe;
        height: 38px;
    }
    a {
        color: #fefefe;
        text-decoration: none;
        margin-left: 4px;
        font-size: 1.2em;
        &:hover {
            color: #a2cce3;
        }
    }
`;

const Spacer = styled.div`
    width: 5%;
`;

const Divider = styled.span`
    display:inline-block;
    height: 24px;
    width: 2px;
    border-left: 2px solid #68A4C4;
    box-shadow: 0 0 3px #ffffff6b;
    position: relative;
    top: 6px;
    margin: 0 7px;
`;

function Dashboard({printHandle, workingThemeSet, themeChangeHandle, userInfoBackupHandle, flashMessage, flashMessageExpire, loggedIn}) {
    const themeContext = useContext(ThemeContext);
    const [allThemes, setAllThemes] = useState(getFromLS('all-themes').data);
    
    useEffect(() => {
        if (flashMessage) {
            const flashTimeout = setTimeout(() => {
                flashMessageExpire()
            }, 3000)

            return () => clearTimeout(flashTimeout);
        }
    }, [flashMessage, flashMessageExpire]);

    const camelize = (str) => {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
          return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }

    const ensureNameUniqueness = (name) => {
        const allThemeNames = Object.values(allThemes).map((theme) => theme.name);

        if (!allThemeNames.includes(name)) {
            return name;
        }

        // Add incrementing number to name until it is unique
        let i = 1;

        while (allThemeNames.includes(name + i.toString())) {
            i += 1;
        }

        return name + i.toString();
    }

    const saveCreatedTheme = () => {
        // Duplicate working theme, give it unique id, ensure name uniqueness
        let workingTheme = {...themeContext};
        workingTheme.id = uuidv4();
        workingTheme.name = ensureNameUniqueness(workingTheme.name);

        // Format it to fit allThemes and combine
        let newThemeData = {};
        newThemeData[camelize(workingTheme["name"])] = {...workingTheme};
   
        // Add to all themes and set with default name
        setAllThemes({...allThemes, ...newThemeData});
        workingThemeSet({...workingTheme, ...{name: "New Theme"}});
    }

    if (!loggedIn) {
        return (
            <DashboardWrapper>
                <DashButton 
                    className="btn btn-print-cv"
                    onClick={printHandle}>
                    Print / Save PDF
                </DashButton>
                <Spacer></Spacer>
                <ThemeSelector 
                    workingThemeSet={workingThemeSet} 
                    allThemes={allThemes}
                />
                <CallToRegister>
                    <p>Create a theme! <Link to='/login'>Login</Link> <Divider></Divider> <Link to='/register'>Register</Link></p>
                </CallToRegister>
            </DashboardWrapper>
        );
    }

    return (
        <DashboardWrapper>
            <DashButton 
				className="btn btn-print-cv"
				onClick={printHandle}>
				Print / Save PDF
			</DashButton>
            <DashButton
                className="btn btn-print-cv"
                onClick={userInfoBackupHandle}>
                Save Info
            </DashButton>
            <FlashMessageContainer message={flashMessage}>
                {flashMessage &&
                    <p>{flashMessage}</p>
                }                
            </FlashMessageContainer>
			<ThemeSelector 
                workingThemeSet={workingThemeSet} 
                allThemes={allThemes}
            />
            <CreateTheme 
                themeChangeHandle={themeChangeHandle}
                createdThemeSave={saveCreatedTheme}
            />
        </DashboardWrapper>
    );
}

export default Dashboard;