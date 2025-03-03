"use client";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input } from "@heroui/input";

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

        <Controller
          name="username"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => (
            <Input
              label="Username"
              value={field.value || ""}
              onChange={(e) => field.onChange(e.target.value)}
              className="w-full mb-3 p-2 border rounded-md"
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => (
            <Input
              type="password"
              placeholder="Password"
              value={field.value || ""}
              onChange={(e) => field.onChange(e.target.value)}
              className="w-full mb-4 p-2 border rounded-md"
            />
          )}
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
