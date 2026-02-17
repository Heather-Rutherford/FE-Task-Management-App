# Application Architecture

## Component Tree

```
<App>
  ├─ <Auth0Provider>
  │    └─ <TaskProvider>
  │         ├─ <PageLayout>
  │         │    ├─ <NavBar />
  │         │    └─ <SideBar />
  │         └─ <Routes>
  │              ├─ <DashboardPage />
  │              ├─ <CreateTask />
  │              ├─ <TaskList />
  │              ├─ <TaskReport />
  │              ├─ <EditTask />
  │              ├─ <DetailsDisplay />
  │              ├─ <CallbackPage />
  │              ├─ <ProfilePage />
  │              └─ <ProtectedPage />
  │
  └─ ...
```

- **App**: Root component, sets up providers and routing.
- **Auth0Provider**: Handles authentication and user session.
- **TaskProvider**: Supplies global task state and actions.
- **PageLayout**: Main layout wrapper, includes NavBar and SideBar.
- **NavBar**: Top navigation bar (login/logout/register/profile, branding, etc.), now in `src/navigation/`.
- **NavBarButtons**: Login, logout, and register buttons, used inside NavBar.
- **SideBar**: Sidebar navigation for dashboard sections, now in `src/navigation/`.
- **Routes**: React Router routes for all main pages.
- **DashboardPage**: Main dashboard/landing page.
- **CreateTask**: Form for adding new tasks.
- **TaskList**: Displays all tasks, allows deletion.
- **TaskReport**: Filtering and reporting on tasks.
- **EditTask**: Edit an existing task.
- **DetailsDisplay**: Shows details for a single task.
- **CallbackPage**: Handles Auth0 login callback.
- **ProfilePage**: Displays authenticated user profile using Auth0 user data and strong TypeScript types.
- **ProtectedPage**: Example of a protected route.

This tree can be expanded as new features/components are added.
