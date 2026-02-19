//NavBar.tsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../authentication/LoginButton";
import RegisterButton from "../authentication/RegisterButton";
import LogoutButton from "../authentication/LogoutButton";

const NavBar: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <div className="button-group">
          <RegisterButton />
          <LoginButton />
        </div>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};

export default NavBar;
