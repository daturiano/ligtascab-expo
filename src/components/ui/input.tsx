import { useTheme } from '@shopify/restyle';
import { StyleProp, StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Theme } from '../../theme/theme';

type ThemedInputProps = {
  style?: StyleProp<TextInput>;
} & TextInputProps;

export default function Input({ style, ...props }: ThemedInputProps) {
  const theme = useTheme<Theme>();
  const { mainBackground, description, mutedLight } = theme.colors;

  return (
    <TextInput
      placeholderTextColor={description}
      style={[{ borderColor: mutedLight, backgroundColor: mainBackground }, styles.input, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
});
