import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useAddPost } from 'utils/func/useAddPost';
import { GetDataCategory } from 'utils/func/useCategoryList';

const InputAddPost = () => {
  const { initialValues, image, pickImage, onSubmitMethod, loading } = useAddPost();
  const { categoryList, getListCategory } = GetDataCategory();
  useEffect(() => {
    getListCategory();
  }, []);

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={(value, { resetForm }) => {
          onSubmitMethod(value);
          resetForm({ values: '' });
        }}
        validate={(values) => {
          if (!values.title) {
            console.log('🚀 ~ <FormikinitialValues={initialValues}onSubmit={ ~ errors:');
          }
        }}>
        {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors }) => (
          <View>
            <TouchableWithoutFeedback
              onPress={(gambar) => {
                handleChange('image');
                pickImage();
              }}>
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={{ width: 70, height: 70, borderRadius: 15 }}
                />
              ) : (
                <Image
                  source={require('./../../assets/images/placeholderimage.png')}
                  style={{ width: 70, height: 70, borderRadius: 15 }}
                />
              )}
            </TouchableWithoutFeedback>
            <TextInput
              onChangeText={handleChange('title')}
              style={styles.input}
              value={values?.title}
              placeholder="Title"
            />
            <TextInput
              onChangeText={handleChange('desc')}
              style={styles.input}
              value={values?.desc}
              numberOfLines={5}
              placeholder="Description"
            />
            <TextInput
              onChangeText={handleChange('price')}
              style={styles.input}
              value={values?.price}
              keyboardType="number-pad"
              placeholder="Price"
            />
            <TextInput
              onChangeText={handleChange('address')}
              style={styles.input}
              value={values?.address}
              placeholder="Address"
            />
            <View className={style.inputStyle}>
              <Picker
                selectedValue={values?.category}
                onValueChange={(itemValue) => setFieldValue('category', itemValue)}>
                {categoryList &&
                  categoryList.map((data: any, index: number) => (
                    <Picker.Item key={index} label={data?.name} value={data?.name} />
                  ))}
              </Picker>
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              style={{ backgroundColor: loading ? '#ccc' : '#007BFF' }}
              disabled={loading}
              className="p-3 bg-blue-400 rounded-full mt-10">
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text className="text-center text-white text-base">Submit</Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const style = {
  containerPost: 'p-10 mt-5',
  inputStyle: 'border-black rounded-xl border-[1px] mt-2 mb-2',
  titlePost: 'text-slate-700 text-2xl font-semibold',
  subtitlePost: 'text-slate-400 text-base mt-2 mb-7',
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    paddingTop: 14,
    paddingHorizontal: 17,
    fontSize: 17,
    textAlignVertical: 'top',
  },
});

export default InputAddPost;
