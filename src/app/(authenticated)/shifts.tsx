import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import ThemedView from '~/src/components/themed-view';
import { Button } from '~/src/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/src/components/ui/card';

export default function ShiftPage() {
  return (
    <ThemedView style={styles.container}>
      <Card>
        <CardHeader>
          <CardTitle>Log Driver Attendance</CardTitle>
          <CardDescription>
            &quot;Start Log Attendance&quot; to start scanning QR Code.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image style={styles.image} source={require('~/assets/scan-dark.png')} />
        </CardContent>
        <CardFooter>
          <Button title="Start Log Attendance" />
        </CardFooter>
      </Card>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 240,
    height: 240,
  },
});
