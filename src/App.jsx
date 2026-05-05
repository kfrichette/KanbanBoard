import './App.css';
import Tasks, { Status } from './components/Tasks';
import AddTask from './components/AddTask';
import { TasksProvider } from './models/TasksContext';


function App() {
  return (
    <div className="App">
      <TasksProvider>
        <AddTask />
        
        <div className='TasksContainer'>
          <Tasks status={Status.TODO} />
          <Tasks status={Status.IN_PROGRESS} />
          <Tasks status={Status.DONE} />
        </div>
      </TasksProvider>
    </div>
  )
}

export default App
