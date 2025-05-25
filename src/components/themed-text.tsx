import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { useTheme } from './theme-provider';

type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

type ThemedTextProps = {
  style?: StyleProp<TextStyle>;
  size?: FontSize;
} & TextProps;

export default function ThemedText({ style, size = 'sm', ...props }: ThemedTextProps) {
  const { theme } = useTheme();
  const styles = createFontSizeStyles(size);

  return <Text style={[{ color: theme.text }, styles.size, style]} {...props} />;
}

const createFontSizeStyles = (size: FontSize = 'sm') => {
  const sizes: Record<FontSize, object> = {
    xs: {
      fontSize: 14,
    },
    sm: {
      fontSize: 16,
    },
    base: {
      fontSize: 24,
    },
    lg: {
      fontSize: 32,
    },
    xl: {
      fontSize: 46,
    },
  };

  return StyleSheet.create({
    size: { ...sizes[size] },
  });
};
