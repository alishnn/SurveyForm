import React from 'react';

function BenchStatusField({ value, onChange }) {
  return (
    <div>
      <label>Bench Status:</label>
      <select
        name="benchStatus"
        value={value}
        onChange={onChange}
      >
        <option value="On Bench">On Bench</option>
        <option value="On Shadow Project">On Shadow Project</option>
        <option value="On Billable Project">On Billable Project</option>
      </select>
    </div>
  );
}

export default BenchStatusField;
