import { staticData as data } from '@/lib/constants';
import DisplayText from '@/motion-components/display-text';
import ParallelText from '@/motion-components/parallel-text';

export default function Works() {
  const {
    works: { title },
  } = data;

  return (
    <ParallelText baseVelocity={-2} className="py-0 md:py-4">
      {[...Array(4)].map((_, i) => (
        <DisplayText key={`displayTxt-${i}`}>
          <span className="uppercase">{title}</span>
          <span>&nbsp;—&nbsp;</span>
        </DisplayText>
      ))}
    </ParallelText>
  );
}
