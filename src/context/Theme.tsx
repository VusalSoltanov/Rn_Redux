import React, {createContext, useState, ReactNode} from 'react';

interface Theme {
  backgroundColor: string;
  textColor: string;
}

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: Theme;
}

export const Theme = createContext<ThemeContextProps>({
  isDarkMode: false,
  toggleTheme: () => {},
  theme: {backgroundColor: '', textColor: ''},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const lightTheme: Theme = {
    backgroundColor: '#f5eded',
    textColor: '#0a0808',
  };

  const darkTheme: Theme = {
    backgroundColor: '#0a0808',
    textColor: '#f5eded',
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <Theme.Provider value={{isDarkMode, toggleTheme, theme}}>
      {children}
    </Theme.Provider>
  );
};