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
      <DialogContent className='w-[90%] h-[50vh] rounded-lg'>
        <DialogHeader>
          <DialogTitle className='text-3xl text-left x-font-exo-500 '>
            Chat
          </DialogTitle>
          <DialogDescription className='h-full flex align-middle justify-center'>
            <div className='x-font-exo-500 text-2xl my-auto'>Coming soon..</div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

type TProps = { children: ReactNode };
