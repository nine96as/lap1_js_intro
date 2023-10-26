const reverse1 = (word) => {
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
};

// Do not delete the code below 🙏

module.exports = {
  reverse1
};

console.log(reverse1('world'));
