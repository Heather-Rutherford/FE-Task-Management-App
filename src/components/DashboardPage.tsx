//DashboardPage.tsx
// Task Dashboard Page:
// Implement a dashboard interface for managing tasks,
// including features like task lists, creation, editing,
// and deletion.
import PageLayout from "./PageLayout";

const DashboardPage: React.FC = () => {
  return (
    <PageLayout>
      <h3>Welcome to Your Dashboard</h3>
      <p>This is your central hub for managing tasks and tracking progress.</p>
      <p>From here, you can:</p>
      <ul>
        <li>View all your tasks at a glance</li>
        <li>Create new tasks and set priorities</li>
        <li>Edit or delete existing tasks</li>
        <li>Monitor your task completion status</li>
        <li>Access detailed reports and analytics</li>
      </ul>
      <p>Stay organized and productive—start managing your tasks now!</p>
      <p>
        Use the side navigation bar to access different sections of the
        application.
      </p>
    </PageLayout>
  );
};

export default DashboardPage;
