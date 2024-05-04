getMaxLengthMessage = (fieldName, maxLength) => `Maximal length allowed for ${fieldName} is ${maxLength}`;

getMinLengthMessage = (fieldName, minLength) => `Minimal length allowed for ${fieldName} is ${minLength}`;

matchValidator = (fieldName, pattern) => {
  const regExp = new RegExp(pattern);

  return {
    validator: (v) => regExp.test(v),
    message: props => `${props.value} is not a valid ${fieldName}`
  };
};

maxLengthValidator = (fieldName, maxLength) => {
  return [maxLength, getMaxLengthMessage(fieldName, maxLength)];
};

minLengthValidator = (fieldName, minLength) => {
  return [minLength, getMinLengthMessage(fieldName, minLength)];
};

requiredValidator = (fieldName) => {
  return [true, `${fieldName} is required`]
};

module.exports = {
  getMaxLengthMessage,
  getMinLengthMessage,
  matchValidator,
  maxLengthValidator,
  minLengthValidator,
  requiredValidator
};
