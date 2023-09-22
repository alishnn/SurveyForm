import React from 'react';

function EmailField({ value, onChange }) {
  return (
    <div>
      <label htmlFor="email">Business Email:</label>
      <input
        type="email"
        id="email"
        name="businessEmail"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default EmailField;
