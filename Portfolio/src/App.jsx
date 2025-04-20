import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./appLayout/MainLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
