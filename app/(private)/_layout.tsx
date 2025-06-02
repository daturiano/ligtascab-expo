import { useTheme } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import AuthenticatedViewOnly from '~/src/components/auth-wrapper/authenticated-view-only';
import { Theme } from '~/src/theme/theme';

const queryClient = new QueryClient();

export default function InsideLayout() {
  const theme = useTheme<Theme>();
  const { primary, mainBackground } = theme.colors;
  return (
    <AuthenticatedViewOnly>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="(main)" options={{ headerShown: false }} />
          <Stack.Screen
            name="available_tricycles"
            options={{
              headerBackButtonDisplayMode: 'minimal',
              headerTintColor: primary,
              headerShadowVisible: false,
              headerStyle: { backgroundColor: mainBackground },
              title: '',
            }}
          />
        </Stack>
      </QueryClientProvider>
    </AuthenticatedViewOnly>
  );
}
