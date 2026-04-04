export const validateField = (value, rules) => {
  if (!rules) return null;

  if (rules.required) {
    if (value === undefined || value === null || value === '') {
      return 'This field is required';
    }
    if (typeof value === 'boolean' && !value) {
      return 'This field is required';
    }
  }


  if (!rules.required && (value === undefined || value === null || value === '')) {
    return null;
  }


  if (typeof value === 'string') {
    if (rules.minLength && value.length < rules.minLength) {
      return `Minimum length is ${rules.minLength} characters`;
    }
    if (rules.maxLength && value.length > rules.maxLength) {
      return `Maximum length is ${rules.maxLength} characters`;
    }
    if (rules.pattern) {
      const regex = new RegExp(rules.pattern);
      if (!regex.test(value)) {
        return 'Invalid format';
      }
    }
  }


  if (typeof value === 'number') {
    if (rules.min !== undefined && value < rules.min) {
      return `Minimum value is ${rules.min}`;
    }
    if (rules.max !== undefined && value > rules.max) {
      return `Maximum value is ${rules.max}`;
    }
  }

  if (rules.custom) {
    const customError = rules.custom(value);
    if (customError) return customError;
  }

  return null;
};