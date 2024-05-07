import { RouteObject, RouterProvider, createBrowserRouter, } from "react-router-dom";
import { loginRoutes } from "./modules/login/routes";

import type { Router as RemixRouter } from '@remix-run/router';
import { useNotification } from "./shared/hooks/useNotification";

const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <div>Tela principal</div>,
    errorElement: <div>Pagina nao encontrada</div>
  }
]

const router: RemixRouter = createBrowserRouter([...mainRoutes, ...loginRoutes]);

function App() {
  const { contextHolder } = useNotification();
  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>

  );

}

export default App;
