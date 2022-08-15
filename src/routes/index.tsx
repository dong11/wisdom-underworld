import React, { FC, Fragment, Suspense } from "react";
import { matchRoutes, Navigate, useLocation } from "react-router-dom";
import Loading from '../components/Loading';
import { useAppSelector } from "../redux/hooks";
import { selectLogined } from "../redux/user";
import { RouteProps } from "../types/routes";

function lazyLoad(Comp: React.LazyExoticComponent<any>): React.ReactNode {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <Comp />
    </Suspense>
  );
}

const routes: RouteProps[] = [
  {
    path: "/",
    meta: {
      // auth: true,
    },
    element: lazyLoad(React.lazy(() => import("../pages/home"))),
  },
  {
    path: "/login",
    element: lazyLoad(React.lazy(() => import("../pages/login"))),
  },
  {
    path: "*",
    element: lazyLoad(React.lazy(() => import("../pages/error/404"))),
  },
];

export const RouterAuth: FC<any> = ({ children }: any) => {
  const isLogin = useAppSelector(selectLogined);
  const location = useLocation();
  // 匹配当前层级路由树
  const mathchs = matchRoutes(routes, location);
  // matchs 是返回的层级路由
  // 第一个元素为根路由 最后一个元素为当前路由
  // 从前往后匹配
  const isNeedLogin = mathchs?.some((item) => {
    const route: RouteProps = item.route;

    // 没有配置字段的直接返回
    if (!route.meta) return false;
    // 返回是否需要登录
    return route.meta.auth;
  });

  if (isNeedLogin && !isLogin) {
    console.log("需要登录");
    // 跳转到登录  state 保存源路由
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <Fragment>{children}</Fragment>;
};

export default routes;
