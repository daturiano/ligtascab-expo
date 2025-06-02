import { useTheme } from '@shopify/restyle';
import { Tabs } from 'expo-router';
import { CarFront, CircleUser, House, ScanQrCode, Users } from 'lucide-react-native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeHeader from '~/src/components/home-header';
import { Theme } from '~/src/theme/theme';

export default function AuthenticatedLayout() {
  const theme = useTheme<Theme>();
  const { mainBackground, primary } = theme.colors;
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        flex: 1,
        backgroundColor: mainBackground,
      }}>
      <HomeHeader />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: primary,
          tabBarStyle: { backgroundColor: mainBackground },
          sceneStyle: { padding: 16, backgroundColor: mainBackground },
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
    </View>
  );
}
