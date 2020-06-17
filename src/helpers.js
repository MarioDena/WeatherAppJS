export default (func, delay) => {
  let timeout;
  return function _(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};