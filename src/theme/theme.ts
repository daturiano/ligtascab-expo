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

  description: '#5e5e5e',

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
    description: '#5e5e5e',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
  },
  border: {},
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontFamily: 'Roboto_600SemiBold',
      fontSize: 42,
      lineHeight: 42,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    description: {
      color: 'description',
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      fontFamily: ' Nunito_300Light',
    },
  },
  buttonVariants: {
    primary: {
      backgroundColor: 'primary',
      padding: 'm',
      borderRadius: 'm',
    },
    secondary: {
      backgroundColor: 'secondary',
      padding: 'm',
      borderRadius: 'm',
    },
    disabled: {
      backgroundColor: 'gray',
      padding: 'm',
      borderRadius: 'm',
    },
  },
});

export type Theme = typeof theme;
export default theme;
