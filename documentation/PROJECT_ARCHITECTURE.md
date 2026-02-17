# Application Architecture

## Component Tree

```
<App>
  ├─ <Auth0Provider>
  │    └─ <TaskProvider>
  │         ├─ <NavBar />
  │         ├─ <SideBar />
  │         └─ <Routes>
  │              ├─ <DashboardPage />
  │              ├─ <CreateTask />
  │              ├─ <TaskList />
  │              ├─ <TaskReport />
  │              ├─ <EditTask />
  │              ├─ <DetailsDisplay />
  │              ├─ <CallbackPage />
  │              └─ <ProtectedPage />
  │
  └─ ...
```

- **App**: Root component, sets up providers and routing.
- **Auth0Provider**: Handles authentication and user session.
- **TaskProvider**: Supplies global task state and actions.
- **NavBar**: Top navigation bar (login/logout, branding, etc.).
- **SideBar**: Sidebar navigation for dashboard sections.
- **Routes**: React Router routes for all main pages.
- **DashboardPage**: Main dashboard/landing page.
- **CreateTask**: Form for adding new tasks.
- **TaskList**: Displays all tasks, allows deletion.
- **TaskReport**: Filtering and reporting on tasks.
- **EditTask**: Edit an existing task.
- **DetailsDisplay**: Shows details for a single task.
- **CallbackPage**: Handles Auth0 login callback.
- **ProtectedPage**: Example of a protected route.

This tree can be expanded as new features/components are added.
