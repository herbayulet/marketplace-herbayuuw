import { useUser } from '@clerk/clerk-expo';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, getDownloadURL, addDoc, collection, db } from 'firebase';
import { useState } from 'react';

import ShowToast from '@/components/ShowToast';
import { Alert } from 'react-native';

export const useAddPost = () => {
  const [image, setImage] = useState<any>(null);
  const storage = getStorage();
  const { user } = useUser();
  const [initialValues, setInitialValues] = useState<any>({
    title: '',
    address: '',
    category: '',
    desc: '',
    price: '',
    image: '',
    car: '',
    userName: '',
    userEmail: '',
    userImage: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const rupiahMask = (num: number) => {
    return num.toLocaleString('en-ID');
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmitMethod = async (value: any) => {
    setLoading(true);
    const emptyValues = Object.fromEntries(Object.keys(initialValues).map((key) => [key, '']));
    // Merge the empty values with the actual form values
    const submissionValues = { ...emptyValues, ...value };

    submissionValues.image = image;
    // Convert Uri menjadi File Blob
    const res = await fetch(image);
    const blob = await res.blob();
    const storageRef = ref(storage, 'communityHyung/' + Date.now() + '.jpg');

    uploadBytes(storageRef, blob) //untuk upload ke storage firebase
      .then((snapshot) => {
        console.log('🚀 ~ onSubmitMethod ~ storageRef:', storageRef);
      })
      .then((resp) => {
        getDownloadURL(storageRef).then(async (downloadUrl) => {
          //untuk mendapatkan link download
          value.image = downloadUrl;
          (value.userName = user?.fullName),
            (value.userEmail = user?.primaryEmailAddress?.emailAddress),
            (value.userImage = user?.imageUrl);
          const docRef = await addDoc(collection(db, 'UserPost'), value); //untuk menambahkan collection di database firestore
          if (docRef.id) {
            setImage(null);
            setLoading(false);
            Alert.alert('Suscess', 'Request berhasil di kirim');
          }
        });
      });
  };

  return { initialValues, rupiahMask, pickImage, image, onSubmitMethod, user, loading };
};
