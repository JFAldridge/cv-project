import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../utils/storage';

export const useTheme = () => {
    const  themes = getFromLS('all-themes');
    const [theme, setTheme] = useState(themes.data.navyAvi);

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
        const allThemes = getFromLS('all-themes');
        const localTheme = getFromLS('theme');
        localTheme ? setTheme(localTheme) : setMode(allThemes.data.navyAvi);
    }, []);

    return { theme, setMode, getFonts };
}