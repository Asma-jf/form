import React, { ReactNode } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

interface FormProviderWrapperProps {
  children: ReactNode;
  methods: UseFormReturn<any>;
  onSubmit: (data: any) => void;  
}

const FormProviderWrapper: React.FC<FormProviderWrapperProps> = ({ children, onSubmit, methods }) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default FormProviderWrapper;
