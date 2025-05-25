import { Link, useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '~/src/components/theme-provider';
import ThemedText from '~/src/components/themed-text';
import ThemedView from '~/src/components/themed-view';
import Logo from '~/src/components/ui/logo';

export default function Home() {
  const { theme } = useTheme();
  const router = useRouter();

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
      <View style={styles.buttonContainer}>
        <Link href="/login" style={[styles.link, { backgroundColor: theme.primary }]}>
          <ThemedText style={{ color: '#ffffff' }} size="xs">
            Get Started
          </ThemedText>
        </Link>
      </View>
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
  buttonContainer: {
    width: '100%',
    gap: 8,
  },
  link: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    textAlign: 'center',
  },
});
