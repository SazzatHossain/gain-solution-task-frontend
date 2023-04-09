import {useCallback, useState} from 'react';
import axios from "axios";
import {urls} from "../Constants/urls";

export const useFetchUserRsvpResponse = () => {
  const [response, setResponse] = useState({
    data: [],
    isLoading: false,
    error: null,
  });
  const fetchRsvpResponse = useCallback((event_id) => {
    setResponse(prevState => ({...prevState, isLoading: true}));
    const asyncRequest = async () => {
      const res = await axios.get(urls.rsvpResponse(event_id), {params: {token: JSON.parse(localStorage.getItem("token"))}});
      setResponse(prevState => ({...prevState, data: res, isLoading: false}));
      console.log(response);

    };

    return asyncRequest().catch(error => {
      console.log(error);
      setResponse(prevState => ({...prevState, isLoading: false}));
    });
  }, [setResponse]);

  return [response, fetchRsvpResponse];
};
