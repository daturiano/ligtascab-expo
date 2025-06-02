import { useTheme } from '@shopify/restyle';
import { ArrowRight, CarFront } from 'lucide-react-native';
import React from 'react';
import { Theme } from '../theme/theme';
import { formatDate } from '../utils/utils';
import Avatar from './ui/avatar';
import Box from './ui/box';
import Text from './ui/text';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

type TricycleDetailsProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

function TricycleDetails({ title, description, children }: TricycleDetailsProps) {
  return (
    <Box flexDirection="row" alignItems="center" gap="xs">
      <Text variant="description">{title}:</Text>
      <Text>{children ? children : description}</Text>
    </Box>
  );
}

type AvailableTricycleCardProps = {
  tricycle: { plate_number: string; registration_expiration: Date };
};

export default function AvailableTricycleCard({ tricycle }: AvailableTricycleCardProps) {
  const theme = useTheme<Theme>();
  const { primary } = theme.colors;
  const router = useRouter();
  return (
    <Box
      width={'100%'}
      alignItems="center"
      flexDirection="row"
      backgroundColor="grayLighter"
      padding="m"
      gap="m">
      <Avatar>
        <CarFront size={32} />
      </Avatar>
      <Box flex={1}>
        <TricycleDetails title="Plate Number" description={tricycle.plate_number} />
        <TricycleDetails title="Register Expiration">
          {formatDate(tricycle.registration_expiration.toLocaleString())}
        </TricycleDetails>
      </Box>
      <TouchableOpacity
        onPress={() => {
          router.setParams({ plate_number: tricycle.plate_number });
          router.back();
        }}>
        <ArrowRight color={primary} size={24} />
      </TouchableOpacity>
    </Box>
  );
}
