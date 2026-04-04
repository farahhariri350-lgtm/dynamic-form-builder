import { useState, useEffect } from 'react';
import { validateField } from '../utils/validation';

export const useFormBuilder = (config, initialValues = {}) => {
  const STORAGE_KEY = 'dynamic_form_data';

  
  const [values, setValues] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsedSaved = saved ? JSON.parse(saved) : {};
    return { ...initialValues, ...parsedSaved };
  });

  const [errors, setErrors] = useState({});

 
  useEffect(() => {
    if (initialValues && Object.keys(initialValues).length > 0) {
      setValues(prev => {
        const newValues = { ...prev, ...initialValues };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newValues));
        return newValues;
      });
    }
  }, [initialValues]); 

  const handleChange = (name, value) => {
    setValues(prev => {
      const newValues = { ...prev, [name]: value };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newValues));
      return newValues;
    });

    const field = config.find(f => f.name === name);
    if (field) {
      const error = validateField(value, field.validation);
      setErrors(prev => ({ ...prev, [name]: error || '' }));
    }
  };

  const resetForm = () => {
    setValues({});
    setErrors({});
    localStorage.removeItem(STORAGE_KEY);
  };

  const validateAll = () => {
    let isValid = true;
    const newErrors = {};
    config.forEach(field => {
      const val = values[field.name] || '';
      const error = validateField(val, field.validation);
      if (error) { newErrors[field.name] = error; isValid = false; }
    });
    setErrors(newErrors);
    return isValid;
  };

  return { values, errors, handleChange, resetForm, validateAll };
};