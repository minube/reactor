import embedUrl from './embedUrl';

export default ({
  autoPlay, controls, height, loop, source, muted, width,
}) => {
  const embed = embedUrl(source);
  const css = 'background: transparent; position: absolute; left: 0; top: 0; margin: 0; padding: 0; overflow: hidden;';

  return !embed
    ?
    `<video
      ${autoPlay ? 'autoplay' : ''} ${controls ? 'controls' : ''} ${loop ? 'loop' : ''} ${muted ? 'muted' : ''}
      height="100%"
      playsinline
      preload="true"
      src="${source}"
      style="object-fit: cover; ${css}"
      webkit-playsinline
      width="100%"
    />`
    :
    `<iframe
      allowtransparency="true"
      frameBorder="0"
      src="${embed}&autoplay=${autoPlay ? 1 : 0}"
      height="${height}"
      style="${css}"
      title="${embed}"
      width="${width}"
    />`;
};
