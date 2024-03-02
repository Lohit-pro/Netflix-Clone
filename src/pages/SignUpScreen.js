import React, { useRef, useState } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignUpScreen() {
  const emailValue = useRef(null);
  const passwordValue = useRef(null);
  const navigate = useNavigate(); // Hook to access navigation functions
  const [signUp, setSignUp] = useState(false);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailValue.current.value,
      passwordValue.current.value
    )
      .then((authUser) => {
        // console.log(authUser);
        alert("SignUp successful, Please SignIn with same credientails");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailValue.current.value,
      passwordValue.current.value
    )
      .then((authUser) => {
        // console.log(authUser);
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signupscreen">
      <form>
        <h1>{signUp ? "Create Account" : "Sign In"}</h1>
        <input ref={emailValue} type="email" placeholder="Email Address" />
        <input ref={passwordValue} type="password" placeholder="Password" />
        <button onClick={signUp ? register : signIn} type="submit">
          {signUp ? "Sign Up" : "Sign In"}
        </button>
        {!signUp ? (
          <h4>
            New to Netflix?
            <button
              onClick={(e) => {
                e.preventDefault();
                setSignUp(true);
              }}
            >
              SignUp Now
            </button>
          </h4>
        ) : (
          <h4>
            Have an account?
            <button
              onClick={(e) => {
                e.preventDefault();
                setSignUp(false);
              }}
            >
              SignIn Now
            </button>
          </h4>
        )}
      </form>
    </div>
  );
}

export default SignUpScreen;
