import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

export default function Logo() {
  return <Image style={styles.image} source={require('~/assets/logo.svg')} />;
}

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
});
