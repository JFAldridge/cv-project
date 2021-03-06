import React, { useContext } from 'react';
import { useTheme } from '../../../theme/useTheme';
import styled, { ThemeContext } from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';

const ThemeMenu = styled(Dropdown.Menu)`
    background-color: rgba(30, 67, 86, 89%);
    min-width: 12rem;
    transform: translate3d(4px, 65px, 0px)!important;
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

const DeleteIcon = styled.i`
    margin-left: 18px;
    font-size: 1.5em;
    transition: 0.5s;
    &:hover {
       color: #1e4356; 
    }
`;


function ThemeSelector({workingThemeSet, allThemes, themeDelete}) {
    const {setMode} = useTheme();
    const themeContext = useContext(ThemeContext);

    const setWorkingTheme = (chosenTheme) => {
        setMode(chosenTheme);
        // Give working theme default name
        workingThemeSet({...chosenTheme, ...{name: 'New Theme'}});
    }

    return (
        <Dropdown autoClose="outside">
            <Dropdown.Toggle id="dropdown-basic" varient="outline-primary">
                Select Theme
            </Dropdown.Toggle>

            <ThemeMenu varient="dark">
                {
                    Object.values(allThemes).map((theme, i) => {
                        return (
                            <ThemeOption
                                className="btn"
                                onClick={() => setWorkingTheme(theme)}
                                active={theme.id === themeContext.id}
                                key={theme.id}>
                                <ThemeIcon 
                                    bg={theme.bg}
                                    accentBg={theme.accentBg}
                                />
                                {theme.name}
                                {i > 2 &&
                                    <DeleteIcon 
                                        className="bi bi-x-square close-input-group"
                                        onClick={() => themeDelete(theme.name)}
                                    ></DeleteIcon>}
                            </ThemeOption>
                        );
                    })
                }
            </ThemeMenu>
        </Dropdown>
    );
}

export default ThemeSelector;