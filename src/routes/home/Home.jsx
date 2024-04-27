import React from "react";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Home = () => {
  return (
    <header>
      <h1>Home</h1>
      <SignIn forceRedirectUrl="/dashboard" />
    </header>
  );
};

export default Home;
