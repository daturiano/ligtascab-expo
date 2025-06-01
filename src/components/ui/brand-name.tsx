import { StyleSheet } from 'react-native';
import Box from './box';
import Text from './text';

export default function BrandName() {
  return (
    <Box width="100%">
      <Text
        style={[styles.brandName, { fontFamily: 'Nunito_800ExtraBold' }]}
        fontSize={28}
        color="primary">
        ligtascab.
      </Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  brandName: {
    letterSpacing: -0.8,
  },
});
