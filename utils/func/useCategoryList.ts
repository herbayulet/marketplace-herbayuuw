import { collection, db, onSnapshot } from 'firebase';
import { useState } from 'react';
import { CategoryProps } from 'utils/common';

export const GetDataCategory = () => {
  const [categoryList, setCategoryList] = useState<any[] | undefined>();
  const getListCategory = async () => {
    try {
      const query = collection(db, 'Category');
      const unsubscribe = onSnapshot(query, (snapshot) => {
        const filteredFoods: any = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // .filter((item) => item.age <= 22); // Filter client-side
        setCategoryList(filteredFoods);
      });

      return unsubscribe;
    } catch (error: any) {}
  };
  return { categoryList, getListCategory };
};
