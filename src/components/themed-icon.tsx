import { LucideIcon, LucideProps } from 'lucide-react-native';
import { StyleProp, ViewStyle } from 'react-native';
import { useTheme } from './theme-provider';

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
  const { theme } = useTheme();

  return <Icon size={size} color={color ?? theme.text} style={style} {...props} />;
}
