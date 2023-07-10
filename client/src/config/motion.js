export const transition = { type: "spring", duration: 0.8 };

export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};


// The above code defines a function called slideAnimation that takes a direction parameter. The function returns an object with three properties: initial, animate, and exit.

// The initial property represents the initial state of the animation. It sets the initial position (x and y coordinates) and opacity of the animated object. The values of x and y depend on the direction parameter. If direction is "left", the x coordinate is set to -100, if it's "right", the x coordinate is set to 100, otherwise, it's set to 0. Similarly, if direction is "up", the y coordinate is set to 100, if it's "down", the y coordinate is set to -100, otherwise, it's set to 0. The opacity is set to 0 initially. The transition property specifies how the animation transitions from the initial state to the animate state, with a delay of 0.5 seconds.

//The animate property represents the state of the animation when it's fully visible. It sets the position (x and y coordinates) and opacity of the animated object to 0, meaning it is fully visible. The transition property specifies how the animation transitions from the initial state to the animate state, with no delay.

//The exit property represents the state of the animation when it's exiting or being removed. It sets the position (x and y coordinates) of the animated object to the same values as the initial state, based on the direction parameter. The transition property specifies how the animation transitions from the animate state to the exit state, with no delay.

// Overall, this code defines an animation configuration that can be used to create a sliding animation in different directions (left, right, up, or down) by specifying the direction parameter. The animation starts from an initial state, transitions to a fully visible state, and then exits or gets removed.

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

export const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
};

export const headContentAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2,
  },
};

export const headContainerAnimation = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};
