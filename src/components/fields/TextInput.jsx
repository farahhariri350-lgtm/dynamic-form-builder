import React from 'react';

const TextInput = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  type = 'text'
}) => {
  return (
    <div className="input-container" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label && (
        <label htmlFor={name} style={{ fontWeight: '600', fontSize: '14px', color: '#374151' }}>
          {label}
        </label>
      )}
      
      <input
        id={name}
        type={type}
     
        value={value || ''} 
        onChange={(e) => onChange(e.target.value)} 
        onBlur={onBlur}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '10px',
          border: `1px solid ${error ? '#ef4444' : '#d1d5db'}`,
          borderRadius: '6px',
          fontSize: '15px',
          outline: 'none',
          transition: 'border-color 0.2s'
        }}
      />

   
      {error && (
        <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '2px' }}>
          {error}
        </span>
      )}
    </div>
  );
};

export default TextInput;