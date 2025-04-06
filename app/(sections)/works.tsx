import DisplayText from '@/motion-components/display-text';
import ParallelText from '@/motion-components/parallel-text';

export default function Works() {
  return (
    <ParallelText baseVelocity={-2} className="py-0 md:py-4">
      {[...Array(4)].map((_, i) => (
        <DisplayText key={`displayTxt-${i}`}>
          <span className="uppercase">SELECTED WORKS</span>
          <span>&nbsp;—&nbsp;</span>
        </DisplayText>
      ))}
    </ParallelText>
  );
}
