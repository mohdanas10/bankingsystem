import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Services from "./Components/Service/Services.jsx";
import Error from "./Components/Error/Error.jsx";
import AdminHome from "./Components/AdminHome/AdminHome.jsx";
import AllCustomer from "./Components/AllCustomer/AllCustomer.jsx";
import CreateAccount from "./Components/CreateAccount/CreateAccount.jsx";
import CustomerTables from "./Components/CustomerTables/CustomerTables.jsx";
import EditCustomer from "./Components/EditCustomer/EditCustomer.jsx";
import AccountManager from "./Components/AccountManager/AccountManager.jsx";
import DeleteCustomer from "./Components/DeleteCustomer/DeleteCustomer.jsx";
import TransactionsTables from "./Components/TransactionsTables/TransactionsTables.jsx";
import UserInfo, { userInfoLoader } from "./Components/UserInfo/UserInfo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "",
        element: <Home />,
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
        path: "/services",
        element: <Services />,
      },
      {
        path: "/error",
        element: <Error />,
      },
      {
        path: "/adminhome",
        element: <AdminHome />,
      },
      {
        path: "/allcustomer",
        element: <AllCustomer />,
      },
      {
        path: "/createaccount",
        element: <CreateAccount />,
      },
      {
        path: "/customertables",
        element: <CustomerTables />,
      },
      {
        path: "/editcustomer/:id",
        element: <EditCustomer />,
      },
      {
        path: "/accountmanager/:id",
        element: <AccountManager />,
      },
      {
        path: "/deletecustomer/:id",
        element: <DeleteCustomer />,
      },
      {
        path: "/transactionstables/:id",
        element: <TransactionsTables />,
      },
      {
        path: "/userinfo",
        element: <UserInfo loader={userInfoLoader} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
