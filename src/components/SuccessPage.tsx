// SuccessPage.tsx
import React from 'react';
import {useLocation, useNavigate } from 'react-router-dom';
import { BlueButton } from './Button';

const SuccessPage: React.FC = () => {
  const location = useLocation();
  const history = useNavigate();
  const { name, email, coverLetter, resume } = (location.state as any) || {};

  const handleBack = () => {
    history("/");
  };
  return (
    <div className="w-full max-w-sm mx-auto shadow-xl my-36 p-5">
      <h1 className='bg-green-500 text-white text-center'>Application Submitted Successfully!</h1>
      <h2>Application Preview:</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Cover Letter: {coverLetter}</p>
      <p>Resume: {resume?.name || 'Not provided'}</p>

      <BlueButton text={"Back to Home"} onClick={handleBack}/>
    </div>
  );
};

export default SuccessPage;
