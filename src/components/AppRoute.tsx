import { Route, Routes, Navigate } from "react-router-dom";
import Home from "components/pages/Home";
import { User } from "components/pages/User";
import { Order } from "components/pages/Order";
import { Products } from "components/pages/Products";
import { ROUTE_PATH } from "common/constants";
import { RouteAuthGuard } from "components/RouteAuthGuard";
import { Login } from "components/pages/Login";
import Signup from "components/pages/Signup";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<RouteAuthGuard />}>
        <Route path={ROUTE_PATH.HOME} element={<Home />} />
        <Route path={ROUTE_PATH.USER} element={<User />} />
        <Route path={ROUTE_PATH.ORDER} element={<Order />} />
        <Route path={ROUTE_PATH.PRODUCTS} element={<Products />} />
      </Route>
      <Route path={ROUTE_PATH.LOGIN} element={<Login />} />
      <Route path={ROUTE_PATH.SIGNUP} element={<Signup />} />
      <Route path="*" element={<Navigate to={ROUTE_PATH.HOME} />} />
    </Routes>
  );
};

export default AppRoute;
