import { Tabs } from 'expo-router';
import { CarFront, CircleUser, House, ScanQrCode, Users } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthenticatedViewOnly from '~/src/components/auth-wrapper/authenticated-view-only';
import HomeHeader from '~/src/components/home-header';
import { useTheme } from '~/src/components/theme-provider';

export default function AuthenticatedLayout() {
  const { theme } = useTheme();

  return (
    <AuthenticatedViewOnly>
      <SafeAreaView
        edges={['top', 'left', 'right']}
        style={{ flex: 1, backgroundColor: theme.background }}>
        <HomeHeader />
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.primary,
            tabBarStyle: { backgroundColor: theme.background },
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
  );
}
