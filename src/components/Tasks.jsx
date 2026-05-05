import { useTasks } from "../hooks/useTasks";

/**
 * Enum for task statuses.
 */
export const Status = Object.freeze({
    TODO: 'ToDo',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done'
});

/**
 * Component for displaying tasks based on their status.
 * @param {Object} param0 - The status of the tasks to display.
 * @returns JSX.Element
 */
const Tasks = ({ status }) => {
    const { tasks, setTasks } = useTasks();

    const handleStatusChange = (task, newStatus) => {
        setTasks((prevTasks) => {
            // Get the existing tasks and update the status of the specific task.
            return prevTasks.map(t => t.id === task.id ? { ...t, status: newStatus } : t);
        });
    }

    return (
        <div className="Tasks">
        <h2>{status}</h2>
        <ul>
            {
                tasks.filter(task => task.status === status).map((task, index) => (
                    <li key={index}>
                        <span>{task.name}</span>
                        <select id="status" value={task.status} onChange={(event) => handleStatusChange(task, event.target.value)}>
                            <option value={Status.TODO}>{Status.TODO}</option>
                            <option value={Status.IN_PROGRESS}>{Status.IN_PROGRESS}</option>
                            <option value={Status.DONE}>{Status.DONE}</option>
                        </select>
                    </li>
                ))
            }
        </ul>
        </div>
    );
};

export default Tasks;