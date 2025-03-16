export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        opacity: 0,
        x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
        y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          ease: [0.25, 0.25, 0.25, 0.75],
          duration: 0.6,
          delay: delay,
        },
      },
    };
  };