import React from 'react';
import ApplicationForm from '@/components/ApplicationForm';

const Application = () => {
  const handleFormSubmit = (data: any) => {
    // Here you can handle the form submission
    // For example, send data to an API or show success message
    console.log('Application submitted:', data);
  };

  return <ApplicationForm onSubmit={handleFormSubmit} />;
};

export default Application;