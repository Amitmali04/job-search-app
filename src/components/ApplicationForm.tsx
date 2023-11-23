// ApplicationForm.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextAreaInput, TextFile, TextInput } from "./TextField";
import { BlueButton } from "./Button";



const ApplicationForm: React.FC = () => {
  const history = useNavigate();

  const [values, setValues] = useState({
    name:"",
    email:"",
    coverLetter:"",
    resume: ''
  });

  const handleFormSubmit = () => {

    history("/success", {state:values});
  };

  return (
    <div>
      <h1 className="text-center font-extrabold text-lg">Application Form</h1>

      <div className="w-full max-w-xs mx-auto">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleFormSubmit}
        >
          <TextInput
            label="Name"
            type={"text"}
            placeholder={"Jhon Doe"}
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e })}
          />

          <TextInput
            label="Email"
            type={"email"}
            placeholder={"Email"}
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e })}
          />

          <TextAreaInput
            label="Cover Letter"
            placeholder={"Cover Letter"}
            value={values.coverLetter}
            onChange={(e) => setValues({ ...values, coverLetter: e })}
          />
          <TextFile 
           label="Resume"
          type="file"
          onChange={(e) => setValues({...values, resume: e})}
          />

          <BlueButton text={"Apply"} />
        </form>
      </div>

    </div>
  );
};

export default ApplicationForm;
