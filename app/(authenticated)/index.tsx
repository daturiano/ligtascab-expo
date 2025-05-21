import { StyleSheet } from 'react-native';
import ThemedText from '~/components/themed/themed-text';
import ThemedView from '~/components/themed/themed-view';

export default function HomePage() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>HomePage</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
