import React from 'react';

const NumberInput = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  min,
  max
}) => {
  const handleChange = (e) => {
    const val = e.target.value;
    onChange(val === '' ? '' : Number(val));
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <label htmlFor={name} style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
        {label}
      </label>
      <input
        id={name}
        type="number"
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        placeholder={placeholder}
        min={min}
        max={max}
        style={{
          width: '100%',
          padding: '8px',
          border: `1px solid ${error ? '#dc2626' : '#d1d5db'}`,
          borderRadius: '4px',
          fontSize: '14px'
        }}
      />
      {error && <div style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>{error}</div>}
    </div>
  );
};

export default NumberInput;