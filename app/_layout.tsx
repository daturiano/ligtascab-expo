import { ThemeProvider } from '@shopify/restyle';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { AuthProvider } from '~/src/contexts/auth-context';
import theme from '~/src/theme/theme';
export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <StatusBar />
        <Stack
          screenOptions={{
            headerTintColor: '#1daa88',
            headerShown: false,
          }}>
          <Stack.Screen name="(private)" />
          <Stack.Screen name="(authentication)" />
        </Stack>
      </ThemeProvider>
    </AuthProvider>
  );
}
