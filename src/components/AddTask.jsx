import { useState } from 'react';
import { useTasks } from "../hooks/useTasks";
import { Status } from "./Tasks";

/**
 * Component for adding a new task.
 * @returns JSX.Element
 */
const AddTask = () => {
    const [value, setValue] = useState('');
    const { setTasks } = useTasks();


    const handleInputChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Add task to the TasksContext with default status of ToDo.
        setTasks((prevTasks) => [...prevTasks, { name: value, status: Status.TODO, id: Date.now() }]);

        // Clear the input field after adding the task.
        setValue('');
    }

    return (
    <div className='TaskAdd'>
        <label htmlFor="taskInput">Add Task:</label>
        <input type="text" id="taskInput" name="taskInput" placeholder='Enter task...' onChange={handleInputChange} value={value} />
        <button type='submit' onClick={handleSubmit}>Add</button>                                  
    </div>
);
};

export default AddTask;