// LandingPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const navigate = useNavigate();

  const handleLanguageSelection = () => {

    navigate(`/jobs?language=${selectedLanguage}`);
  };

  return (
    <div className="w-full">
      <h1 className="text-center font-extrabold text-lg">Job Search App</h1>
      <div className="mt-5 text-center mx-10">
        <input
          className="border-black rounded px-10 bg-gray-100"
          type="text"
          placeholder="Enter programming language"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        />

        <button
          onClick={handleLanguageSelection}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 border border-blue-700 rounded"
        >
          Search Jobs
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
