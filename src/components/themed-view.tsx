import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import { useTheme } from './theme-provider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ThemedViewProps = {
  style?: StyleProp<ViewStyle>;
  safe?: boolean;
} & ViewProps;

export default function ThemedView({ style, safe = false, ...props }: ThemedViewProps) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  if (!safe) return <View style={[{ backgroundColor: theme.background }, style]} {...props} />;

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingHorizontal: 32,
        },
        style,
      ]}
      {...props}
    />
  );
}
