export const setToLS = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export const getFromLS = key => {
    const value = window.localStorage.getItem(key);

    if (value) {
        return JSON.parse(value);
    }
}

export const removeFromLS = (key) => {
    window.localStorage.removeItem(key);
}

export const existsInLS = key => {
    const value = window.localStorage.getItem(key);
    return !!value;
}