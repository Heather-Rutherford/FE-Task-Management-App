// TaskList.tsx

import React from "react";
import { Task } from "../models/Task.model";
import { Form, Col, Row, Container } from "react-bootstrap";

interface TaskListProps {
  tasks: Task[];
}