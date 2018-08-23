export default (userAgent) => {
  let width = 1024;
  let height = 768;

  if (/Tablet|iPad/i.test(userAgent)) {
    width = 768;
    height = 1024;
  } else if (/iPhone|Android|Mobile|iPod|Windows Phone|Blackberry/i.test(userAgent)) {
    width = 360;
    height = 640;
  }

  return { width, height };
};
