import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useTheme } from '~/hooks/use-theme';

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  const { theme } = useTheme();

  return (
    <>
      <StatusBar />
      <Stack
        screenOptions={{
          headerTintColor: theme.primary,
        }}>
        <Stack.Screen name="(authenticated)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
