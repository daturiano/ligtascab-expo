import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import { useTheme } from './theme-provider';

type ThemedTextProps = {
  style?: StyleProp<TextStyle>;
} & TextProps;

export default function ThemedText({ style, ...props }: ThemedTextProps) {
  const { theme } = useTheme();

  return <Text style={[{ color: theme.text }, style]} {...props} />;
}
