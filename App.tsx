import { Layout } from '@/components/Layout';
import { TabNavigations } from '@/navigations/TabNavigation';
import LoginScreen from '@/screens/auth/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_ZW5nYWdpbmctY3Jhd2RhZC05OS5jbGVyay5hY2NvdW50cy5kZXYk">
      <StatusBar style="auto" />
      <SignedIn>
        <NavigationContainer>
          <TabNavigations />
        </NavigationContainer>
      </SignedIn>
      <SignedOut>
        <Layout>
          <LoginScreen />
        </Layout>
      </SignedOut>
    </ClerkProvider>
  );
}

const style = {
  addLayouting: 'flex flex-1 items-center justify-center bg-rose-300',
};
