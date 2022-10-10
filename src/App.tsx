import React, { useEffect, useState,useCallback } from 'react';
import NewTask from './componets/NewTask/NewTask';
import Tasks from './componets/Task/Task';
import useRequest from './componets/hooks/Use-Fetch';
interface Itask {
  id:string, text:string
  }

function App() {
  
  const [tasks, setTasks] = useState<Itask[]>([]);
  

  const {isLoading, error, useFetch:fetchTasks} = useRequest();

  useEffect(() => {

    const transformTasks =(taskObj: any) => {
      const loadedTasks:Itask[] = [];
      for (const taskKey in taskObj) {
          loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
        }
        setTasks(loadedTasks);
    }

    fetchTasks({url: "https://react-http-3eed4-default-rtdb.firebaseio.com/tasks.json",applyData:transformTasks});
  }, []);

  const taskAddHandler = ( task:Itask) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask taskAddHandler={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        fetchTasks={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;