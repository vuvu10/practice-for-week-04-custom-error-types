const ValidationError = require('./validation-error');

// Your code here

class MaximumLengthExceededError extends ValidationError {
  constructor(excessLength = null) {
   super(
    excessLength
     ? `Maximum length exceeded by ${excessLength}`
     : "Maximum length exceeded"
   );
   this.name = "MaximumLengthExceededError";
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}