import { useLenis } from 'lenis/react';

export const useNavLenis = () => {
  const lenis = useLenis();

  const onNavClick = (id: string) => {
    const targetId = id.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement && lenis) {
      const rect = targetElement.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      let targetPosition = rect.top + scrollTop;
      if (targetId === 'contact') {
        targetPosition -= window.innerHeight - 3000;
      }

      // Scroll to the calculated position
      lenis.scrollTo(targetPosition, {
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return { onNavClick };
};
