import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import ThemedText from '~/src/components/themed-text';
import ThemedView from '~/src/components/themed-view';
import Logo from '~/src/components/ui/logo';
import { useTheme } from '../components/theme-provider';

export default function InitialScreen() {
  const { theme } = useTheme();
  return (
    <ThemedView safe style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brandName}>ligtascab.</Text>
      </View>
      <Logo variant="xl" />
      <View style={styles.textContainer}>
        <ThemedText style={styles.textSubtitle}>Welcome to LigtasCab!</ThemedText>
        <ThemedText style={styles.textTitle}>Safe and smart transportation.</ThemedText>
        <ThemedText style={styles.textDescription}>
          Systemizing your daily travel by combining convenience, comfort, and efficiency for a
          stress-free journey every time.
        </ThemedText>
      </View>
      <Link href="/login" style={[styles.link, { backgroundColor: theme.primary }]}>
        <Text style={{ color: theme.background }}>Get Started</Text>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
  },
  brandName: {
    fontSize: 26,
    color: '#1daa88',
    fontWeight: 'bold',
    letterSpacing: -0.4,
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 16,
  },
  textSubtitle: {
    fontWeight: 500,
  },
  textTitle: {
    fontWeight: 800,
    fontSize: 42,
    textAlign: 'center',
    lineHeight: 42,
  },
  textDescription: {
    textAlign: 'center',
  },
  link: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    textAlign: 'center',
  },
});
