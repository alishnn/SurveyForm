import React from 'react';

function CertificationsField({ value, onChange }) {
  return (
    <div>
      <label htmlFor="certifications">Certification Achieved:</label>
      <input
        type="text"
        id="certifications"
        name="certifications"
        value={value}
        onChange={onChange}
      />
      <p>Enter certifications separated by commas (e.g., Cert1, Cert2)</p>
    </div>
  );
}

export default CertificationsField;
