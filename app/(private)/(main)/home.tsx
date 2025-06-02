import { Pressable, StyleSheet } from 'react-native';
import Box from '~/src/components/ui/box';
import Text from '~/src/components/ui/text';
import { useAuth } from '~/src/hooks/use-auth';

export default function HomePage() {
  const { signOutUser } = useAuth();
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Pressable onPress={signOutUser}>
        <Text>Logout</Text>
      </Pressable>
    </Box>
  );
}
