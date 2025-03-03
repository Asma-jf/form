"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Formcontroller from "@/app/form/text-inout/page";
interface FormInputs {
  username: string;
  password: string;
}

const SignupForm: React.FC = () => {
  const { handleSubmit, control } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Username:", data.username);
    console.log("Password:", data.password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl shadow-lg w-80"
      >
        <h2 className="text-2xl mb-4 text-center font-bold">فرم ثبت‌نام</h2>

        <Formcontroller
          name="username"
          control={control}
          rules={{ required: "نام کاربری الزامی است"}}
          label="نام و نام خانوادگی"
          placeholder= "نام و نام خانوادگی"
        />
    <Formcontroller
          name="password"
          control={control}
          rules={{ required: "نام کاربری الزامی است"}}
          label="پسورد"
          placeholder= " پسورد خودر را وارد کنید  "
        />
       
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          ثبت‌نام
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
