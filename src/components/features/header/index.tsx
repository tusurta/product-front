import { Avatar } from "./components/Avatar";
import { Logo } from "./components/Logo";
import { SearchForm } from "./components/SearchForm";

export const Header = () => {
  return (
    <div className="navbar bg-base-100 w-full">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-none gap-2">
        <SearchForm />
        <Avatar />
      </div>
    </div>
  );
};
