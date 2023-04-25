import IconImg from "assets/user-icon.jpeg";
import { useHeader } from "../hooks/useHeader";

export const Avatar = () => {
  const { logout, goProfile, goOrders } = useHeader();
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={IconImg} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between" onClick={() => goProfile()}>
            Profile
          </a>
        </li>
        <li>
          <a className="justify-between" onClick={() => goOrders()}>
            Orders
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a onClick={() => logout()}>Logout</a>
        </li>
      </ul>
    </div>
  );
};
