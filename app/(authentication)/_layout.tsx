import { useTheme } from '@shopify/restyle';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ArrowLeft } from 'lucide-react-native';
import { AppState, Platform, TouchableOpacity } from 'react-native';
import GuestViewOnly from '~/src/components/auth-wrapper/guest-view-only';
import Button from '~/src/components/ui/button';
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
  const router = useRouter();
  return (
    <GuestViewOnly>
      <StatusBar />
      <Stack
        screenOptions={{
          headerTintColor: primary,
          headerStyle: { backgroundColor: mainBackground },
          headerShadowVisible: false,
          headerTitle: '',
        }}>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            animation: Platform.OS === 'ios' ? 'ios_from_left' : 'slide_from_left',
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.push('/')}>
                <ArrowLeft style={{ paddingHorizontal: theme.spacing.l }} />
              </TouchableOpacity>
            ),
            animation: Platform.OS === 'ios' ? 'ios_from_right' : 'slide_from_right',
          }}
        />
      </Stack>
    </GuestViewOnly>
  );
}
