import React from "react";
import RegistrationForm from "./RegistrationForm";

const RegisterPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-center mt-8 text-4xl text-gray-700 font-bold mb-2">
        Register:
      </h1>
      <RegistrationForm/>
    </div>
  );
};

export default RegisterPage;
