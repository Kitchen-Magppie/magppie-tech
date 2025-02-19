import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';
import { useCallback } from 'react';
import { db } from '~/config';
import { _, FirebaseCollectionEnum, TExample } from '~/types';

export function useFirebaseExampleAction() {
  const add = useCallback((row: TExample) => {
    return addDoc(collection(db, COLLECTION), row);
  }, []);

  const batchEdit = useCallback((rows: TExample[]) => {
    const batch = writeBatch(db);
    const chunks = rows?.filter((row) => row?.id?.trim()?.length);
    chunks?.forEach((row) => {
      if (row?.id?.length) {
        const docRef = doc(db, COLLECTION, row.id);
        batch?.update(docRef, _.omit(row, 'id'));
      }
    });
    batch?.commit();
  }, []);
  //   const batchCreate = useCallback((rows: TExample[]) => {
  //     const batch = writeBatch(db);
  //     const chunks = rows?.filter((row) => row?.id?.trim()?.length);
  //     chunks?.forEach((row) => {
  //       if (row?.id?.length) {
  //         const docRef = doc(db, COLLECTION, row.id);
  //         batch?.update(docRef, _.omit(row, 'id'));
  //       }
  //     });
  //     batch?.commit();
  //   }, []);
  return {
    add,
    remove: (id: string) => {
      const docRef = doc(db, COLLECTION, id);
      deleteDoc(docRef);
    },
    edit: (row: TExample) => {
      const docRef = doc(db, `${COLLECTION}/${row.id}`);
      updateDoc(docRef, _.omit(row, 'id'));
    },
    batch: {
      edit: batchEdit,
      remove: (arr: string[]) => {
        const batch = writeBatch(db);
        arr?.forEach((id) => {
          const docRef = doc(db, COLLECTION, id);
          batch.delete(docRef);
        });
        return batch.commit();
      },
    },
  };
}

const COLLECTION = `/${FirebaseCollectionEnum.Example}`;
