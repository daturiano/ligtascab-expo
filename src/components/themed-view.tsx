import { useTheme } from '@shopify/restyle';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Theme } from '../theme/theme';

type ThemedViewProps = {
  style?: StyleProp<ViewStyle>;
  safe?: boolean;
} & ViewProps;

export default function ThemedView({ style, safe = false, ...props }: ThemedViewProps) {
  const theme = useTheme<Theme>();
  const { mainBackground } = theme.colors;
  const insets = useSafeAreaInsets();

  if (!safe) return <View style={[{ backgroundColor: mainBackground }, style]} {...props} />;

  return (
    <View
      style={[
        {
          backgroundColor: mainBackground,
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
