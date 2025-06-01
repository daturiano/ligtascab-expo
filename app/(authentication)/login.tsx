import { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Container from '~/src/components/container';
import Box from '~/src/components/ui/box';
import BrandName from '~/src/components/ui/brand-name';
import Button from '~/src/components/ui/button';
import Input from '~/src/components/ui/input';
import Text from '~/src/components/ui/text';
import { useAuth } from '~/src/hooks/use-auth';

export default function Login() {
  const { signInWithPhoneNumber } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container style={{ justifyContent: 'center', alignItems: 'flex-start', gap: 16 }}>
        <Box>
          <Text variant="subheader">Welcome back!</Text>
          <Text variant="description">Please enter your account credentials</Text>
        </Box>
        <Box width={'100%'} gap="s">
          <Input
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            keyboardType="number-pad"
            autoCapitalize={'none'}
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            autoCapitalize={'none'}
          />
        </Box>
        <Button
          onPress={() => signInWithPhoneNumber(phoneNumber, password)}
          disabled={!phoneNumber || !password}
          variant={!phoneNumber || !password ? 'disabled' : 'primary'}>
          <Text color="mainBackground" fontWeight={600}>
            Log in
          </Text>
        </Button>
        <BrandName style={{ alignItems: 'center', paddingVertical: 42 }} />
      </Container>
    </TouchableWithoutFeedback>
  );
}
