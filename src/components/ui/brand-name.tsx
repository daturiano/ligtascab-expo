import { StyleSheet } from 'react-native';
import Box from './box';
import Text from './text';

export default function BrandName() {
  return (
    <Box width="100%">
      <Text style={styles.brandName} fontSize={28} color="primary">
        ligtascab.
      </Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  brandName: {
    fontWeight: 'bold',
    letterSpacing: -0.4,
  },
});
