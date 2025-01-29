import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import ListingPage from "./pages/ListingPage";
import DetailsPage from "./pages/DetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ListingPage />,
      },

      {
        path: "details",
        element: <DetailsPage />,
      },
    ],
  },
]);
