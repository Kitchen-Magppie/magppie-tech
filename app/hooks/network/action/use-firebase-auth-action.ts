import { auth } from '~/config';

export function useFirebaseActionAuth() {
  const q = auth.getAuth();
  return {
    signIn: (row: TCredential) =>
      auth?.signInWithEmailAndPassword(q, row.email, row.password),
    signUp: (row: TCredential) =>
      auth?.createUserWithEmailAndPassword(q, row.email, row.password),
  };
}

type TCredential = { email: string; password: string };
