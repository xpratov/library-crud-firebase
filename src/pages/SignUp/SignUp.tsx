import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";


const SignUp = () => {
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    if (e.target.pass.value != e.target.password.value)
      return alert("Ikkala parol bir biriga oxshashi kerak !");

    createUserWithEmailAndPassword(
      auth,
      e.target.mail.value,
      e.target.pass.value
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
  if (auth.currentUser) {
    return <Navigate to={"/"}></Navigate>;
  }
  return (
    <div className="signup">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <h3>Sign up</h3>
        <div>
          <img src="/mail-line.svg" alt="Mail" />
          <input type="email" required placeholder="Enter email..." name="mail" />
        </div>
        <div>
          <img src="/lock-2-line.svg" alt="Password" />
          <input
            type={show ? "text" : "password"}
            placeholder="Enter password..."
            name="pass"
            className="input"
          />
          <img onClick={()=>setShow(!show)} src="/eye-line.svg" alt="Show" style={{cursor: 'pointer'}}/>
        </div>
        <div>
          <img src="/lock-2-line.svg" alt="Password" />
          <input
            type={show ? "text" : "password"}
            placeholder="Confirm password..."
            name="password"
            className="input"
          />
          <img onClick={()=>setShow(!show)} src="/eye-line.svg" alt="Show" style={{cursor: 'pointer'}}/>
        </div>
        <button>Sign Up</button>
      </form>
      <div>
        <button onClick={() => handleClick()}>Sign up with google</button>
        <Link to={"/login"}>I have my account</Link>
      </div>
    </div>
  );
};

export default SignUp;
