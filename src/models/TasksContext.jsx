import { createContext, useState } from 'react';

/**
 * Context for managing tasks in the Kanban board application.
 * Provides tasks and setTasks to components that consume this context.
 */
export const TasksContext = createContext(null);

/**
 * Provider component for TasksContext. It manages the state of tasks and provides it to its children.
 * @param {Object} param0 - The children components that will have access to the tasks context.
 * @returns JSX.Element
 */
export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};