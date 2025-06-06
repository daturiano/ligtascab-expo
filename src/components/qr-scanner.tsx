import { useQuery } from '@tanstack/react-query';
import { BarcodeScanningResult, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { SwitchCamera } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { fetchDriverDetails } from '../services/shifts';
import { Driver } from '../types';

type QRScannerProps = {
  setDriver: (driver: Driver) => void;
};

export default function QRScanner({ setDriver }: QRScannerProps) {
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

  useEffect(() => {
    if (driver) {
      setDriver(driver);
    }
  }, [driver, setDriver]);

  if (!permission) {
    return <View />;
  }

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
        }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleCameraFacing}>
          <SwitchCamera color={'#ffffff'} size={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '75%',
    justifyContent: 'center',
    borderWidth: 8,
    borderColor: '#ffffff',
    overflow: 'hidden',
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
