import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";

import Register from "../components/Register.jsx";
import Login from "../components/Login.jsx";
import CartPage from "../pages/books/CartPage.jsx";
import CheckoutPage from "../pages/books/CheckoutPage.jsx";
import SingleBook from "../pages/books/SingleBooks.jsx";
import OrderPage from "../pages/books/OrderPage.jsx";
import PrivateRoute from "./Privateroute";
import AdminLogin from "../components/AdminLogin.jsx";
import AdminRoute from "./AdminRoute.jsx";
import DashboardLayout from "../pages/admin/DashboardLayout.jsx";
import Dashboard from "../pages/admin/Dashboard.jsx";
import ManageBooks from "../pages/admin/manageBooks/ManageBooks.jsx";
import AddBook from "../pages/admin/addBook/AddBook.jsx";
import UpdateBook from "../pages/admin/EditBook/UploadBook.jsx";
import ManageOrders from "../pages/admin/manageOrders/ManageOrders.jsx";
import Favorites from "../pages/admin/Favorites/favorites.jsx";
import SearchResults from "../pages/books/SearchResults.jsx";
import AllBooks from "../pages/books/AllBooks.jsx";
import Copyright from "../pages/Copyright.jsx";
import About from "../pages/About.jsx";
import Terms from "../pages/Terms.jsx";
import Privacy from "../pages/Privacy.jsx";
import Privateroute from "./Privateroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: (
          <Privateroute>
            <OrderPage />
          </Privateroute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/books",
        element: <AllBooks />,
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/search",
        element: <SearchResults />,
      },
      {
        path: "/copyright",
        element: <Copyright />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: "add-new-book",
        element: (
          <AdminRoute>
            <AddBook />
          </AdminRoute>
        ),
      },
      {
        path: "edit-book/:id",
        element: (
          <AdminRoute>
            <UpdateBook />
          </AdminRoute>
        ),
      },
      {
        path: "manage-books",
        element: (
          <AdminRoute>
            <ManageBooks />
          </AdminRoute>
        ),
      },
      {
        path: "manage-orders",
        element: (
          <AdminRoute>
            <ManageOrders />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
