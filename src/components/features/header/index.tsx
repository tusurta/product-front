import { Avatar } from "./components/Avatar";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { SearchForm } from "./components/SearchForm";

export const Header = () => {
  return (
    <div className="navbar bg-base-100 w-full">
      <div className="navbar-start">
        <Menu />
      </div>
      <div className="navbar-center">
        <Logo />
      </div>
      <div className="navbar-end gap-2">
        <SearchForm />
        <Avatar />
      </div>
    </div>
  );
};
