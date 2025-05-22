import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import { useTheme } from './theme-provider';

type ThemedViewProps = {
  style?: StyleProp<ViewStyle>;
  safe?: boolean;
} & ViewProps;

export default function ThemedView({ style, safe = false, ...props }: ThemedViewProps) {
  const { theme } = useTheme();
  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
        },
        style,
      ]}
      {...props}
    />
  );
}
