//NavBarButtons.tsx
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../authentication/LoginButton";
import LogoutButton from "../authentication/LogoutButton";

const NavBarButtons: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <>
          <LoginButton />
        </>
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
