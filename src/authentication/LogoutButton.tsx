//LogoutButton.tsx
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LogoutButton: React.FC = () => {
  const { logout, isAuthenticated } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: "http://localhost:5173", // window.location.origin,
      },
    });
  };

  if (isAuthenticated) return <Button onClick={handleLogout}>Log Out</Button>;
  return null;
};

export default LogoutButton;
