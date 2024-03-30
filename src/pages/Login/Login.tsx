import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const [pass, setPass]=useState<string>("")

  const navigate = useNavigate();

  const changePass=(e:React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    setPass(e.target.value)
  }

  const handleSubmit = (e: any) => {
    if (e.target.mail) e.target.mail.value;
  signInWithEmailAndPassword(
      auth,
      e.target.mail.value,
      pass
    ).then(() => {
      if (auth.currentUser) {
        navigate("/");
      }
    });
  };
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        if (result.user.uid) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (auth.currentUser) return <Navigate to={"/"}></Navigate>;
  return (
    <div className="login-cart">
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);}}>
        <h2>Login</h2>
        <div>
          <img src="/mail-line.svg" alt="EMail" />
          <input type="email" required placeholder="Enter email..." name="mail" />
        </div>
        <div>
          <img src="/lock-2-line.svg" alt="Password" />
          <input onChange={(e)=>{changePass(e)}} type={isShow?"password":"text"} placeholder="Enter password..." required/>
          <img onClick={()=>{setIsShow(!isShow)}} style={{cursor: "pointer"}} src="/eye-line.svg" alt="Show" />
        </div>
        <button>Login</button>
      </form>
      <div className="other-way">
        <button onClick={() => handleClick()}>Login with google</button>
        <Link to={"/signup"}>I have not my account</Link>
      </div>
    </div>
  );
};

export default Login;
