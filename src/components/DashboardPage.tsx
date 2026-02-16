//DashboardPage.tsx
// Task Dashboard Page:
// Implement a dashboard interface for managing tasks,
// including features like task lists, creation, editing,
// and deletion.
import PageLayout from "./PageLayout";

const DashboardPage: React.FC = () => {
  return (
    <PageLayout>
      <h3>Program Description</h3>
      <p>
        This program is designed to help users efficiently organize, track, and
        manage their tasks. It combines a user-friendly interface with secure
        authentication and structured data handling using TypeScript.
      </p>
      <h4>Core Features</h4>
      <h5>1. Task Dashboard</h5>
      <p>
        The Task Dashboard serves as the central hub of the application. It
        provides: A comprehensive list of all tasks Easy task creation
        functionality Options to edit existing tasks Ability to delete tasks
        Clear and intuitive task management controls The dashboard is designed
        for simplicity and efficiency, enabling users to quickly view and manage
        their workload.
      </p>
      <h5>2. Task Details View</h5>
      <p>
        Each task includes a dedicated details page that displays complete task
        information, such as: Title Description Status Due date Any additional
        metadata Users can modify task details directly from this view, ensuring
        quick updates and better task tracking.
      </p>
      <h5>3. Task Creation and Editing</h5>
      <p>
        The system includes structured forms for creating and editing tasks.
        There is a link on the sidebar that directs users to the task creation
        page, where they can input task details and submit them for inclusion in
        the task list. The editing functionality allows users to update task
        information as needed, ensuring that their task data remains accurate
        and up-to-date. To access the task editing page, users can click on a
        task title in the task list, which will take them to the task details
        view where they can make edits. The tasks can also be deleted directly
        from the task list, the task edit page, or the task details view,
        providing users withflexible options for managing their tasks.
      </p>
      <h5>4. Authentication and Authorization</h5>
      <p>
        User authentication and access control are handled using Auth0. The
        system includes: User registration page Login page Secure session
        handling Authorization mechanisms to protect task data Only
        authenticated users can access and manage their tasks, ensuring privacy
        and data security.
      </p>
    </PageLayout>
  );
};

export default DashboardPage;
