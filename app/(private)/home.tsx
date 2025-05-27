import { StyleSheet } from 'react-native';
import ThemedView from '~/src/components/themed-view';

export default function HomePage() {
  return <ThemedView style={styles.container}></ThemedView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
