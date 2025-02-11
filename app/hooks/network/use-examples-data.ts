import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
//====================================================================
import { db } from '~/config';

export function useExampleListener() {
  useEffect(() => {
    const collectionRef = collection(db, 'examples');
    onSnapshot(collectionRef, ({ docs }) => {
      const data: unknown[] = [];
      docs?.forEach((doc) => {
        const row = doc.data();
        data.push({
          ...row,
          id: doc.id,
        });
      });
      console.log(data);
    });
  }, []);
}
