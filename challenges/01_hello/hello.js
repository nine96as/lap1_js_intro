const hello = (name) => {
  if (name === '') throw 'no empty strings allowed';
  return name ? `Hello ${name}` : `Hello Stranger`;
};
// Do not delete the code below 🙏

module.exports = {
  hello
};
