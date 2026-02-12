//DashboardPage.tsx
// Task Dashboard Page:
// Implement a dashboard interface for managing tasks,
// including features like task lists, creation, editing,
// and deletion.
import React from "react";
import PageLayout from "./PageLayout";

const DashboardPage: React.FC = () => {
  return (
    <PageLayout>
      <h2>Program Description</h2>
      <p>
        This program is designed to help users efficiently organize, track, and
        manage their tasks. It combines a user-friendly interface with secure
        authentication and structured data handling using TypeScript.
      </p>
      <h3>Core Features</h3>
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
        These forms: Use TypeScript for strong type enforcement Validate user
        input before submission Provide meaningful error handling and feedback
        Ensure data consistency and reliability This approach enhances
        application stability and reduces runtime errors.
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
