import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Box: FC<Props> = ({ children }) => {
  return (
    <div
      className="rounded-box w-full text-base-content grid gap-5 border p-12"
      data-theme="luxury"
    >
      {children}
    </div>
  );
};
