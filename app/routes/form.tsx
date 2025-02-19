import type { MetaFunction } from '@remix-run/node';
// =========================================================

// =========================================================

import Form from '~/pages/form';

export default function FormPage() {
  return <Form />;
}

export const meta: MetaFunction = () => {
  return [
    { title: 'MAGPPIE' },
    { name: 'description', content: 'Welcome to MAGPPIE!' },
  ];
};
