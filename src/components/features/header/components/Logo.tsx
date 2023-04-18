import { useHeader } from "../hooks/user.hooks";

export const Logo = () => {
  const { goHome } = useHeader();
  return (
    <a className="btn btn-ghost normal-case text-xl" onClick={() => goHome()}>
      Pet Shop
    </a>
  );
};
