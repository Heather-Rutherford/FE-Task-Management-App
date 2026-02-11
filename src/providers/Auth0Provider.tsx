/* eslint-disable @typescript-eslint/no-explicit-any */
// Auth0Provider.tsx
// Authorization::
// Implement user authorization pages,
// including registration and login

import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
type Auth0ProviderWithNavigateProps = {
  children: any;
};

const Auth0ProviderWithNavigate: React.FC<Auth0ProviderWithNavigateProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const domain = "dev-r7v7d7xda6bizdth.us.auth0.com"; // replace with your Auth0 domain
  const clientId = "NuTkQ5SjLMlD6qaRu4HD22Xg44fKnuuE"; // replace with your Auth0 client ID
  const redirectUri = "http://localhost:5173/callback"; // make sure the port matches your server

  const onRedirectCallback = (appState: any) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        scope: "openid profile email",
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
