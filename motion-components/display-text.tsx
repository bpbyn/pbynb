import { cn } from '@/lib/utils';

export default function DisplayText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: React.ComponentProps<'div'>['className'];
}) {
  return (
    <div className="flex flex-nowrap items-center gap-x-4 whitespace-nowrap">
      <div
        className={cn(
          'block space-x-2 font-serif text-base-5xl leading-[6rem] tracking-tight md:text-base-6xl',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
