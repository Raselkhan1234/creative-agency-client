import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import Icon from "../../images/logos/logo.png";
import google from "../../images/googleIcon.png";
import "./Login.css";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
 

   
 
 console.log(loggedIn);
  



  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  let history = useHistory();
  let location = useLocation();
  let {from}= location.state || { from: { pathname: "/order/:header" } };



  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const info = result.user;
        console.log(info);
        setLoggedIn(info);
        storeAuthToken();
        fetch("https://arcane-temple-39788.herokuapp.com/isAdmin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: info.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setIsAdmin(data);
            if(data){
              history.replace("/admin/service")
            }
            else{
              history.replace(from);
            }
          });
        
        
      
        // history.replace(from);
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section>
      <div class="d-block m-5">
        <img
          style={{ height: "40px", display: "block", margin: "auto" }}
          src={Icon}
          alt=""
        />
      </div>
      <div className="login-chart">
        <h1 class="d-flex justify-content-center m-5">Login With</h1>

        <div class="d-flex">
          <button onClick={handleGoogleSignIn} className="login-btn">
            <img
              style={{ height: "25px", position: "relative", right: "103px" }}
              src={google}
              alt=""
            />
            Continue with Google{" "}
          </button>
        </div>

        <p className="login-p">
          Don’t have an account? <a href="https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Fwww.google.com%2F&hl=en&dsh=S-1089649010%3A1618357154779087&gmb=exp&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp">Create an account</a>
        </p>
      </div>
    </section>
  );
};

export default Login;
