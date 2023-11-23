// JobDetails.tsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const JobDetails: React.FC = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const { job } = (location.state as any) || {};
  const renderParagraphs = (htmlContent :any) => {
    
    const paragraphs = htmlContent.split('</p>');

    return paragraphs.map((paragraph :any, index:number) => (
      <p key={index} dangerouslySetInnerHTML={{ __html: paragraph + '</p>' }} />
    ));
  };
const applicationHandle = ()=>{
  navigate(`/apply`)
}

  return (
    <div>
      <h1>Job Details</h1>
      {job && (
        <div>
          <h2>{job.title}</h2> 
          {renderParagraphs(job.description)}
          <button onClick={applicationHandle}>Apply</button>

        </div>
      )}
    </div>
  );
};

export default JobDetails;
