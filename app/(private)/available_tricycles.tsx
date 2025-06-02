import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator, FlatList } from 'react-native';
import AvailableTricycleCard from '~/src/components/available-tricycle-card';
import Box from '~/src/components/ui/box';
import Text from '~/src/components/ui/text';
import { fetchAllAvailableTricycles } from '~/src/services/shifts';

export default function AvailableTricycles() {
  const { data: availableTricycles, isLoading } = useQuery({
    queryKey: ['available_tricycles'],
    queryFn: fetchAllAvailableTricycles,
  });

  return (
    <Box backgroundColor="mainBackground" padding="l" gap="l">
      <Text variant="subheader">Available Tricycles</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Box maxHeight={'90%'}>
          <FlatList
            style={{ borderRadius: 12 }}
            data={availableTricycles?.data}
            renderItem={({ item }) => <AvailableTricycleCard tricycle={item} />}
            keyExtractor={(item) => item.plate_number}
          />
        </Box>
      )}
    </Box>
  );
}
