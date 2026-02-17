# Project Features

## Features

- **User Authentication:**
  - Secure login and logout using Auth0.
  - Only authenticated users can access and manage tasks.
  - Protected routes ensure unauthorized users cannot view or modify task data.
  - Login and logout buttons are available in the navigation bar.

- **User Authentication & Profile:**
  - Secure login, logout, and registration using Auth0.
  - Only authenticated users can access and manage tasks.
  - Protected routes ensure unauthorized users cannot view or modify task data.
  - Login, logout, and register buttons are available in the navigation bar.
  - Authenticated users can view their profile information (name, email, picture, etc.) on a dedicated Profile page, using strong TypeScript types for user data.

- **Task Management:**
  - Users can create new tasks by filling out a form with title, description, due date, priority, and status.
  - All tasks are listed in the "Display Tasks" section, showing key details for each task.
  - Tasks can be edited or deleted from the task list or detail view.
  - Deletion requires user confirmation to prevent accidental removal.
  - Form validation ensures all required fields are filled and data is correctly formatted.

- **Global State Management:**
  - The React Context API (with TypeScript) manages the global state of tasks.
  - The `TaskProvider` supplies task data and actions (add, update, delete) to all components.
  - Custom hook `useTaskContext` allows any component to access and modify the global task state.
  - Predefined sample tasks are loaded on first use for demonstration.

- **Task Filtering & Reporting:**
  - The "Task Report" page allows users to filter tasks by status (e.g., completed, in progress) and priority (e.g., High, Medium, Low).
  - Filters update the displayed list in real time as dropdowns are changed.
  - A "Clear Filters" button resets all filters to show the full task list.
  - Filtering logic is implemented in the component, ensuring up-to-date results from the global state.

- **Responsive UI:**
  - The interface is built with React Bootstrap for a modern, responsive look.
  - The sidebar and navigation bar (now in the `src/navigation/` folder) adapt to different screen sizes, with a hamburger menu for mobile devices.
  - All forms and tables are styled for clarity and usability on both desktop and mobile.

- **Responsive UI & Navigation:**
  - The interface is built with React Bootstrap for a modern, responsive look.
  - The sidebar and navigation bar (now in the `src/navigation/` folder) adapt to different screen sizes, with a hamburger menu for mobile devices.
  - Navigation components are modular and imported into the main layout for consistency.
  - All forms and tables are styled for clarity and usability on both desktop and mobile.

- **Error Handling & Validation:**
  - All forms use TypeScript types to enforce correct data entry.
  - Required fields and input types are validated before submission.
  - User feedback is provided via toast notifications on successful actions (e.g., task creation).
  - Errors in form submission or authentication are handled gracefully, with clear messages to the user.

---

This feature list can be updated as new capabilities are added to the project.
