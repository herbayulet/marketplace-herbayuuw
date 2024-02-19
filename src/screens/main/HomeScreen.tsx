import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { GetDataCategory } from 'utils/func/useCategoryList';
import Header from '@/components/Home/Header';

const HomeScreen = () => {
  return (
    <View className="py-11 px-6">
      <Header />
    </View>
  );
};

export default HomeScreen;
