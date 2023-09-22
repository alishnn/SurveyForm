import React from 'react';

function LocationField({ value, onChange }) {
  return (
    <div>
      <label htmlFor="location">Your Base Location:</label>
      <input
        type="text"
        id="location"
        name="baseLocation"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default LocationField;
