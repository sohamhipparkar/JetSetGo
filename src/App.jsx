import React from "react";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Flights from "./components/Flights";
import Passengers from "./components/Passengers";
import Booking from "./components/Booking";
import Reports from "./components/Reports";
import ScrollToTop from "./components/ScrollToTop";
import Crew from "./components/Crew";

function Root() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/flights",
      element: <Flights />,
    },
    {
      path: "/passengers",
      element: <Passengers />,
    },
    {
      path: "/bookings",
      element: <Booking />,
    },
    {
      path: "/reports",
      element: <Reports />,
    },
    {
      path: "/crew",
      element: <Crew />,
    }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}