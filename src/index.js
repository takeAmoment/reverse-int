module.exports = function reverse (n) {
  n = Math.abs(n);
  let str = n.toString();
  let reverseNumber = +str.split('').reverse().join('');
  return reverseNumber;

}
