// JobDetails.tsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BlueButton } from "./Button";

const JobDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { job } = (location.state as any) || {};
  const renderParagraphs = (htmlContent: any) => {
    const paragraphs = htmlContent.split("</p>");

    return paragraphs.map((paragraph: any, index: number) => (
      <p key={index} dangerouslySetInnerHTML={{ __html: paragraph + "</p>" }} />
    ));
  };
  const applicationHandle = () => {
    navigate(`/apply`);
  };

  return (
    <div className="mx-5 px-5 ">
      <h1 className="text-center font-extrabold text-lg">Job Details</h1>
      {job && (
        <div>
          <h2 className="font-bold text-lg my-2 mb-1">{job.title}</h2>
          {renderParagraphs(job.description)}

          <BlueButton text={"Apply"}  onClick={applicationHandle} />
        </div>
      )}
    </div>
  );
};

export default JobDetails;
