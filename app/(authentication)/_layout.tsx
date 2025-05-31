import { useTheme } from '@shopify/restyle';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AppState } from 'react-native';
import 'react-native-reanimated';
import GuestViewOnly from '~/src/components/auth-wrapper/guest-view-only';
import { supabase } from '~/src/services/supabase';
import { Theme } from '~/src/theme/theme';
export { ErrorBoundary } from 'expo-router';

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function AuthLayout() {
  const theme = useTheme<Theme>();
  const { mainBackground, primary } = theme.colors;
  return (
    <GuestViewOnly>
      <StatusBar />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="login"
          options={{
            headerTintColor: primary,
            headerBackButtonDisplayMode: 'minimal',
            headerStyle: { backgroundColor: mainBackground },
            headerShadowVisible: false,
            headerTitle: '',
          }}
        />
      </Stack>
    </GuestViewOnly>
  );
}
