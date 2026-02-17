import { type Auth0User } from "../models/Auth0.model";
import { type Auth0IdToken } from "../models/Auth0.model";

/**
 * Represents the Auth0 context returned by useAuth0 hook.
 * You can use this type for context or props if needed.
 */
export interface Auth0Context {
  isAuthenticated: boolean;
  isLoading: boolean;
  user?: Auth0User;
  getAccessTokenSilently?: (...args: unknown[]) => Promise<string>;
  getIdTokenClaims?: (...args: unknown[]) => Promise<Auth0IdToken | undefined>;
  loginWithRedirect?: (...args: unknown[]) => Promise<void>;
  logout?: (...args: unknown[]) => void;
  // Add other Auth0 context properties as needed
}
