export default function DisplayText({
  children,
}: {
  children: React.ReactNode;
  className?: React.ComponentProps<'div'>['className'];
}) {
  return (
    <div className="flex flex-nowrap items-center gap-x-4 whitespace-nowrap">
      <div className="block space-x-2 font-serif text-8xl leading-[1]">{children}</div>
    </div>
  );
}
