export default (key) => {
  const cookies = `; ${document.cookie}`;
  const cookie = cookies.split(`; ${key}=`);

  return (cookie.length === 2) ? cookie.pop().split(';').shift() : undefined;
};
