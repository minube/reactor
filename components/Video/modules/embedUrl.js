export default (source) => {
  let url;
  let match;

  // -- Youtube
  match = source.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
  if (match !== null) return `https://www.youtube.com/embed/${match[1]}?title=0`;

  // -- Video
  match = source.match(/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i); // eslint-disable-line
  if (match !== null) return `https://player.vimeo.com/video/${match[1]}?title=0&byline=0&portrait=0`;

  return url;
};
