import { FC, Fragment, Ref } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
export type CheckboxProps = {
  label?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  errorMessage?: string;
  inputRef?: Ref<HTMLInputElement>;
};
export const CheckboxWithLabel: FC<CheckboxProps> = ({ register }) => {
  return (
    <Fragment>
      <input
        className="checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        {...register}
        type="checkbox"
      />
      <label className="ml-2 text-sm font-medium">withError</label>
    </Fragment>
  );
};
