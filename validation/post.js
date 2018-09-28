const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 450 })) {
    errors.text = "Post must be between 10 and 450 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
