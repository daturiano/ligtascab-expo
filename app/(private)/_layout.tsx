import { useTheme } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Tabs } from 'expo-router';
import { CarFront, CircleUser, House, ScanQrCode, Users } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthenticatedViewOnly from '~/src/components/auth-wrapper/authenticated-view-only';
import HomeHeader from '~/src/components/home-header';
import { Theme } from '~/src/theme/theme';

const queryClient = new QueryClient();

export default function AuthenticatedLayout() {
  const theme = useTheme<Theme>();
  const { mainBackground, primary } = theme.colors;

  return (
    <QueryClientProvider client={queryClient}>
      <AuthenticatedViewOnly>
        <SafeAreaView
          edges={['top', 'left', 'right']}
          style={{ flex: 1, backgroundColor: mainBackground }}>
          <HomeHeader />
          <Tabs
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: primary,
              tabBarStyle: { backgroundColor: mainBackground },
              sceneStyle: { padding: 16 },
            }}>
            <Tabs.Screen
              name="home"
              options={{
                title: 'Home',
                tabBarIcon: ({ color, size, focused }) => (
                  <House color={color} size={size} strokeWidth={focused ? 2 : 1.5} />
                ),
              }}
            />
            <Tabs.Screen
              name="tricycles"
              options={{
                title: 'Tricycles',
                tabBarIcon: ({ color, size, focused }) => (
                  <CarFront color={color} size={size} strokeWidth={focused ? 2 : 1.5} />
                ),
              }}
            />
            <Tabs.Screen
              name="shifts"
              options={{
                title: 'Shifts',
                tabBarIcon: ({ color, size, focused }) => (
                  <ScanQrCode color={color} size={size} strokeWidth={focused ? 2 : 1.5} />
                ),
              }}
            />
            <Tabs.Screen
              name="drivers"
              options={{
                title: 'Drivers',
                tabBarIcon: ({ color, size, focused }) => (
                  <Users color={color} size={size} strokeWidth={focused ? 2 : 1.5} />
                ),
              }}
            />
            <Tabs.Screen
              name="profile"
              options={{
                title: 'Profile',
                tabBarIcon: ({ color, size, focused }) => (
                  <CircleUser color={color} size={size} strokeWidth={focused ? 2 : 1.5} />
                ),
              }}
            />
          </Tabs>
        </SafeAreaView>
      </AuthenticatedViewOnly>
    </QueryClientProvider>
  );
}
