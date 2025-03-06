import React from "react";
import { Controller, useFormContext, RegisterOptions } from "react-hook-form";
import { Input } from "@heroui/input";
interface FormTextInput {
    name: string;
    rules?: RegisterOptions

}
const FormTextInput: React.FC<FormTextInput> = ({
    name,
    rules,
    ...inputProps
}) => {
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}

            render={({ field }) => (
                <div>
                    <Input {...field} {...inputProps} />

                </div>
            )}
        />
    )
}
export default FormTextInput