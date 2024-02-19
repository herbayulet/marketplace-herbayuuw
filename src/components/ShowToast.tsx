// ShowToast.js
import { useEffect } from 'react';
import Toast from 'react-native-toast-message';

interface ToastProps {
  message: string;
  type: string;
}

const ShowToast = ({ message, type }: ToastProps) => {
  useEffect(() => {
    Toast.show({
      type: type,
      text1: message,
      position: 'bottom',
      visibilityTime: 2000,
    });
  }, [message, type]);

  return null; // Return null as the component doesn't render anything
};

export default ShowToast;
