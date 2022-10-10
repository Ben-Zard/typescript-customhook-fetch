import  './TaskItem.css';
type Props = {
    children: React.ReactNode;
}
const TaskItem = ({children}:Props) => {
  return <li className="task">{children}</li>
};

export default TaskItem;