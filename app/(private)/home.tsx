import { Pressable, StyleSheet } from 'react-native';
import ThemedView from '~/src/components/themed-view';
import Text from '~/src/components/ui/text';
import { useAuth } from '~/src/hooks/use-auth';

export default function HomePage() {
  const { signOutUser } = useAuth();
  return (
    <ThemedView style={styles.container}>
      <Pressable onPress={signOutUser}>
        <Text>Logout</Text>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
