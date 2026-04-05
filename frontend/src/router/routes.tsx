import type { ComponentType } from "react";
import { AppLayout, AuthLayout, PublicLayout, type LayoutProps } from "../layouts";
import ClientAreaPage from "../pages/ClientAreaPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateAssistantPage from "../pages/PrivateAssistantPage";
import ProtectedRoute from "./ProtectedRoute";

const ProtectedClientAreaPage = () => (
  <ProtectedRoute>
    <ClientAreaPage />
  </ProtectedRoute>
);

const ProtectedPrivateAssistantPage = () => (
  <ProtectedRoute>
    <PrivateAssistantPage />
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
  { path: "/app/assistant", component: ProtectedPrivateAssistantPage, layout: AppLayout },
];

const notFoundRoute: RouteDefinition = {
  path: "*",
  component: NotFoundPage,
  layout: PublicLayout,
};

export function getRouteByPath(pathname: string): RouteDefinition {
  return routes.find((route) => route.path === pathname) ?? notFoundRoute;
}
