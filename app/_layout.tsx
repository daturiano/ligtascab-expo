import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { ThemeProvider } from '~/src/components/theme-provider';
export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <StatusBar />
      <Stack
        screenOptions={{
          headerTintColor: '#1daa88',
          headerShown: false,
        }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(private)" />
        <Stack.Screen name="(authentication)" />
      </Stack>
    </ThemeProvider>
  );
}
