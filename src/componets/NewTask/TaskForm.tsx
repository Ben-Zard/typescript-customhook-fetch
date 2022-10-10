import { useRef } from 'react';

import  './TaskForm.css';
type Props = {
  onEnterTask: (taskText: string) => void;
  loading: boolean;
}

const TaskForm = ({onEnterTask,loading}:Props) => {
  const taskInputRef = useRef<HTMLInputElement | null>(1 as any);

  const submitHandler = (event:any) => {
    console.log(taskInputRef.current?.value)
    event.preventDefault();

    const enteredValue = taskInputRef.current?.value;

    if (enteredValue!.trim().length > 0 && enteredValue) {
      onEnterTask(enteredValue);
    }
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <input type='text' ref={taskInputRef} />
      <button>{loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
