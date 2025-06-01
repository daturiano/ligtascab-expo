import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import QRScanner from '~/src/components/qr-scanner';
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

export default function ShiftPage() {
  const [isScanning, setIsScanning] = useState<boolean>(false);

  const isScanningHandler = () => {
    setIsScanning((prev) => !prev);
  };

  return (
    <View style={styles.container}>
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
          <Button onPress={isScanningHandler} variant={isScanning ? 'outline' : 'primary'}>
            <Text color={isScanning ? 'mainForeground' : 'mainBackground'} fontWeight={600}>
              {isScanning ? 'Cancel' : 'Start Log Attendance'}
            </Text>
          </Button>
        </CardFooter>
      </Card>
    </View>
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
