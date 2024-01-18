import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./components/App";
import { About } from "./pages/about";
import { Shop } from "./pages/shop";
// import About from "./pages/about/About";
// import Shop from "./pages/shop/Shop";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback='Loading...'>
            <About />
          </Suspense>
        ),
        // element: <About />,
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback='Loading...'>
            <Shop />
          </Suspense>
        ),
        // element: <Shop />,
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
