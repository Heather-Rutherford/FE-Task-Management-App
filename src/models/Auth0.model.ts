// TypeScript types for Auth0 user data

/**
 * Represents the Auth0 user profile object returned by the Auth0 SDK.
 * Extend this interface if you expect custom claims in your ID token.
 */
export interface Auth0User {
  sub: string; // Auth0 user ID (e.g., 'auth0|1234567890')
  name?: string;
  given_name?: string;
  family_name?: string;
  nickname?: string;
  email?: string;
  email_verified?: boolean;
  picture?: string;
  locale?: string;
  updated_at?: string;
  // Add any custom claims you expect here
  [claim: string]: unknown;
}

/**
 * Represents the Auth0 ID token claims (standard OpenID Connect claims).
 */
export interface Auth0IdToken {
  iss: string; // Issuer
  sub: string; // Subject (user ID)
  aud: string | string[]; // Audience
  exp: number; // Expiration time (seconds since epoch)
  iat: number; // Issued at (seconds since epoch)
  azp?: string; // Authorized party
  scope?: string;
  // Standard OIDC claims
  name?: string;
  email?: string;
  picture?: string;
  // Add any custom claims you expect here
  [claim: string]: unknown;
}
