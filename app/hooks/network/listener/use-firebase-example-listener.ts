import { collection, getDocs, onSnapshot, query } from 'firebase/firestore';
import { useEffect } from 'react';
import { db } from '~/config';
import { setExample, useAppDispatch } from '~/redux';
import { FirebaseCollectionEnum, TExample } from '~/types';

const collectionRef = collection(db, FirebaseCollectionEnum.Example);
export function useFirebaseExampleSnapshot() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    onSnapshot(collectionRef, ({ docs }) => {
      const data: TExample[] = [];
      docs?.forEach((doc) => {
        const row = doc.data();
        row.id = doc.id;
        data.push(row as TExample);
      });
      dispatch(setExample(data));
    });
  }, [dispatch]);
}

export function useFirebaseExampleListener() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const q = query(
      collectionRef
      //   where('projectId', 'array-contains', _params.id),
      //   orderBy('lastMessage.createdAt', 'desc'),
      // limit(10)
    );

    getDocs(q).then(({ docs }) => {
      const data: TExample[] = [];
      docs?.forEach((doc) => {
        const row = doc.data() as object;
        data.push({ ...row, id: doc.id } as TExample);
      });

      dispatch(setExample(data));
    });
  }, [dispatch]);
}
