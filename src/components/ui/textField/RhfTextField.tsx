import { TextField, TextFieldProps } from "components/ui/textField/TextField";
import { FieldValues, useController, UseControllerProps } from "react-hook-form";

export type RhfTextFieldProps<T extends FieldValues> = TextFieldProps & UseControllerProps<T>;

export const RhfTextField = <T extends FieldValues>(props: RhfTextFieldProps<T>) => {
  const { name, control } = props;
  const {
    field: { ref, ...rest },
    fieldState: { error },
  } = useController<T>({ name, control });

  return <TextField inputRef={ref} {...rest} {...props} errorMessage={error && error.message} />;
};
