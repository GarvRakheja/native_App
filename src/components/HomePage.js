import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation();

  const NavigateToLogin = () => {
    navigation.navigate("Login");
  };

  const NavigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <>
      <div className="appInfo">
        <div className="appIcon">
          <img
            src={require("../../Images/diamond-png.webp")}
            alt="App Icon"
            id="icopng"
          />
        </div>
        <h1>TeamUP</h1>
        <p>The app tagline goes here</p>
      </div>
      <div className="Navbar">
        <div className="login">
          <h2 onClick={NavigateToLogin}>LOGIN</h2>
        </div>
        <div className="signUp">
          <h2 onClick={NavigateToSignUp}>SIGN UP</h2>
        </div>
      </div>
    </>
  );
};

export default HomePage;
