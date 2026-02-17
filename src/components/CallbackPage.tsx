//CallbackPage.tsx
import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "./PageLayout";

const CallbackPage: React.FC = () => {
  const { error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <PageLayout>
      <h1>You have successfully logged in!</h1>
      <p>
        Welcome to the application. You can now access all the features
        available to authenticated users.
      </p>
      <p>
        Use the side navigation bar to access different sections of the
        application.
      </p>
      <p>Feel free to explore and make the most out of your experience.</p>
      <p>Thank you for choosing our application!</p>
    </PageLayout>
  );
};
export default CallbackPage;
