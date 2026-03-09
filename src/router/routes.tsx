import type { ComponentType } from "react";
import { AppLayout, AuthLayout, PublicLayout, type LayoutProps } from "../layouts";
import ClientAreaPage from "../pages/ClientAreaPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import StaticPage from "../pages/StaticPage";
import ProtectedRoute from "./ProtectedRoute";

const ProtectedClientAreaPage = () => (
  <ProtectedRoute>
    <ClientAreaPage />
  </ProtectedRoute>
);

export type RouteDefinition = {
  path: string;
  component: ComponentType;
  layout: ComponentType<LayoutProps>;
};

const routes: RouteDefinition[] = [
  { path: "/", component: HomePage, layout: PublicLayout },
  { path: "/login", component: LoginPage, layout: AuthLayout },
  { path: "/app", component: ProtectedClientAreaPage, layout: AppLayout },
  { path: "/legal", component: () => <StaticPage pageKey="legal" />, layout: PublicLayout },
  { path: "/licenses", component: () => <StaticPage pageKey="licenses" />, layout: PublicLayout },
  { path: "/security", component: () => <StaticPage pageKey="security" />, layout: PublicLayout },
  { path: "/careers", component: () => <StaticPage pageKey="careers" />, layout: PublicLayout },
  { path: "/support", component: () => <StaticPage pageKey="support" />, layout: PublicLayout },
  { path: "/status", component: () => <StaticPage pageKey="status" />, layout: PublicLayout },
];

const notFoundRoute: RouteDefinition = {
  path: "*",
  component: NotFoundPage,
  layout: PublicLayout,
};

export function getRouteByPath(pathname: string): RouteDefinition {
  return routes.find((route) => route.path === pathname) ?? notFoundRoute;
}
