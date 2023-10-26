const swapcase = (input) => {
  return [...input].map((e) =>
    e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()
  ).join``;
};

// Do not delete the code below 🙏

module.exports = {
  swapcase
};

console.log(swapcase('JournAl'));
