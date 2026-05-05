import { useContext } from 'react';
import { TasksContext } from '../models/TasksContext';

/**
 *  Custom hook to access tasks and setTasks from TasksContext.
 * @returns 
 */
export const useTasks = () => {
  const context = useContext(TasksContext);
  
  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }

  return context;
}; 