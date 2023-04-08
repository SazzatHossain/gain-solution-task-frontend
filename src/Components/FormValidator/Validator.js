const mapping = {
  "email": "Email",
  "title": "Title",
  "location": "Last Name",
  "phone_no": "Phone Number",
  "password": "Password",
  "description": "Description",
  "first_name": "First Name",
  "last_name": "Last Name",
};
export const validateRequired = (key) => (formValues, errors) => {
  const targetValue = formValues[key];
  const updatedErrors = Object.assign({}, errors);
  if (targetValue === null || (typeof targetValue === 'string' && targetValue.trim().length === 0)) {
    const msg = `${mapping[key]} Required`;
    updatedErrors[key] = key in updatedErrors ? [...updatedErrors[key], msg] : [msg];
  }
  return [formValues, updatedErrors];
};
export const validateSelectOption = (key) => (formValues, errors) => {
  const targetValue = formValues[key];
  const updatedErrors = Object.assign({}, errors);
  if (targetValue === 0 || (typeof targetValue === 'string' && targetValue.trim().length === 0)) {
    const msg = `Select a ${mapping[key]} `;
    updatedErrors[key] = key in updatedErrors ? [...updatedErrors[key], msg] : [msg];
  }
  return [formValues, updatedErrors];
};
export const validateDependencyBasedRequired = (key, conditionalKey) => (formValues, errors) => {
  const condition = formValues[conditionalKey];
  const targetValue = formValues[key];
  const updatedErrors = Object.assign({}, errors);
  if (condition && targetValue === null || (typeof targetValue === 'string' && targetValue.trim().length === 0)) {
    const msg = `${mapping[key]} Required`;
    updatedErrors[key] = key in updatedErrors ? [...updatedErrors[key], msg] : [msg];
  }
  return [formValues, updatedErrors];
};
export const validateEmail = (key) => (formValues, errors) => {
  const targetValue = formValues[key];
  const updatedErrors = Object.assign({}, errors);
  const EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (targetValue && (typeof targetValue !== 'string' || (targetValue.length > 0 && !EMAIL.test(targetValue)))) {
    const msg = 'The format of the email address is invalid';
    updatedErrors[key] = key in updatedErrors ? [...updatedErrors[key], msg] : [msg];
  }
  return [formValues, updatedErrors];
};
export const validatePhoneNo = (key) => (formValues, errors) => {
  const targetValue = formValues[key];
  const updatedErrors = Object.assign({}, errors);
  const PHONE_NO = /^\+?(88)?0?1[3456789][0-9]{8}\b/;
  if (targetValue && (typeof targetValue !== 'string' || (targetValue.length > 0 && !PHONE_NO.test(targetValue)))) {
    const msg = 'The format of the phone number is invalid.';
    updatedErrors[key] = key in updatedErrors ? [...updatedErrors[key], msg] : [msg];
  }
  return [formValues, updatedErrors];
};
export const validateMaxLength = (key, maxLength) => (formValues, errors) => {
  const targetValue = formValues[key];
  const updatedErrors = Object.assign({}, errors);
  if (typeof targetValue === 'string' && targetValue.length !== 0 && targetValue.length > maxLength) {
    const msg = ` Please enter within ${maxLength} characters.`;
    updatedErrors[key] = key in updatedErrors ? [...updatedErrors[key], msg] : [msg];
  }
  return [formValues, updatedErrors];
};
export const validateMinLength = (key, minLength) => (formValues, errors) => {
  const targetValue = formValues[key];
  const updatedErrors = Object.assign({}, errors);
  if (typeof targetValue === 'string' && targetValue.length !== 0 && targetValue.length < minLength) {
    const msg = ` Please enter at least ${minLength} characters.`;
    updatedErrors[key] = key in updatedErrors ? [...updatedErrors[key], msg] : [msg];
  }
  return [formValues, updatedErrors];
};
export const validateMinVal = (key, minVal) => (formValues, errors) => {
  const targetValue = formValues[key];
  const updatedErrors = Object.assign({}, errors);
  if (targetValue !== null && targetValue !== "" && Number(targetValue) < minVal) {
    const msg = `Please enter ${minVal} or larger value than ${minVal}`;
    updatedErrors[key] = key in updatedErrors ? [...updatedErrors[key], msg] : [msg];
  }
  return [formValues, updatedErrors];
};
const queue = (...fns) => (...args) => fns.reduce((v, f) => f(...v), args);
export const validates = (...fns) => (...args) => {
  if (fns.length > 0) {
    const [, errs] = queue(...fns)(...args);
    return errs;
  }
  return args[1];
};