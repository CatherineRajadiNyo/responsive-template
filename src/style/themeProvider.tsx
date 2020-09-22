import React, { FC, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles/';
import { lightTheme, darkTheme } from './theme';

const getThemeByName = (theme: string) => themeMap[theme];

const themeMap: { [key: string]: any } = {
  lightTheme,
  darkTheme,
};

export const ThemeContext = createContext({ themeName: getThemeByName('lightTheme'), setThemeName: (p: string) => {} });

const ThemeProvider1: FC = ({ children }) => {
  const [themeName, setThemeName] = useState('lightTheme');
  const theme = getThemeByName(themeName);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider1.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeProvider1;
