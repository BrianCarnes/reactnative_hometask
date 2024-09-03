import React from 'react';
import { Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { useSession } from './authContext';

interface AuthContainerProps {
  children: React.ReactNode;
}

const AuthContainer: React.FC<AuthContainerProps> = ({ children }) => {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/login" />;
  }

  return <>{children}</>;
};

export default AuthContainer;
