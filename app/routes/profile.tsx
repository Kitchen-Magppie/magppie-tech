import type { MetaFunction } from '@remix-run/node';
import Profile from '~/pages/profile';
// =========================================================

// =========================================================

export default function ProfilePage() {
  return <Profile />;
}

export const meta: MetaFunction = () => {
  return [
    { title: 'MAGPPIE' },
    { name: 'description', content: 'Welcome to MAGPPIE!' },
  ];
};
