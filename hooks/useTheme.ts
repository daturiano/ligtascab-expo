import { useColorScheme } from 'react-native';
import { Colors } from '~/constants/colors';

export function useTheme() {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? 'light'];
  const isDark = scheme === 'dark';

  return { theme, colorScheme: scheme ?? 'light', isDark };
}
