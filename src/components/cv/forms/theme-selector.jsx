import React from 'react';
import { getFromLS } from '../../../utils/storage';
import { useTheme } from '../../../theme/useTheme';
import styled from 'styled-components';

const ThemeBtn = styled.button`
`;

const ThemeIcon = styled.div`
    width: 30px;
    height: 30px;
    background: ${props => `linear-gradient( 90deg, ${props.accentBg}, ${props.accentBg} 50%, ${props.bg} 51% )`};
    border: 2px solid rgb(102, 102, 102); 
    border-radius: 50%;
`;

function ThemeSelector({selectedThemeSet}) {
    const themesFromStore = getFromLS('all-themes');
    const {setMode} = useTheme();

    const setSelectedTheme = (theme) => {
        setMode(theme);
        selectedThemeSet(theme);
    }

    return (
        Object.values(themesFromStore.data).map(theme => {
            return (
                <ThemeBtn 
                    className="btn btn-dark me-3"
                    onClick={(selectedTheme) => setSelectedTheme(theme)}
                    key={theme.id}>
                    <ThemeIcon 
                        bg={theme.colors.bg}
                        accentBg={theme.colors.accent.bg}
                    />
                    {theme.name}
                </ThemeBtn>
            );
        })
    );
}

export default ThemeSelector;