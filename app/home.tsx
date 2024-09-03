import AuthContainer from '@/components/AuthContainer';
import ChatScreen from '@/components/ChatScreen';
import Header from '@/components/Header';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

const HomeScreen: React.FC = () => {

  return (
    <AuthContainer>
      <View style={styles.container}>
        <Header title='Chat' />
        <ChatScreen />
      </View>
    </AuthContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
