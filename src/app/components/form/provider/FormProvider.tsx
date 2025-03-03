"use client"
import react, {ReactNode } from "react"
import { FormProvider, useForm } from "react-hook-form"
interface FormProviderWrapper {
    onSubmit: SubmitHandler;
    children: ReactNode;
  }
const FormProviderWrapper=({onSubmit,children}:FormProviderWrapper)=>{
    const methods =useForm()
    return(
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
        </FormProvider>
    )
}
export default FormProviderWrapper;