import React from 'react';

const CheckboxInput = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  error
}) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          onBlur={onBlur}
        />
        <span>{label}</span>
      </label>
      {error && <div style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>{error}</div>}
    </div>
  );
};

export default CheckboxInput;