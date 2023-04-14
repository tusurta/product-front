import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  theme?: string;
};

export const Layout: FC<Props> = ({ children, theme }) => {
  return (
    <div
      data-theme={theme ?? "halloween"}
      className="flex flex-col min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
    >
      {children}
    </div>
  );
};
