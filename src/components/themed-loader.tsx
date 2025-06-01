import { ActivityIndicator } from 'react-native';
import ThemedView from './container';
import { Theme } from '../theme/theme';
import { useTheme } from '@shopify/restyle';

export default function ThemedLoader() {
  const theme = useTheme<Theme>();
  const { primary } = theme.colors;
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color={primary} />
    </ThemedView>
  );
}
