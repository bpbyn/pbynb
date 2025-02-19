import { cn } from '@/lib/utils';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: React.ComponentProps<'div'>['className'];
};

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      className={cn('rounded-lg bg-foreground px-5 py-2 text-primary', className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
