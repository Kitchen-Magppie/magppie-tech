import type { MetaFunction } from '@remix-run/node';
import AllKitchens from '~/pages/all-kitchens';
// =========================================================

// =========================================================


export default function AllKitchensPage() {
  return <AllKitchens />;
}

export const meta: MetaFunction = () => {
  return [
    { title: 'MAGPPIE' },
    { name: 'description', content: 'Welcome to MAGPPIE!' },
  ];
};
