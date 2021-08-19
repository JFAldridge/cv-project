import React from 'react';
import { getFromLS } from '../../../utils/storage';
import { useTheme } from '../../../theme/useTheme';

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
                <button 
                    className="btn btn-dark me-3"
                    onClick={(selectedTheme) => setSelectedTheme(theme)}
                    key={theme.id}>
                    {theme.name}
                </button>
            );
        })
    );
}

export default ThemeSelector;