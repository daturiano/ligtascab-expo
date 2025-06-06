import { useQuery } from '@tanstack/react-query';
import { FlatList } from 'react-native';
import ShiftLogCard from '~/src/components/shift-log-card';
import ThemedLoader from '~/src/components/ui/spinner';
import Box from '~/src/components/ui/box';
import Text from '~/src/components/ui/text';
import { fetchAllShiftLogs } from '~/src/services/shifts';

export default function ShiftLogs() {
  const { data: shift_logs, isLoading } = useQuery({
    queryKey: ['sample_shift_logs'],
    queryFn: fetchAllShiftLogs,
  });

  return (
    <Box backgroundColor="mainBackground" padding="l" gap="l" flex={1}>
      <Text variant="subheader">Recent Logs</Text>
      {isLoading ? (
        <ThemedLoader />
      ) : (
        <Box maxHeight={'90%'}>
          <FlatList
            style={{ borderRadius: 12 }}
            data={shift_logs?.data}
            renderItem={({ item }) => <ShiftLogCard shift={item} />}
            keyExtractor={(item) => item.id}
          />
        </Box>
      )}
    </Box>
  );
}
