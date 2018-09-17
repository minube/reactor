import { THEME } from '../../../common';

const { MOTION } = THEME;
const TRANSFORM_PROPERTIES = ['scale', 'translateX', 'translateY'];

export default ({
  props: {
    delay = 0, duration, timeline = [], useNativeDriver,
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
      transitionTimingFunction: MOTION.EASE,
    };
  }

  return style;
};
