export default {
  FADE: {
    IN: [
      { property: 'opacity', value: 1 },
      { property: 'translateY', value: 0 },
    ],
    OUT: [
      { property: 'opacity', value: 0 },
      { property: 'translateY', value: 32 },
    ],
  },

  FADELEFT: {
    IN: [
      { property: 'opacity', value: 1 },
      { property: 'translateX', value: 0 },
    ],
    OUT: [
      { property: 'opacity', value: 0 },
      { property: 'translateX', value: 32 },
    ],
  },

  POP: {
    IN: [
      { property: 'opacity', value: 1 },
      { property: 'scale', value: 1 },
    ],
    OUT: [
      { property: 'opacity', value: 0 },
      { property: 'scale', value: 0 },
    ],
  },
};
