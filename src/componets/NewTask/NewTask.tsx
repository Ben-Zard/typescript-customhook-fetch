import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useRequest from '../hooks/Use-Fetch';
type Props= {
  taskAddHandler: (task: {id:string, text:string}) => void;
}


const NewTask = ({taskAddHandler}:Props) => {
  const {isLoading, error, useFetch:fetchTasks} = useRequest();

  const createTask = (taskText:string,taskData: any) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
  }
  const enterTaskHandler = async (taskText:string) => {

  fetchTasks(
  {url: "https://react-http-3eed4-default-rtdb.firebaseio.com/tasks.json",
  method: "POST",
  header: {
    'Content-Type': 'application/json',
  },
  body: {text:taskText},
  applyData:createTask.bind(null,taskText)});
  }
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};


export default NewTask;

