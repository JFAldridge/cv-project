import React, { useContext } from 'react';
import { getFromLS } from '../../../utils/storage';
import { useTheme } from '../../../theme/useTheme';
import styled, { ThemeContext } from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';

const ThemeMenu = styled(Dropdown.Menu)`
    background-color: rgba(30, 67, 86, 89%);
    min-width: 12rem;
`;

const ThemeOption = styled(Dropdown.Item)`
    &&.btn.dropdown-item {
        display: flex;
        align-items: center;
        width: auto;
        padding: 8px 8px;
        margin: 3;
        border: none;
        &.active {
        border: 2px solid #68A4C4;
        &:focus {
            box-shadow: none;
        }
    }
    }
`;

const ThemeIcon = styled.div`
    width: 30px;
    height: 30px;
    background: ${props => `linear-gradient( 90deg, ${props.accentBg}, ${props.accentBg} 50%, ${props.bg} 51% )`};
    box-shadow: 0 0 1px #eaeaea;
    border-radius: 50%;
    margin-right: 8px;
`;

function ThemeSelector({workingThemeSet}) {
    const themesFromStore = getFromLS('all-themes');
    const {setMode} = useTheme();
    const themeContext = useContext(ThemeContext);

    const setWorkingTheme = (theme) => {
        setMode(theme);
        workingThemeSet(theme);
    }

    return (
        <Dropdown autoClose="outside">
            <Dropdown.Toggle id="dropdown-basic" varient="outline-primary">
                Theme Options
            </Dropdown.Toggle>

            <ThemeMenu varient="dark">
                {
                    Object.values(themesFromStore.data).map(theme => {
                        return (
                            <ThemeOption
                                className="btn"
                                onClick={(workingTheme) => setWorkingTheme(theme)}
                                active={theme.id === themeContext.id}
                                key={theme.id}>
                                <ThemeIcon 
                                    bg={theme.bg}
                                    accentBg={theme.accentBg}
                                />
                                {theme.name}
                            </ThemeOption>
                        );
                    })
                }
            </ThemeMenu>
        </Dropdown>
    );
}

export default ThemeSelector;