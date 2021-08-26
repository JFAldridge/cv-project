import React, { useState, useContext } from 'react';
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