import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Protect from "./Protect";
import Header from "./general/components/Header";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import AddBook from "./pages/AddBook/AddBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Protect />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <Login />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Header />
        <SignUp />
      </>
    ),
  },
  {
    path: "/addBook",
    element: (
      <>
        <Header />
        <AddBook />
      </>
    ),
  },
]);

const Root = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default Root;
