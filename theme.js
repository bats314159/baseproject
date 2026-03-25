// theme.js

const themes = {
    light: {
        background: '#ffffff',
        color: '#000000'
    },
    dark: {
        background: '#000000',
        color: '#ffffff'
    }
};

export const setTheme = (theme) => {
    if (!themes[theme]) {
        console.error('Theme not found!');
        return;
    }
    const root = document.documentElement;
    root.style.setProperty('--background-color', themes[theme].background);
    root.style.setProperty('--text-color', themes[theme].color);
};

export const getCurrentTheme = () => {
    return themes;
};