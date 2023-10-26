const max = (arr) => {
  if (arr.length) return arr.reduce((a, b) => (b > a ? b : a), 0);
};

// Do not delete the code below 🙏

module.exports = {
  max
};

console.log(max([1, 297, -73, 99, 10]));
console.log(max([]));
