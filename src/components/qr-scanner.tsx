/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import { BarcodeScanningResult, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { SwitchCamera } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Driver } from '../types';
import { fetchDriverDetails } from '../services/shifts';
import ThemedView from './themed-view';

export default function QRScanner() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [scanResult, setScanResult] = useState('');
  const [scanError, setScanError] = useState<string | null>(null);

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  const { data: driver } = useQuery<Driver | null>({
    queryKey: ['driver-details', scanResult],
    queryFn: async () => {
      if (!scanResult) return null;
      const { data, error } = await fetchDriverDetails(scanResult);
      if (error) {
        setScanError(error.message);
      }
      return data;
    },
    enabled: !!scanResult,
    retry: true,
  });

  if (!permission) {
    return <View />;
  }

  if (driver)
    return (
      <ThemedView>
        <Text>{driver.last_name}</Text>
      </ThemedView>
    );

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        onBarcodeScanned={(scanningResult: BarcodeScanningResult) => {
          if (!!scanningResult.data) {
            setScanResult(scanningResult.data);
          }
        }}
        barcodeScannerSettings={{
          barcodeTypes: ['qr'],
        }}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={toggleCameraFacing}>
            <SwitchCamera color={'#ffffff'} size={32} />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
