import React, { useState } from 'react';
import NameField from './NameField';
import EmailField from './EmailField';
import LocationField from './LocationField';
import ReportingField from './ReportingField';
import ReportingReasonField from './ReportingReasonField';
import CertificationsField from './CertificationsField';
import BenchStatusField from './BenchStatusField';
import axios from 'axios';

import './SurveyForm.css';

function SurveyForm() {
  const [formData, setFormData] = useState({
    
    name: '',
    businessEmail: '',
    baseLocation: '',
    reportingToBase: '',
    explanation: '',
    certifications: '',
    benchStatus: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

 

    try {

      const response = await fetch('http://localhost:8080/addSurveyData', {

        method: 'POST',

        headers: {

          'Content-Type': 'application/json',

        },

        body: JSON.stringify(formData),

      });

 

     

    } catch (error) {

      console.error('Error:', error);

    }

  };
  return (
    <form onSubmit={handleSubmit}>
      <NameField value={formData.name} onChange={handleChange} />
      <EmailField value={formData.email} onChange={handleChange} />
      <LocationField value={formData.location} onChange={handleChange} />
      <ReportingField value={formData.reporting} onChange={handleChange} />
      <ReportingReasonField
        value={formData.reportingReason}
        onChange={handleChange}
        isVisible={formData.reporting === 'No'}
      />
      <CertificationsField
        value={formData.certifications}
        onChange={handleChange}
      />
      <BenchStatusField
        value={formData.benchStatus}
        onChange={handleChange}
      />
      <button className="submit-button" type="submit">Submit</button>
    </form>
  );
}

export default SurveyForm;
