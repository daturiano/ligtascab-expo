import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import 'react-native-reanimated';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  return (
    <>
      <StatusBar />
      <Stack>
        <Stack.Screen name="(authenticated)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
