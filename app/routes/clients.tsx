import type { MetaFunction } from '@remix-run/node';
import Clients from '~/pages/clients';

export default function FormPage() {
  return <Clients />;
}

export const meta: MetaFunction = () => {
  return [
    { title: 'MAGPPIE' },
    { name: 'description', content: 'Welcome to MAGPPIE!' },
  ];
};
