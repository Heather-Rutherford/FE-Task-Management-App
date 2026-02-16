//AuthenticationGuard.tsx
import { withAuthenticationRequired } from "@auth0/auth0-react";

type AuthenticationGuardProps = {
  component: React.ComponentType<any>;
};

const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({
  component,
}) => {
  const ProtectedComponent = withAuthenticationRequired(component, {
    onRedirecting: () => <div>Redirecting you to the login page...</div>,
  });

  return <ProtectedComponent />;
};

export default AuthenticationGuard;
