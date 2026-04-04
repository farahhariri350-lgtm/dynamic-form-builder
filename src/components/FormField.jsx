import React from 'react';
import TextInput from './fields/TextInput';
import SelectInput from './fields/SelectInput';
import CheckboxInput from './fields/CheckboxInput';
import TextAreaInput from './fields/TextareaInput'; 

const FormField = ({ field, context }) => {
  const fieldMap = {
    text: TextInput,
    email: TextInput,
    number: TextInput,
    select: SelectInput,
    checkbox: CheckboxInput,
    textarea: TextAreaInput 
  };

  const Component = fieldMap[field.type] || TextInput;

  return (
    <div className="field-wrapper">
      <Component
        {...field}
        value={context.values[field.name] || ''}
        onChange={(val) => context.handleChange(field.name, val)}
        error={context.errors[field.name]}
      />
    </div>
  );
};

export default FormField;