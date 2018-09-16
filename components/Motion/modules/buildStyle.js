import { ENV } from '../../../common';

const { IS_WEB } = ENV;
const SPRING = 'spring';
const SPRING_BEZIER = 'cubic-bezier(0.175, 0.885, 0.160, 1.105)';
const TRANSFORM_PROPERTIES = ['scale', 'translateX', 'translateY'];

export default ({
  props: {
    delay = 0, duration, type, useNativeDriver,
  } = {},
  state: { timeline = [], ...state } = {},
} = {}) => {
  if (timeline.length === 0) return undefined;

  let style = {};

  timeline.forEach(({ value, property }) => {
    const newValue = useNativeDriver ? value : state[property];

    style = {
      ...style,
      ...(
        TRANSFORM_PROPERTIES.includes(property)
          ? { transform: [{ [property]: newValue }] }
          : { [property]: newValue }
      ),
    };
  });

  if (useNativeDriver && IS_WEB) {
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
