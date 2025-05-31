import { useTheme } from '@shopify/restyle';
import { LucideIcon, LucideProps } from 'lucide-react-native';
import { StyleProp, ViewStyle } from 'react-native';
import { Theme } from '../theme/theme';

type ThemedIconProps = {
  icon: LucideIcon;
  size?: number;
  style?: StyleProp<ViewStyle>;
} & Partial<LucideProps>;

export default function ThemedIcon({
  icon: Icon,
  size = 24,
  style,
  color,
  ...props
}: ThemedIconProps) {
  const theme = useTheme<Theme>();
  const { mainBackground } = theme.colors;

  return <Icon size={size} color={color ?? mainBackground} style={style} {...props} />;
}
