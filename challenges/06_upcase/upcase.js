const upcase = (arr) => {
  let arr2 = [];
  arr.forEach((element, index) => {
    arr2.push(element.toUpperCase());
  });
  return arr2;
};

// Do not delete the code below 🙏

module.exports = {
  upcase
};
