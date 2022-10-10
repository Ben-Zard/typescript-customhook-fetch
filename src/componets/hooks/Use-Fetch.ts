import { useCallback, useState } from "react";
interface Itask {
  id:string, 
  text:string
  }

export type Fetch = {
  header?: HeadersInit | undefined;
  url:string,
  method?:string,
  body?:{text:string}
  applyData: (data:Itask[]) => void
}
const useRequest = ()=>{
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  // const [tasks, setTasks] = useState<Itask[]>([]);


  const useFetch = useCallback( async ({header,url,method,body,applyData}:Fetch) => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(
        url,{
          method: method,
          headers: header,
          body: JSON.stringify(body)
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

       applyData(data);
    
    } catch (err) {
      setError(err + 'Something went wrong!');
    }
    setIsLoading(false);
  },[]);

return {
  isLoading,
  error,
  useFetch}
}
  export default useRequest;
