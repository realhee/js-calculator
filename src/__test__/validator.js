const validator = {
  isValidLength: (num) => {
    return num.toString().length < 4;
  },
};

module.exports = validator;
