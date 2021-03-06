const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";

  if(!Validator.isLength(data.handle, {min: 3, max: 19})){
      errors.handle = "Handle needs to be between 3 and 19 characters"
  }
  if(Validator.isLength(data.handle)){
      errors.handle = "Profile handle required"
  }
  
  if(!isEmpty(data.twitter)){
      if(!Validator.isURL(data.twitter)){
          errors.twitter = 'Not a valid URL'
      }
  }
  if(!isEmpty(data.youtube)){
      if(!Validator.isURL(data.youtube)){
          errors.youtube = 'Not a valid URL'
      }
  }
  if(!isEmpty(data.instagram)){
      if(!Validator.isURL(data.instagram)){
          errors.instagram = 'Not a valid URL'
      }
  }
 
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
