export const Colors = {
  light: {
    primary: '#1daa88',
    secondary: '#f1f3f5',
    text: '#000000',
    background: '#f7f5f2',
    bgForeground: '#0a0a0a',
    input: '#adb5bd',
    card: '#ffffff',
    muted: '#737373',
  },
  dark: {
    primary: '#1daa88',
    secondary: '#f1f3f5',
    text: '#ffffff',
    background: '#0a0a0a',
    bgForeground: '#f7f5f2',
    input: '#adb5bd',
    card: '#171717',
    muted: '#737373',
  },
};

export type Theme = typeof Colors.light | typeof Colors.dark;
