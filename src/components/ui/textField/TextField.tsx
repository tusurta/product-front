import { FC, HTMLInputTypeAttribute, Ref } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type TextFieldProps = {
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  register?: UseFormRegisterReturn;
  errorMessage?: string;
  inputRef?: Ref<HTMLInputElement>;
};

export const TextField: FC<TextFieldProps> = ({ label, placeholder, type, register }) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type ?? "text"}
        placeholder={placeholder}
        className="input input-bordered w-full"
        {...register}
      />
    </div>
  );
};
