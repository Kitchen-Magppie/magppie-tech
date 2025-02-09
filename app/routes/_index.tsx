import type { MetaFunction } from '@remix-run/node';
import { TableExample } from '~/components';
import { Button } from '~/components/ui/button';

export default function Index() {
  return (
    <div>
      Hello, world!
      <TableExample />
      <Button>Submit</Button>
    </div>
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: 'MAGPPIE' },
    { name: 'description', content: 'Welcome to MAGPPIE!' },
  ];
};
