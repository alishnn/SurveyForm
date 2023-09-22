import React from 'react';

function NameField({ value, onChange }) {
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default NameField;
