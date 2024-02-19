import { useUser } from '@clerk/clerk-expo';
import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

const Header = () => {
  const { user } = useUser();
  return (
    <View>
      {/* Icon dan Identitas */}
      <View className="flex flex-row items-center gap-2">
        <Image source={{ uri: user?.imageUrl }} className="rounded-full w-12 h-12" />
        <View>
          <Text className="text-base">Halo</Text>
          <Text className="text-lg font-semibold">{user?.fullName}</Text>
        </View>
      </View>
      {/* Seacrh Bar */}
      <View className="p-3 px-5 bg-white mt-5 rounded-full">
        <TextInput placeholder="Search" />
      </View>
    </View>
  );
};

export default Header;
