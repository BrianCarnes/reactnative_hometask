import Button from '@/components/Button';
import TextField from '@/components/TextField';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';
import { useSession } from '@/components/authContext';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signIn, session } = useSession();

  useEffect(() => {
    if (session) {
      router.replace('/home');
    }
  }, [session]);

  const handleLogin = () => {
    if (!(username && password)) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    if (!((username === process.env.EXPO_PUBLIC_USERNAME ) && (password === process.env.EXPO_PUBLIC_PASSWORD))) {
      Alert.alert('Error', 'Invalid username or password');
      return;
    }

    signIn();
    router.replace('/home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextField
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <TextField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        isPassword
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default LoginScreen;
