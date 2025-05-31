import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { Theme } from '../theme/theme';
import { useTheme } from '@shopify/restyle';

type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

type ThemedTextProps = {
  style?: StyleProp<TextStyle>;
  size?: FontSize;
} & TextProps;

export default function ThemedText({ style, size = 'sm', ...props }: ThemedTextProps) {
  const theme = useTheme<Theme>();
  const { mainBackground } = theme.colors;
  const styles = createFontSizeStyles(size);

  return <Text style={[{ color: mainBackground }, styles.size, style]} {...props} />;
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
