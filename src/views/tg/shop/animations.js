import gsap from 'gsap';

export const runInitAnimation = () => {
  gsap.fromTo(
    `[data-animation="balance-animation-2"]`,
    {
      opacity: 0,
      y: -100,
      scale: 0,
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      delay: 0.3,
      ease: 'back.out(0.2)',
    },
  );

  gsap.fromTo(
    `[data-animation="balance-animation-1"]`,
    {
      opacity: 0,
      x: window.innerWidth + 200,
      y: -window.innerHeight + 500,
      scale: 0,
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      stagger: 0.05,
      duration: 1,
      delay: 0.6,
      ease: 'back.out(0.2)',
    },
  );
};
