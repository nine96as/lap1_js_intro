const sortNames = (arr) => {
  // case-insensitive sorting ig
  return arr.sort(Intl.Collator().compare);
};

// Do not delete the code below 🙏

module.exports = {
  sortNames
};

console.log(sortNames(['Ree', 'romeo', 'emile', 'sarah']));
