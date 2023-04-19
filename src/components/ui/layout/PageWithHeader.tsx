import { FC, ReactNode } from "react";
import { Footer } from "../others/Footer";

type Props = {
  header: ReactNode;
  children: ReactNode;
  theme?: string;
};

export const PageWithHeader: FC<Props> = ({ children, theme, header }) => {
  return (
    <div data-theme={theme ?? "halloween"}>
      <div className="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content shadow-sm">
        {header}
      </div>
      <div className="flex flex-col min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        {children}
      </div>
      <Footer />
    </div>
  );
};
