import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import QRScanner from '~/src/components/qr-scanner';
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
  const [isScanning, setIsScanning] = useState<boolean>(false);

  const isScanningHandler = () => {
    setIsScanning((prev) => !prev);
  };
  return (
    <ThemedView style={styles.container}>
      <Card>
        <CardHeader>
          <CardTitle>Log Driver Attendance</CardTitle>
          <CardDescription>
            {isScanning
              ? 'Log driver using the QR Code and required details.'
              : '"Start Log Attendance" to start scanning QR Code.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isScanning ? (
            <QRScanner />
          ) : (
            <Image style={styles.image} source={require('~/src/assets/qr.png')} />
          )}
        </CardContent>
        <CardFooter>
          <Button
            title={isScanning ? 'Cancel' : 'Start Log Attendance'}
            onPress={isScanningHandler}
            variant={isScanning ? 'secondary' : 'primary'}
          />
        </CardFooter>
      </Card>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  image: {
    width: 280,
    height: 280,
  },
});
