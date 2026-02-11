//App.tsx
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./components/DashboardPage";
import CallbackPage from "./components/CallbackPage";
import ProtectedPage from "./authentication/ProtectedPage";
import { useAuth0 } from "@auth0/auth0-react";
import { createAuthenticationGuard } from "./authentication/AuthenticationGuard";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";
// import DisplayTasks from "./components/DisplayTasks";

const ProtectedPageGuard = createAuthenticationGuard(ProtectedPage);

const App: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/add-task" element={<CreateTask />} />
      <Route path="/edit-task" element={<EditTask />} />
      {/* <Route path="/display-task" element={<DisplayTasks />} /> */}
      <Route path="/protected" element={<ProtectedPageGuard />} />
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  );
};

export default App;
