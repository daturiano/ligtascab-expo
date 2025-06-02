import { useRouter } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';
import Box from '~/src/components/ui/box';
import Text from '~/src/components/ui/text';
import { useAuth } from '~/src/hooks/use-auth';

export default function DriverPage() {
  const { signOutUser } = useAuth();
  const router = useRouter();
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Pressable onPress={() => router.push('/shift_logs')}>
        <Text>Go to shifts</Text>
      </Pressable>
      <Pressable onPress={signOutUser}>
        <Text>Logout</Text>
      </Pressable>
    </Box>
  );
}

const styles = StyleSheet.create({});
