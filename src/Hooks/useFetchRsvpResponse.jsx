import {useCallback, useState} from 'react';
import axios from "axios";
import {urls} from "../Constants/urls";

export const useFetchUserRsvpResponse = () => {
  const [response, setResponse] = useState({
    data: [],
    isLoading: false,
    error: null,
  });
  const fetchRsvpResponse = useCallback(() => {
    setResponse(prevState => ({...prevState, isLoading: true}));
    const asyncRequest = async () => {
      const url = `${urls.rsvpResponse}`;
      const res = await axios.get(url, {params: {token: JSON.parse(localStorage.getItem("token"))}});
      setResponse(prevState => ({...prevState, data: res, isLoading: false}));
    };

    return asyncRequest().catch(error => {
      console.log(error);
      setResponse(prevState => ({...prevState, isLoading: false}));
    });
  }, [setResponse]);

  return [response, fetchRsvpResponse];
};
