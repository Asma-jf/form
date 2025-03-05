import React from "react";
import SignupForm from "../components/form/SignupForm";  // ایمپورت فرم

const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <SignupForm />
    </div>
  );
};

export default Page