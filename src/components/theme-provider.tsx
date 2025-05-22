import React, { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';
import { Colors } from '~/src/theme/colors';

const ThemeContext = createContext<ReturnType<typeof useThemeInternal> | null>(null);

function useThemeInternal() {
  const colorScheme = useColorScheme();
  const scheme = colorScheme ?? 'light';
  const theme = Colors[scheme];

  return {
    theme,
    colorScheme: scheme,
    isDark: scheme === 'dark',
  };
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useThemeInternal();
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
