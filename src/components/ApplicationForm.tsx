// ApplicationForm.tsx
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const ApplicationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [resume, setResume] = useState<File | null>(null);
  const history = useNavigate();

  const handleFormSubmit = () => {
    // Handle form submission and navigate to success page
    // Transfer data to success page using state management
    history('/success', {  });
  };

  return (
    <div>
      <h1>Application Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Cover Letter:</label>
        <textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} />

        <label>Resume:</label>
        <input type="file" onChange={(e) => setResume(e.target.files?.[0] || null)} />

        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
