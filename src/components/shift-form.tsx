import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod/v4';
import DriverDetailsCard from '~/src/components/driver-details-card';
import Box from '~/src/components/ui/box';
import Button from '~/src/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/src/components/ui/card';
import Text from '~/src/components/ui/text';
import { ShiftSchema } from '../schemas/shifts';
import { createShiftLog } from '../services/shifts';
import { Driver } from '../types';
import { ArrowLeft, ArrowRight } from 'lucide-react-native';

type ShiftFormProps = {
  driver: Driver;
  reset: () => void;
};

export default function ShiftForm({ driver, reset }: ShiftFormProps) {
  const [isPending, startTransition] = useTransition();
  const [plateNumber, setPlateNumber] = useState('');
  const [logSuccessfully, setLogSuccessfully] = useState(false);

  const { plate_number } = useGlobalSearchParams<{ plate_number: string }>();
  const router = useRouter();

  const { handleSubmit, setValue } = useForm<z.infer<typeof ShiftSchema>>({
    defaultValues: {
      driver_name: `${driver.first_name} ${driver.last_name}`,
      plate_number: '',
      shift_type: 'Time-in',
      driver_id: driver.id,
    },
  });

  useEffect(() => {
    if (plate_number) {
      setValue('plate_number', plate_number);
      setPlateNumber(plate_number);
    }
  }, [plate_number, setValue]);

  const queryClient = useQueryClient();
  const useCreateShiftLog = useMutation({
    mutationFn: createShiftLog,
  });

  const onSubmit = async (logData: z.infer<typeof ShiftSchema>) => {
    startTransition(() => {
      useCreateShiftLog.mutate(logData, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['sample_shift_logs'],
          });
          setLogSuccessfully(true);
        },
      });
    });
  };

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Card>
        <CardHeader>
          <CardTitle>Log Driver Attendance</CardTitle>
          <CardDescription>Please fill out neccessary attendance information.</CardDescription>
        </CardHeader>
        <CardContent style={{ gap: 24 }}>
          {logSuccessfully && (
            <Text color="primary" fontSize={18}>
              Log Successfully!
            </Text>
          )}
          <DriverDetailsCard />
          <Box flexDirection="row" maxWidth={'100%'} gap="m" justifyContent="space-between">
            <Box gap="s" flex={1}>
              <Text fontSize={14}>Select Available Tricycle</Text>
              <Button
                variant="input"
                onPress={() => router.push('/available_tricycles')}
                disabled={logSuccessfully}>
                <Box flexDirection="row" alignItems="center" gap="s">
                  <Text color="muted">{!plateNumber ? 'Select Tricycle' : plateNumber}</Text>
                  <ArrowRight color={'#737373'} size={18} />
                </Box>
              </Button>
            </Box>
          </Box>
        </CardContent>
        <CardFooter>
          {!logSuccessfully ? (
            <Button onPress={handleSubmit(onSubmit)}>
              <Text color="mainBackground">{isPending ? 'Submitting' : 'Log Attendance'}</Text>
            </Button>
          ) : (
            <Button
              variant="outline"
              onPress={() => {
                reset();
              }}>
              <Text>Close</Text>
            </Button>
          )}
        </CardFooter>
      </Card>
    </Box>
  );
}
