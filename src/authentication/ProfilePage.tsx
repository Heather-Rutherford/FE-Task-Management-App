// ProfilePage.tsx
import { useAuth0 } from "@auth0/auth0-react";
import { type Auth0User } from "../models/Auth0.model";

const ProfilePage: React.FC = () => {
  const { user } = useAuth0();
  const typedUser = user as Auth0User | undefined;

  if (!typedUser) return <div>No user data</div>;

  return (
    <div>
      <img src={typedUser.picture} alt="Profile" />
      <h2>User Profile for {typedUser.name}</h2>
      <p>User ID: {typedUser.sub}</p>
      <p>First Name: {typedUser.given_name}</p>
      <p>Last Name: {typedUser.family_name}</p>
      <p>Nickname: {typedUser.nickname}</p>
      <p>Locale: {typedUser.locale}</p>
      <p>Email: {typedUser.email}</p>
      <p>Email Verified: {typedUser.email_verified ? "Yes" : "No"}</p>
      <p>Last Updated: {typedUser.updated_at}</p>
    </div>
  );
};
export default ProfilePage;
