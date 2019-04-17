import { ENV } from '../../../common';

const LOCALES = {
  default: { decimal: ',', thousands: '.' },
  'en-US': { decimal: '.', thousands: ',' },
  'en-EN': { decimal: '.', thousands: ',' },
};

const { IS_WEB, IS_SERVER } = ENV;
const LEFT_SYMBOLS = ['$'];

export default (amount = 0, fixed = 2, locale, symbol = '') => {
  let value;
  const leftSymbol = LEFT_SYMBOLS.includes(symbol) ? symbol : '';
  const rightSymbol = !LEFT_SYMBOLS.includes(symbol) ? symbol : '';

  if (IS_WEB && !IS_SERVER && Number.prototype.toLocaleString) {
    value = parseFloat(amount.toFixed(fixed)).toLocaleString(locale, {
      // style: 'currency',
      // currency: 'THB',
      // currencyDisplay: 'symbol',
      minimumFractionDigits: 0,
      maximumFractionDigits: fixed,
    });
  } else {
    const { decimal, thousands } = LOCALES[locale] || LOCALES.default;

    const int = parseInt(Math.abs(amount || 0).toFixed(fixed), 10).toString();
    const intThousands = (int.length > 3) ? int.length % 3 : 0;
    const strInt = (intThousands ? `${int.substr(0, intThousands)}${thousands}` : '')
      + int.substr(intThousands).replace(/(\d{3})(?=\d)/g, `$1${thousands}`);
    const strFloat = fixed && Math.abs(amount - int) > 0
      ? decimal + Math.abs(amount - int).toFixed(fixed).slice(2)
      : '';

    value = `${amount < 0 ? '-' : ''}${strInt}${strFloat}`;
  }

  return `${leftSymbol}${value}${rightSymbol}`;
};
