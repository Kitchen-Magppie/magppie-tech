import { useEffect } from 'react';

//====================================================================

import { auth } from '~/config';
const { getAuth, onAuthStateChanged } = auth;
export function useFirebaseAuth() {
  useEffect(() => {
    const q = getAuth();
    onAuthStateChanged(q, (user) => {
      if (user?.email) {
        console.log(user);
      }
    });
  }, []);
}
