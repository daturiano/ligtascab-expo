import { ActivityIndicator } from 'react-native';
import { useTheme } from './theme-provider';
import ThemedView from './themed-view';

export default function ThemedLoader() {
  const { theme } = useTheme();
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color={theme.primary} />
    </ThemedView>
  );
}
