import InputAddPost from '@/components/InputAddPost';
import React from 'react';
import { View, Text } from 'react-native';

const AddPostScreen = () => {
  return (
    <View className={style.containerPost}>
      <Text className={style.titlePost}>Add new post</Text>
      <Text className={style.subtitlePost}>Create new post and sell items</Text>
      <InputAddPost />
    </View>
  );
};

const style = {
  containerPost: 'p-10 mt-5',
  titlePost: 'text-slate-700 text-2xl font-semibold',
  subtitlePost: 'text-slate-400 text-base mt-2 mb-7',
};

export default AddPostScreen;
