import { StyleSheet, Text, View } from 'react-native';
import Box from './ui/box';
import Logo from './ui/logo';

export default function HomeHeader() {
  return (
    <Box backgroundColor="mainBackground" style={styles.headerContainer}>
      <View style={styles.logoContiner}>
        <Logo />
        <Text style={styles.brandName}>ligtascab.</Text>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContiner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  brandName: {
    fontSize: 26,
    color: '#1daa88',
    fontWeight: 'bold',
    letterSpacing: -0.4,
  },
});
