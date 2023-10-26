const add = (a, b) => {
  if (!a && !b) throw 'you need to call the functions with 2 arguments';
  if (!a || b) return b + b;
  if (a || !b) return a + a;
  return a + b;
};

// Do not delete the code below 🙏

module.exports = {
  add
};
