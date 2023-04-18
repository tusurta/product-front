import { Route, Routes, Navigate } from "react-router-dom";
import Home from "components/pages/Home";
import { User } from "components/pages/User";
import { Order } from "components/pages/Order";
import { Pets } from "components/pages/Pets";
import { ROUTE_PATH } from "common/constants";
import { RouteAuthGuard } from "components/RouteAuthGuard";
import { Login } from "components/pages/Login";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<RouteAuthGuard />}>
        <Route path={ROUTE_PATH.HOME} element={<Home />} />
        <Route path={ROUTE_PATH.USER} element={<User />} />
        <Route path={ROUTE_PATH.ORDER} element={<Order />} />
        <Route path={ROUTE_PATH.PETS} element={<Pets />} />
      </Route>
      <Route path={ROUTE_PATH.LOGIN} element={<Login />} />
      <Route path="*" element={<Navigate to={ROUTE_PATH.HOME} />} />
    </Routes>
  );
};

export default AppRoute;
