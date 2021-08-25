import React, { useState, useContext, useEffect } from 'react';
import ThemeSelector from './theme-selector';
import styled, { ThemeContext } from 'styled-components';
import CreateTheme from './create-theme';
import { getFromLS } from '../../../utils/storage';
import { v4 as uuidv4  } from 'uuid';

const DashboardWrapper = styled.div`
    display: flex;

    && .btn {
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 1px;
        padding: 12px 32px;
        border-radius: 10px;
        transition: 0.5s;
        line-height: 1;
        margin: 20px 10px;
        color: #fff;
        background-color: transparent;
        animation-delay: 0.8s;
        border: 2px solid #68A4C4;
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

function Dashboard({printHandle, workingThemeSet, themeChangeHandle}) {
    const themeContext = useContext(ThemeContext);
    const [allThemes, setAllThemes] = useState(getFromLS('all-themes').data);

    useEffect(() => {
        // Set workingTheme's name on each save
        let event = {};
        event['target'] = {
            name: 'name',
            value: 'New Theme',
        }
        themeChangeHandle(event);
    },[allThemes]);


    function camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
          return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }

    const saveCreatedTheme = () => {
        // Duplicate working theme and give it unique id
        let workingTheme = {...themeContext};
        workingTheme.id = uuidv4();

        // Format it to fit allThemes and combine
        let newThemeData = {};
        newThemeData[camelize(themeContext["name"])] = {...workingTheme};
   
        // Add to all themes and set
        setAllThemes({...allThemes, ...newThemeData});
        workingThemeSet(workingTheme);
    }

    return (
        <DashboardWrapper>
            <button 
				className="btn btn-print-cv"
				onClick={printHandle}>
				Print / Save PDF
			</button>
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