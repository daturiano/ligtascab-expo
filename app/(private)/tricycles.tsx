import { StyleSheet } from 'react-native';
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

export default function TricyclePage() {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Card>
        <CardHeader>
          <CardTitle>Log Driver Attendance</CardTitle>
          <CardDescription>Start Log Attendance to start scanning QR Code.</CardDescription>
        </CardHeader>
        <CardContent>
          <DriverDetailsCard />
        </CardContent>
        <Button>
          <Text>Continue</Text>
        </Button>
      </Card>
    </Box>
  );
}
