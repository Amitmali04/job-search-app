// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import ApplicationForm from './components/ApplicationForm';
import SuccessPage from './components/SuccessPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<LandingPage />} />
        <Route path="/jobs"  element={<JobList />} />
        <Route path="/jobsdetail"  element={<JobDetails />} />
        <Route path="/apply"  element={<ApplicationForm />} />
        <Route path="/success"  element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
