import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to={"/"}>
          <img className="logo" src="/logo.svg" alt="Logo" />
        </Link>
        {auth.currentUser ? (
          <div>
            <Link to={"/addBook"}>Add book</Link>
          </div>
        ) : (
          <ul>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>Sign Up</Link>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
