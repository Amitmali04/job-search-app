// JobList.tsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { JobInterface } from './type/JobInterface';
import '../../src/App.css'

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Array<JobInterface>>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const language = new URLSearchParams(location.search).get('language');
  console.log(jobs)
  useEffect(() => {

    // Fetch jobs based on the selected language from Arbeitnow API
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://www.arbeitnow.com/api/job-board-api', {
          params: { language: language }
        });
        setJobs(response.data.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    if (language) {
      fetchJobs();
    }
  }, [language]);

  const handleJobSelection = (jobId: any) => {
    navigate(`/jobsdetail`, {state:{"job":jobId}});
  };
  
  return (
    <div>
      <h1 className="text-center font-extrabold text-lg">Job List</h1>
      {jobs && jobs.map((job) => (
        <div key={job.id} className="boder shadow-sm my-2 m-5 "
        onClick={() => handleJobSelection(job)}
        >
          <p className='bg-gray-400 px-2 '>{job.title}</p>

        </div>
      ))}
    </div>
  );
};

export default JobList;
