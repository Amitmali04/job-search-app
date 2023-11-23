// LandingPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const navigate = useNavigate();

  const handleLanguageSelection = () => {
    // Redirect to jobs page with the selected language as a query parameter
    navigate(`/jobs?language=${selectedLanguage}`);
  };

  return (
    <div className="w-full">
      <h1 className="text-yellow-700 text-center">Job Search App</h1>
      <input
        type="text"
        placeholder="Enter programming language"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      />
      <button onClick={handleLanguageSelection}>Search Jobs</button>

    </div>
  );
};

export default LandingPage;
