

import React from 'react';

export const themes = {
  light: {
    background: '#ffffff',
    foreground: '#000000',
  },
  dark: {
    background: '#000000',
    foreground: '#ffffff',
  },
};

export const ThemeContext = React.createContext(themes.light);



