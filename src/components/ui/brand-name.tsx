import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Text from './text';

type BrandNameProps = {
  style?: StyleProp<ViewStyle>;
};

export default function BrandName({ style }: BrandNameProps) {
  return (
    <View style={[{ width: '100%' }, style]}>
      <Text
        style={[styles.brandName, { fontFamily: 'Nunito_800ExtraBold' }]}
        fontSize={28}
        color="primary">
        ligtascab.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  brandName: {
    letterSpacing: -1.8,
  },
});
