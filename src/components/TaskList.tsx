// TaskList.tsx
// Displays all tasks and allows deletion using context

import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";
import { Col, Container, Row } from "react-bootstrap";
import { useTaskContext } from "../hooks/useTaskContext";

const TaskList: React.FC = () => {
  // Get tasks and deleteTask from context
  const { tasks, deleteTask } = useTaskContext();

  // Handle task deletion
  const handleDelete = (taskId: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?",
    );
    if (confirmed) {
      deleteTask(taskId);
    }
  };

  return (
    <PageLayout>
      {/* Show message if tasks exist or not */}
      {tasks.length > 0 && <div>Has tasks</div>}
      {tasks.length === 0 && <div>No tasks yet</div>}
      <Container>
        <Row>
          <Col>Title</Col>
          <Col>Due Date</Col>
          <Col>Priority</Col>
          <Col>Status</Col>
          <Col></Col>
        </Row>
        {/* Render each task row */}
        {tasks.map((task) => (
          <Row key={task.id}>
            <Col>
              <Link to={`/display-task/${task.id}`}>{task.title}</Link>
            </Col>
            <Col>{new Date(task.dueDate).toLocaleDateString()}</Col>
            <Col>{task.priority}</Col>
            <Col>{task.status}</Col>
            <Col>
              <Link to="#" onClick={() => handleDelete(task.id)}>
                delete
              </Link>
            </Col>
          </Row>
        ))}
      </Container>
    </PageLayout>
  );
};

export default TaskList;
