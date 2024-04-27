import { UserButton, useClerk } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useClerk();

  console.log(`User is ${user.firstName}`);

  return (
    <>
      <h1>Dashboard page for {user.firstName}</h1>
      <p>This is a protected page.</p>
      <UserButton />
      <ul>
        <li>
          <Link to="/">Return to home</Link>
        </li>
      </ul>
    </>
  );
};

export default Dashboard;
