import React from 'react';

const SelectInput = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  options
}) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label htmlFor={name} style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
        {label}
      </label>
      <select
        id={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        style={{
          width: '100%',
          padding: '8px',
          border: `1px solid ${error ? '#dc2626' : '#d1d5db'}`,
          borderRadius: '4px',
          fontSize: '14px',
          backgroundColor: 'white'
        }}
      >
        <option value="">Select...</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <div style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>{error}</div>}
    </div>
  );
};

export default SelectInput;