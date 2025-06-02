import { useTheme } from '@shopify/restyle';
import { ReceiptText } from 'lucide-react-native';
import React from 'react';
import { Theme } from '../theme/theme';
import { ShiftLog } from '../types';
import { formatDateTime } from '../utils/utils';
import Avatar from './ui/avatar';
import Box from './ui/box';
import Text from './ui/text';

type LogDetailsProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

function LogDetails({ title, description, children }: LogDetailsProps) {
  return (
    <Box flexDirection="row" alignItems="center" gap="xs">
      <Text variant="description">{title}:</Text>
      <Text>{children ? children : description}</Text>
    </Box>
  );
}

type ShiftLogCardProps = {
  shift: ShiftLog;
};

export default function ShiftLogCard({ shift }: ShiftLogCardProps) {
  const theme = useTheme<Theme>();
  const { primary } = theme.colors;
  return (
    <Box
      width={'100%'}
      alignItems="center"
      flexDirection="row"
      backgroundColor="grayLighter"
      padding="m"
      gap="m">
      <Avatar>
        <ReceiptText size={32} color={primary} />
      </Avatar>
      <Box flex={1}>
        <LogDetails title="Driver Name" description={shift.driver_name} />
        <LogDetails title="Tricycle Used" description={shift.plate_number} />
        <LogDetails title="Date & Time">
          {formatDateTime(shift.created_at!.toLocaleString())}
        </LogDetails>
      </Box>
    </Box>
  );
}
