"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormTextInput from "@/components/form/text-inout/FormTextInput";
import FormProviderWrapper from "./provider/FormProvider";

interface FormInputs {
  username: string;
  password: string;
}

const SignupForm: React.FC = () => {
  const methods = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Username:", data.username);
    console.log("Password:", data.password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <FormProviderWrapper onSubmit={onSubmit} methods={methods}>
        <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
          <h2 className="text-2xl mb-4 text-center font-bold">فرم ثبت‌نام</h2>

          <FormTextInput
            name="username"
            rules={{ required: "نام کاربری الزامی است" }}
            placeholder="نام و نام خانوادگی"
          />
          <FormTextInput
            name="password"
            rules={{ required: "پسورد الزامی است" }}
            placeholder="پسورد خود را وارد کنید"
            type="password"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            ثبت‌نام
          </button>
        </div>
      </FormProviderWrapper>
    </div>
  );
};

export default SignupForm;
