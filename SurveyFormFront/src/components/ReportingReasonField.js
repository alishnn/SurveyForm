import React from 'react';

function ReportingReasonField({ value, onChange, isVisible }) {
  return isVisible ? (
    <div>
      <label htmlFor="reportingReason">
        Explanation for not reporting:
      </label>
      <textarea
        id="reportingReason"
        name="explanation"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  ) : null;
}

export default ReportingReasonField;
