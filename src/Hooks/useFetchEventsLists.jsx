import { useCallback, useState } from 'react';
import  axios  from "axios";
import {urls} from "../Constants/urls";


export const useFetchEventList = () => {
  const [response, setResponse] = useState({
    data: [],
    isLoading: false,
    error: null,
  });
  const fetchEventLists = useCallback((page, per_page = 10, search= '')=>{
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
      const res = await axios.get(urls.eventsList(page, per_page, search), config);
      setResponse(prevState => ({...prevState, data: res.data.data, isLoading: false}));
    };

    asyncRequest().catch(error => {
      console.log(error);
      setResponse(prevState => ({...prevState, isLoading: false}));
    });
  }, [setResponse]);

  return [response, fetchEventLists];
};
