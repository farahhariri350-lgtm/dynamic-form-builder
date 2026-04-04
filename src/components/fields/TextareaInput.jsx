import React from 'react';

const TextareaInput = ({ name, label, value, onChange, placeholder, error }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <textarea
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={error ? 'input-error' : ''}
        rows="3" 
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};
export default TextareaInput;