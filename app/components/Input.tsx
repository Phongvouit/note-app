"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  required,
  register,
  errors,
  placeholder
}) => {
  return (
    <input
      id={id}
      className="
        flex
        w-full
        bg-white
        border-b-2
        border-sky-500
        pb-1
        text-sm
        placeholder:text-neutral-400
        disabled:cursor-not-allowed
        disabled:opacity-50
        focus:outline-none
        "
      placeholder={placeholder}
      type={type}
      autoComplete={id}
      {...register(id, {required})}
    ></input>
  );
};
export default Input;
