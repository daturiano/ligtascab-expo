import { useQuery } from '@tanstack/react-query';
import { View } from 'react-native';
import { fetchDriverDetails } from '../services/shifts';
import { Driver } from '../types';
import { formatDate } from '../utils/utils';
import Avatar from './ui/avatar';
import Box from './ui/box';
import Text from './ui/text';

type DriverDetailsProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

function DriverDetails({ title, description, children }: DriverDetailsProps) {
  return (
    <Box flexDirection="row" alignItems="center" gap="xs">
      <Text variant="description">{title}:</Text>
      <Text>{children ? children : description}</Text>
    </Box>
  );
}

export default function DriverDetailsCard() {
  const { data: driver } = useQuery<Driver | null>({
    queryKey: ['driver'],
    queryFn: async () => {
      const { data, error } = await fetchDriverDetails('0ad5bde5-5fb1-4523-8132-856c57af0b88');
      console.log(error);
      return data;
    },
    retry: true,
  });

  if (!driver) return null;

  return (
    <Box
      borderWidth={1}
      borderColor="mutedLighter"
      backgroundColor="grayLight"
      width={'100%'}
      justifyContent="center"
      borderRadius="m"
      gap="m"
      padding="l">
      <Text fontWeight={500}>Driver Details</Text>
      <Box flexDirection="row" alignItems="center" gap="m">
        <Avatar />
        <Box flexDirection="column">
          <DriverDetails title="Name" description={driver.first_name + ' ' + driver.last_name} />
          <DriverDetails title="Phone Number" description={driver.phone_number} />
          <DriverDetails title="Birthday">
            {formatDate(driver.birth_date.toLocaleString())}
          </DriverDetails>
        </Box>
      </Box>
      <View>
        <DriverDetails title="Address" description={driver.address} />
        <DriverDetails title="License Expiration">
          {formatDate(driver.license_expiration.toLocaleString())}
        </DriverDetails>
        <DriverDetails title="Emergency Name" description={driver.emergency_contact_name} />
        <DriverDetails title="Emergency Contact" description={driver.emergency_contact_number} />
      </View>
      <View>
        <DriverDetails title="Recent Attendance">
          {formatDate(driver.updated_at.toLocaleString())}
        </DriverDetails>
        <DriverDetails title="Last Used Tricycle" description="NGA 0061" />
      </View>
    </Box>
  );
}
