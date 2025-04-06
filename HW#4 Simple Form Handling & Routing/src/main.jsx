import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import FavoritesPages from "./pages/FavoritesPages.jsx";
import FavoriteDetailPage from "./pages/FavoriteDetailPage.jsx";
import NotFoundPages from "./pages/NotFoundPages.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/fav",
        element: <FavoritesPages />,
      },
      {
        path: "/fav/:id",
        element: <FavoriteDetailPage />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "*",
    element: <NotFoundPages />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);