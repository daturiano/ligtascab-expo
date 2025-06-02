import { createTheme } from '@shopify/restyle';
import { buttonVariants } from '../components/ui/button';

const palette = {
  yellowLight: '#fdca48',
  yellowPrimary: '#fcc419',
  yellowDark: '#dbaa14',

  greenLight: '#44b393',
  greenPrimary: '#1daa88',
  greenDark: '#189375',

  mutedLight: '#f1f3f5',
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
    mutedLight: palette.mutedLight,
    muted: palette.mutedPrimary,
    description: '#5e5e5e',
    transparent: 'transparent',
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 12,
    l: 16,
    xl: 24,
    xxl: 32,
  },
  borderRadii: {
    s: 4,
    m: 8,
    l: 12,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontFamily: 'Roboto_600SemiBold',
      fontSize: 42,
      lineHeight: 42,
    },
    subheader: {
      fontWeight: 'bold',
      fontFamily: 'Roboto_600SemiBold',
      fontSize: 28,
      lineHeight: 28,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    description: {
      color: 'description',
      fontSize: 14,
      lineHeight: 24,
    },
    defaults: {
      fontFamily: ' Nunito_300Light',
    },
  },
  buttonVariants: buttonVariants,
});

export type Theme = typeof theme;
export default theme;
