import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

type Variant = 'small' | 'base' | 'large' | 'xl';

type LogoProps = {
  variant?: Variant;
};

export default function Logo({ variant = 'small' }: LogoProps) {
  const styles = createLogoStyles(variant);
  return <Image style={styles.size} source={require('~/assets/logo.svg')} />;
}

const createLogoStyles = (variant: Variant = 'small') => {
  const variants: Record<Variant, object> = {
    small: {
      height: 24,
      width: 24,
    },
    base: {
      height: 36,
      width: 36,
    },
    large: {
      height: 54,
      width: 54,
    },
    xl: {
      height: 72,
      width: 72,
    },
  };

  return StyleSheet.create({
    size: { ...variants[variant] },
  });
};
