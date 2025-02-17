import type { MetaFunction } from '@remix-run/node';
// =========================================================

// =========================================================

import BuyNow from '~/pages/buy-now';

export default function BuyNowPage() {
  return <BuyNow />;
}

export const meta: MetaFunction = () => {
  return [
    { title: 'MAGPPIE' },
    { name: 'description', content: 'Welcome to MAGPPIE!' },
  ];
};
