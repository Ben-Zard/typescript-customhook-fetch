
import Section from '../UI/Section';
import TaskItem from './TaskItem';
import  './Tasks.css';
import { Fetch } from '../hooks/Use-Fetch';
type Props = {
    items: {id:string, text:string}[];
    loading: boolean;
    error: string;
     fetchTasks : (arg0: Fetch ) => void;
}
const Tasks = ({items,loading,error,fetchTasks}:Props) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (items.length > 0) {
    taskList = (
      <ul>
        {items.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content:any = taskList;

  if (error) {
    content = <button onClick={ ()=> fetchTasks}>Try again</button>;
  }

  if (loading) {
    content = 'Loading tasks...';
  }

  return (
    <Section>
      <div className="container">{content}</div>
    </Section>
  );
};

export default Tasks;
