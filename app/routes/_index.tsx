import type { MetaFunction } from '@remix-run/node';
// =========================================================

// =========================================================

import Home from '~/pages/home';

export default function Index() {
  return <Home />;
}

export const meta: MetaFunction = () => {
  return [
    { title: 'MAGPPIE' },
    { name: 'description', content: 'Welcome to MAGPPIE!' },
  ];
};
