import { useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import ThemedInput from '~/src/components/themed-input';
import ThemedText from '~/src/components/themed-text';
import ThemedView from '~/src/components/themed-view';
import { Button } from '~/src/components/ui/button';
import { useAuth } from '~/src/hooks/use-auth';

export default function Login() {
  const { signInWithPhoneNumber } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView safe style={styles.container}>
        <ThemedText size="base" style={styles.text}>
          Log in to ligtascab.
        </ThemedText>
        <ThemedText size="xs">Enter your existing account details below</ThemedText>
        <View style={styles.signInContainer}>
          <ThemedInput
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            keyboardType="number-pad"
            autoCapitalize={'none'}
          />
          <ThemedInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            autoCapitalize={'none'}
          />
        </View>
        <Button title="Sign In" onPress={() => signInWithPhoneNumber(phoneNumber, password)} />
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  text: {
    fontWeight: 600,
  },
  signInContainer: {
    gap: 14,
  },
});
