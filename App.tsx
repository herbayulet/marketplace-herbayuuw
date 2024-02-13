import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = {
  container: 'flex flex-1 items-center justify-center bg-white',
};
