export const Colors = {
  light: {
    primary: '#1daa88',
    text: '#000000',
    background: '#f7f5f2',
    card: '#ffffff',
    muted: '#737373',
  },
  dark: {
    primary: '#1daa88',
    text: '#ffffff',
    background: '#0a0a0a',
    card: '#171717',
    muted: '#737373',
  },
};

export type Theme = typeof Colors.light | typeof Colors.dark;
