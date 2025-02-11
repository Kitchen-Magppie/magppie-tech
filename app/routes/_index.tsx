import type { MetaFunction } from '@remix-run/node';
import { TableExample } from '~/components';
import { Button } from '~/components/ui/button';
// import { useExampleListener } from '~/hooks';

export default function Index() {
  // useExampleListener();
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
