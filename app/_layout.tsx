import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { ThemeProvider } from '~/src/components/theme-provider';
import { AuthProvider } from '~/src/contexts/auth-context';
export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
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
