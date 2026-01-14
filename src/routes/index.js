import App from "../App.jsx";
import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";
import AdminPages from "../pages/admin/AdminPages.jsx";
import AdminHome from "../pages/admin/AdminHome.jsx";
import AdminReport from "../pages/admin/AdminReport.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Home /> }],
  },

  {
    path: "/admin",
    element: <AdminPages />,
    children: [
      { index: true, element: <AdminHome /> },

      { path: "report", element: <AdminReport /> },
    ],
  },
];

const router = createHashRouter(routes);

export default router;
