// SuccessPage.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const SuccessPage: React.FC = () => {
  const location = useLocation();
  const { name, email, coverLetter, resume } = (location.state as any) || {};

  return (
    <div>
      <h1>Application Submitted Successfully!</h1>
      <h2>Application Preview:</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Cover Letter: {coverLetter}</p>
      <p>Resume: {resume?.name || 'Not provided'}</p>
    </div>
  );
};

export default SuccessPage;
