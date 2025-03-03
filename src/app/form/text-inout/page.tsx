import React from "react";
import { Controller, Control, RegisterOptions } from "react-hook-form";
import { Input } from "@heroui/input";
interface controller {
    name: string;
    control:Control<any>;
    rules?:RegisterOptions
    
  }
const Formcontroller:React.FC<controller> = ({
    name,
    control,
    rules,
    ...inputProps
  })=>{
   
return(
    <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field}) => (
      <div>
        <Input {...field} {...inputProps} />
       
      </div>
    )}
  />
)}
export default Formcontroller