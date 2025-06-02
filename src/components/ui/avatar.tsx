import { useTheme } from '@shopify/restyle';
import { CircleUser } from 'lucide-react-native';
import { Theme } from '~/src/theme/theme';
import Box from './box';

export default function Avatar() {
  const theme = useTheme<Theme>();
  const { mainForeground } = theme.colors;
  return (
    <Box
      width={68}
      height={68}
      backgroundColor="mutedLight"
      borderRadius="m"
      alignItems="center"
      justifyContent="center">
      <CircleUser size={32} color={mainForeground} />
    </Box>
  );
}
