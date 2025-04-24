import React from "react";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Flights from "./components/Flights";
import Passengers from "./components/Passengers";
import Booking from "./components/Booking";
import Reports from "./components/Reports";
import ScrollToTop from "./components/ScrollToTop";
import Crew from "./components/Crew";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Help from "./components/Help";
import Guide from "./components/Guide";
import Maintenance from "./components/Maintenance";
import Europe from "./components/Europe";
import Asia from "./components/Asia";
import America from "./components/America";
import Africa from "./components/Africa";
import Careers from "./components/Careers";
import Partners from "./components/Partners";
import Press from "./components/Press";
import Login from "./components/Login";
import Confirmation from "./components/Confirmation";
import Error from "./components/Error";

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
    errorElement: <Error />,
    children: [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
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
      path: "/confirmation",
      element: <Confirmation />,
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
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/faq",
      element: <FAQ />
    },
    {
      path: "/help",
      element: <Help />
    },
    {
      path: "/guide",
      element: <Guide />
    },
    {
      path: "/maintenance",
      element: <Maintenance />
    },
    {
      path: "/europe",
      element: <Europe />
    },
    {
      path: "/asia",
      element: <Asia />
    },
    {
      path: "/america",
      element: <America />
    },
    {
      path: "/africa",
      element: <Africa />
    },
    {
      path: "/careers",
      element: <Careers />
    },
    {
      path: "/partners",
      element: <Partners />
    },
    {
      path: "/press",
      element: <Press />
    },
    {
      path: "*",
      element: <Error />,
    }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}