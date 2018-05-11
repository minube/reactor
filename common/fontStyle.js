import screenSize from './screenSize';
import THEME from './theme';

const { FONT, UNIT } = THEME;

export default (
  width,
  {
    tiny, small, large, title,
  },
) => {
  const {
    TINY, PHONE, TABLET, SMALL, REGULAR, LARGE,
  } = screenSize(width);

  let fontSize = REGULAR || LARGE ? FONT.SIZE.REGULAR : FONT.SIZE.SMALL;

  if (tiny) fontSize = REGULAR || LARGE ? FONT.SIZE.TINY : UNIT * 1.1;
  else if (small) fontSize = REGULAR || LARGE ? FONT.SIZE.SMALL : FONT.SIZE.TINY;
  else if (large) {
    fontSize = FONT.SIZE.LARGE;
    if (TINY) fontSize = FONT.SIZE.SMALL;
    if (PHONE || SMALL) fontSize = FONT.SIZE.REGULAR;
    if (TABLET || REGULAR) fontSize = UNIT * 1.8;
  } else if (title) {
    fontSize = UNIT * 4.8;
    if (TINY || PHONE || TABLET) fontSize = UNIT * 2.4;
    if (SMALL || REGULAR) fontSize = UNIT * 3;
  }

  return {
    fontSize,
    lineHeight: fontSize * (TINY || SMALL ? 1.2 : 1.3),
  };
};
