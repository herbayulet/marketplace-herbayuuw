import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from 'hooks/warmUpBrowser';
import { useCallback } from 'react';
import { signinOauth } from 'utils/oauth';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  const { onPress, useWarmUpBrowser } = signinOauth();
  useWarmUpBrowser();

  return (
    <View className="relative">
      <Image source={require('../../../assets/images/login.jpg')} className={styles.loginImage} />
      <View className={styles.cardLogin}>
        <Text className={styles.judulLogin}>Community Marketplace Herbayuuw</Text>
        <Text className={styles.takelineLogin}>
          Buy Sell Marketplace where you can sell old item and make real money
        </Text>
        <TouchableOpacity className={styles.buttonLogin} onPress={onPress}>
          <Text className={styles.nameButtonLogin}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  loginImage: 'w-full h-[400px] object-cover',
  judulLogin: 'text-2xl text-center font-semibold text-slate-700',
  takelineLogin: 'text-lg  font-normal text-slate-500 mt-10',
  buttonLogin: 'bg-blue-500 rounded-2xl w-80 p-4 mt-[75px]',
  nameButtonLogin: 'text-white text-center text-xl',
  cardLogin:
    'flex-col justify-center items-center bg-white rounded-t-3xl absolute top-[340px] left-3.5',
};

export default LoginScreen;
