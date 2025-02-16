import { ReactNode } from 'react';
import { Button } from '../ui/button';

export function MobileNavItem(props: TProps) {
  const { icon, isActive } = props;
  return (
    <Button
      variant='ghost'
      size='icon'
      className={`hover:bg-transparent ${
        isActive ? 'text-neutral-500' : 'text-neutral-400'
      }`}
    >
      {icon}
    </Button>
  );
}

type TProps = {
  icon: ReactNode;
  isActive?: boolean;
};
