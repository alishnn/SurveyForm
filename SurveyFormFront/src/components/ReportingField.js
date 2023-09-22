import React from 'react';

function ReportingField({ value, onChange }) {
  return (
    <div>
      <label>Are you currently reporting to your base location?</label>
      <div>
        <input
          type="radio"
          id="reportingToBase-yes"
          name="reportingToBase"
          value="Yes"
          checked={value === 'Yes'}
          onChange={onChange}
        />
        <label htmlFor="reportingToBase-yes">Yes</label>
      </div>
      <div>
        <input
          type="radio"
          id="reportingToBase-no"
          name="reportingToBase"
          value="No"
          checked={value === 'No'}
          onChange={onChange}
        />
        <label htmlFor="reportingToBase-no">No</label>
      </div>
    </div>
  );
}

export default ReportingField;
