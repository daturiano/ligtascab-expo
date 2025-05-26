import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';
import ThemedView from '~/src/components/themed-view';
import { useAuth } from '~/src/hooks/use-auth';

export default function HomePage() {
  const { signOutUser } = useAuth();
  return (
    <ThemedView style={styles.container}>
      <Pressable onPress={signOutUser}>
        <Text>Sign Out</Text>
      </Pressable>
      <Link href="/">
        <Text>Go to</Text>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
