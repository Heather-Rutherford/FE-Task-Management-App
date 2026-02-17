# Project Implementation Details

## Context API for Global State

- The `TaskContext.tsx` file defines a React Context and Provider for managing the global state of tasks.
- The `TaskProvider` component wraps the app and supplies `tasks`, `addTask`, `updateTask`, and `deleteTask` functions to all children.
- The custom hook `useTaskContext` is used in components to access and modify the global task state.
- Predefined sample tasks are loaded into state on initialization for demonstration purposes.

## Authentication with Auth0

- Auth0 is integrated using the `@auth0/auth0-react` package.
- The `Auth0Provider` component wraps the app and manages authentication state.
- The `useAuth0` hook is used in components to check if a user is authenticated and to access user info.
- Protected routes/components use authentication guards to restrict access to logged-in users only.
- A **Register** (Sign Up) button is provided in the navigation bar, allowing new users to create an account. This button uses Auth0's `loginWithRedirect` method with the `{ screen_hint: "signup" }` option to redirect users directly to the Auth0 registration page.

## Task CRUD Operations

- **Create:**
  - The `CreateTask` component provides a form for adding new tasks.
  - On submission, form data is validated and a new task is added to the global state via `addTask`.
  - Toast notifications provide user feedback on success.
- **Read:**
  - The `TaskList` component displays all tasks from the global state.
  - Each task can be clicked to view details.
- **Update:**
  - The `EditTask` component allows users to modify existing tasks.
  - Changes are saved to the global state using `updateTask`.
- **Delete:**
  - Tasks can be deleted from the list or detail view using the `deleteTask` function.
  - A confirmation prompt prevents accidental deletions.

## Task Filtering and Reporting

- The `TaskReport` component allows users to filter tasks by status and priority using dropdowns.
- The filtered list is computed in real time based on the current filter state and the global task list.
- A "Clear Filters" button resets all filters to show the full list.

## Responsive UI and Navigation

- The UI is built with React Bootstrap for a modern, responsive look.
- The sidebar and navigation bar adapt to different screen sizes.
- A hamburger menu is used for sidebar navigation on mobile devices, toggled via React state and styled with CSS.

## Error Handling and Validation

- All forms use TypeScript types to enforce correct data entry.
- Required fields and input types are validated before submission.
- Errors in form submission or authentication are handled gracefully, with clear messages to the user.
- Toast notifications and confirmation dialogs provide user feedback for actions and errors.

## File Structure Highlights

- `src/models/TaskContext.tsx`: Context API setup and provider.
- `src/components/TaskList.tsx`: Task list and deletion logic.
- `src/components/CreateTask.tsx`: Task creation form and validation.
- `src/components/TaskReport.tsx`: Filtering and reporting logic.
- `src/providers/Auth0Provider.tsx`: Auth0 authentication setup.

---

This document can be expanded as new features and implementation details are added.
