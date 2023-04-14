import { FC } from "react";

type Props = {
  text: string;
  click?: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export const PrimaryBtn: FC<Props> = ({ text, click, disabled, loading }) => {
  return (
    <input
      className={`btn w-full my-3 ${loading && "loading"} ${
        disabled ? "btn-disabled" : "btn-primary"
      }`}
      type={"submit"}
      value={text}
      onClick={click}
    />
  );
};
