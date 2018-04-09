import embedUrl from './embedUrl';

export default ({
  autoPlay, controls, loop, source, muted,
}) => {
  const embed = embedUrl(source);

  return !embed
    ?
    `<video
      ${autoPlay ? 'autoplay' : ''} ${controls ? 'controls' : ''} ${loop ? 'loop' : ''} ${muted ? 'muted' : ''}
      height="100%"
      playsinline
      preload="true"
      src="${source}"
      style="object-fit: cover; margin: 0; padding: 0;"
      webkit-playsinline
      width="100%"
    />`
    :
    `<iframe
      frameBorder={0}
      src="${embed}&autoplay=${autoPlay ? 1 : 0}"
      style="margin: 0; padding: 0;"
      title={embed}
    />`;
};
