import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../utils/storage';

export const useTheme = () => {
    const  themes = getFromLS('all-themes');
    const [theme, setTheme] = useState(themes.data.navyAvi);
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = mode => {
        setToLS('theme', mode);
        setTheme(mode);
    }

    const getFonts = () => {
        const allFonts = Object.entries(themes.data).map(([_themeName, themeData]) => Object.values(themeData.fonts)).flat()
        const allUniqueFonts = allFonts.filter((v, i, a) => a.indexOf(v) === i);
        return allUniqueFonts;
    }

    useEffect(() => {
        const localTheme = getFromLS('theme');
        localtheme? setTheme(localTheme) : setTheme(themes.data.navyAvi);
        setThemeLoaded(true);
    }, []);

    return { theme, themeLoaded, setMode, getFonts };
}