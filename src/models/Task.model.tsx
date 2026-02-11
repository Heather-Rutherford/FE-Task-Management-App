// Task.model.tsx

export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string; // Store as "yyyy-mm-dd" for simplicity
  priority: "Low" | "Medium" | "High";
  status: "not started" | "in progress" | "completed";
}

export interface TaskStatus {
  status: "not started" | "in progress" | "completed";
}

export interface TaskPriority {
  priority: "Low" | "Medium" | "High";
}
