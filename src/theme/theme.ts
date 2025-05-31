import { createTheme } from '@shopify/restyle';

const palette = {
  yellowLight: '#fdca48',
  yellowPrimary: '#fcc419',
  yellowDark: '#dbaa14',

  greenLight: '#44b393',
  greenPrimary: '#1daa88',
  greenDark: '#189375',

  mutedLight: '#808080',
  mutedPrimary: '#737373',
  mutedDark: '#636363',

  black: '#0a0a0a',
  white: '#f7f5f2',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,
    cardBackground: '#ffffff',
    cardForeground: '#000000',
    primary: palette.greenPrimary,
    secondary: palette.yellowPrimary,
    muted: palette.mutedPrimary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export type Theme = typeof theme;
export default theme;
