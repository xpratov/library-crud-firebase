import { Navigate } from "react-router-dom";
import { auth } from "./firebase/firebase";
import Home from "./pages/Home/Home";

const Protect = () => {
  if (auth.currentUser) {
    return <Home />;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
};

export default Protect;
