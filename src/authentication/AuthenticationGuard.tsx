/* eslint-disable @typescript-eslint/no-explicit-any */
// AuthenticationGuard.tsx
// Authentication:
// Implement user authentication with Auth0
// and authorization pages, including registration
// and login.

import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const renderRedirecting = () => <div>Redirecting you to the login page...</div>;

export const createAuthenticationGuard = (
  Component: React.ComponentType<any> | any,
) =>
  withAuthenticationRequired(Component, {
    onRedirecting: renderRedirecting,
  });

export default createAuthenticationGuard;
