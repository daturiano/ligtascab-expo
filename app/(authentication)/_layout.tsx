import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AppState } from 'react-native';
import 'react-native-reanimated';
import GuestViewOnly from '~/src/components/auth-wrapper/guest-view-only';
import { useTheme } from '~/src/components/theme-provider';
import { supabase } from '~/src/services/supabase';
export { ErrorBoundary } from 'expo-router';

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function AuthLayout() {
  const { theme } = useTheme();
  return (
    <GuestViewOnly>
      <StatusBar />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="login"
          options={{
            headerTintColor: theme.primary,
            headerBackButtonDisplayMode: 'minimal',
            headerStyle: { backgroundColor: theme.background },
            headerShadowVisible: false,
            headerTitle: '',
          }}
        />
      </Stack>
    </GuestViewOnly>
  );
}
