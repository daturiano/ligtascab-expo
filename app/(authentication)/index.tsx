import { useTheme } from '@shopify/restyle';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Box from '~/src/components/ui/box';
import BrandName from '~/src/components/ui/brand-name';
import Text from '~/src/components/ui/text';
import { Theme } from '~/src/theme/theme';

export default function Index() {
  const theme = useTheme<Theme>();
  const { primary, mainBackground, muted } = theme.colors;
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="xl"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <BrandName />
      <Image style={styles.image} source={require('~/src/assets/welcome.svg')} />
      <Box flexDirection="column" gap="m" alignItems="center">
        <Text variant="body">Welcome to LigtasCab!</Text>
        <Text variant="header" style={{ textAlign: 'center' }}>
          Safe and smart transportation.
        </Text>
        <Text variant="body" style={{ textAlign: 'center' }}>
          Systemizing your daily travel by combining convenience, comfort, and efficiency for a
          stress-free journey every time.
        </Text>
      </Box>
      <Box width={'100%'} gap="s">
        <Pressable
          onPress={() => router.push('/login')}
          style={({ pressed }) => [
            styles.link,
            pressed && styles.pressed,
            { backgroundColor: primary },
          ]}>
          <Text variant="body" style={{ color: mainBackground }}>
            Get Started
          </Text>
        </Pressable>
        <Pressable
          onPress={() => router.push('/login')}
          style={({ pressed }) => [
            styles.link,
            pressed && styles.pressed,
            { borderColor: muted, borderWidth: 1 },
          ]}>
          <Text variant="body">I already have an account</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  link: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    textAlign: 'center',
  },
  image: {
    width: 304,
    height: 239,
  },
  pressed: {
    opacity: 0.5,
  },
});
