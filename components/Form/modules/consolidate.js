export default ({ attributes = {}, value = {}, onChange } = {}) => {
  if (!onChange) return;

  const nextValue = {};
  let filled = false;

  Object.keys(attributes).forEach((key) => {
    nextValue[key] = value[key];
    if (attributes[key].defaultValue && nextValue[key] === undefined) {
      filled = true;
      nextValue[key] = attributes[key].defaultValue;
    }
  });

  if (filled) onChange(nextValue);
};
