import React from 'react';
import ThemeSelector from './theme-selector';
import styled from 'styled-components';
import CreateTheme from './create-theme';

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
    return (
        <DashboardWrapper>
            <button 
				className="btn btn-print-cv"
				onClick={printHandle}>
				Print / Save PDF
			</button>
			<ThemeSelector 
                workingThemeSet={workingThemeSet} 
            />
            <CreateTheme 
                themeChangeHandle={themeChangeHandle}
            />
        </DashboardWrapper>
    );
}

export default Dashboard;