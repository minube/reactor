const ITALIC = 'em';
const BOLD = 'strong';
const EMPTY = '';

export default (value = '') => {
  const parts = [];
  if (value.length === 0) return parts;

  parts.push({ value: EMPTY });

  value.trim().split(' ').forEach((word) => {
    const starts = word.startsWith('*');
    const ends = word.endsWith('*');
    const index = parts.length - 1;

    if (starts || ends) {
      const parsedWord = word.split('*').join(EMPTY).concat(' ');
      if (starts) {
        parts.push({ value: parsedWord, type: word.startsWith('**') ? BOLD : ITALIC });
      } else {
        parts[index].value += parsedWord;
      }
      if (ends) parts.push({ value: EMPTY });
    } else {
      parts[index].value += `${word} `;
    }
  });

  return parts.filter(part => part.value !== EMPTY);
};

export { BOLD, ITALIC };
