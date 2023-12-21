import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";

import * as indexRoute from "./routes/index";
import * as settingsRoute from "./routes/settings";

const routeConfig: RouteObject[] = [
  { path: "/", ...indexRoute },
  { path: "/settings", ...settingsRoute },
];
const router = createBrowserRouter(routeConfig, { basename: "/app" });

export function App() {
  return <RouterProvider router={router} />;
}
