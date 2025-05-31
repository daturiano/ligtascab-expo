import { useTheme } from '@shopify/restyle';
import { StyleProp, StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Theme } from '../theme/theme';

type ThemedInputProps = {
  style?: StyleProp<TextInput>;
} & TextInputProps;

export default function ThemedInput({ style, ...props }: ThemedInputProps) {
  const theme = useTheme<Theme>();
  const { mainBackground, muted } = theme.colors;

  return (
    <TextInput
      style={[
        { borderColor: muted, backgroundColor: mainBackground, color: muted },
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
