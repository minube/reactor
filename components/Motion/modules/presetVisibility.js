import PRESETS from './presets';

export default (preset, visible) => {
  const { IN, OUT } = PRESETS[preset.toUpperCase()] || PRESETS.POP;
  return visible ? IN : OUT;
};
