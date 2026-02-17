//NavBarButtons.tsx
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../authentication/LoginButton";
import LogoutButton from "../authentication/LogoutButton";
import RegisterButton from "../authentication/RegisterButton";

const NavBarButtons: React.FC = () => {
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

export default NavBarButtons;
