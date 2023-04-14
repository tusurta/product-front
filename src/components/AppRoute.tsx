import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { User } from "./pages/User";
import { Order } from "./pages/Order";
import { Pets } from "./pages/Pets";
import { ROUTE_PATH } from "../common/constants";

const AppRoute = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATH.HOME} element={<Home />} />
      <Route path={ROUTE_PATH.USER} element={<User />} />
      <Route path={ROUTE_PATH.ORDER} element={<Order />} />
      <Route path={ROUTE_PATH.PETS} element={<Pets />} />
    </Routes>
  );
};

export default AppRoute;
