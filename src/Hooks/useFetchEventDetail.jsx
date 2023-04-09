import { useCallback, useState } from 'react';
import  axios  from "axios";
import {urls} from "../Constants/urls";


export const useFetchMyEventDetail = () => {
  const [response, setResponse] = useState({
    data: [],
    isLoading: false,
    error: null,
  });
  const fetchEventDetail = useCallback((id)=>{
    let config = {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      },
      params: {
        token: JSON.parse(localStorage.getItem("token"))
      }
    };
    setResponse(prevState => ({...prevState, isLoading: true}));
    const asyncRequest = async () => {
      const res = await axios.get(urls.myEventsDetail(id), config);
      setResponse(prevState => ({...prevState, data: res.data.data, isLoading: false}));
    };

    asyncRequest().catch(error => {
      console.log(error);
      setResponse(prevState => ({...prevState, isLoading: false}));
    });
  }, [setResponse]);

  return [response, fetchEventDetail];
};
