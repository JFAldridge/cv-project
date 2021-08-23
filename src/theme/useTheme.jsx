import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../utils/storage';

export const useTheme = () => {
    const  themes = getFromLS('all-themes');
    const [theme, setTheme] = useState(themes.data.navyAvi);
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = (mode) => {
        setToLS('theme', mode);
        setTheme(mode);
    }

    const getFonts = () => {
        const allFonts = getFromLS('all-fonts');
        const googleFonts = allFonts.data.google;
        return googleFonts;
    }

    useEffect(() => {
        const localTheme = getFromLS('theme');
        localTheme ? setTheme(localTheme) : setMode(themes.data.navyAvi);
        setThemeLoaded(true);
    }, []);

    return { theme, themeLoaded, setMode, getFonts };
}