import { StyleProp, StyleSheet, TextInput, TextInputProps } from 'react-native';
import { useTheme } from './theme-provider';

type ThemedInputProps = {
  style?: StyleProp<TextInput>;
} & TextInputProps;

export default function ThemedInput({ style, ...props }: ThemedInputProps) {
  const { theme } = useTheme();

  return (
    <TextInput
      style={[
        { borderColor: theme.input, backgroundColor: theme.background, color: theme.muted },
        styles.input,
        style,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
});
