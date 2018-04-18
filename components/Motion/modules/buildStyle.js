const SPRING = 'spring';
const SPRING_BEZIER = 'cubic-bezier(0.175, 0.885, 0.160, 1.105)';
const TRANSFORM_PROPERTIES = ['scale', 'translateX', 'translateY'];

export default ({
  props: {
    delay = 0, duration, timeline = [], type, useNativeDriver,
  } = {},
  state = {},
} = {}) => {
  if (timeline.length === 0) return undefined;

  let style = {};

  timeline.forEach((key) => {
    const v = useNativeDriver ? key.value : state[key.property];

    style = {
      ...style,
      ...(
        TRANSFORM_PROPERTIES.includes(key.property)
          ? { transform: [{ [key.property]: v }] }
          : { [key.property]: v }
      ),
    };
  });

  if (useNativeDriver && timeline.length > 0) {
    style = {
      ...style,
      transitionDelay: `${delay}ms`,
      transitionDuration: `${duration}ms`,
      transitionProperty: Object.keys(style).join(', '),
      transitionTimingFunction: type === SPRING ? SPRING_BEZIER : undefined,
    };
  }

  return style;
};
