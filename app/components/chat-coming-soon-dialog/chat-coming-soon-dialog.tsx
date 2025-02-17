import { ReactNode } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';

export function ChatComingSoonDialog(props: TProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className='w-[90%] h-[90vh] rounded-lg'>
        <DialogHeader>
          <DialogTitle className='text-4xl'>Chat</DialogTitle>
          <DialogDescription className='h-full flex align-middle justify-center'>
            <div className='x-font-exo-500 text-3xl my-auto'>Coming soon..</div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

type TProps = { children: ReactNode };
