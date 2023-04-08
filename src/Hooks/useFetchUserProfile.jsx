import {useCallback, useState} from 'react';
import axios from "axios";
import {urls} from "../Constants/urls";

export const useFetchUserProfileDetail = () => {
  const [response, setResponse] = useState({
    data: [],
    isLoading: false,
    error: null,
  });
  const fetchUserDetail = useCallback(() => {
    setResponse(prevState => ({...prevState, isLoading: true}));
    const asyncRequest = async () => {
      const url = `${urls.userDetail}`;
      const res = await axios.get(url, {params: {token: JSON.parse(localStorage.getItem("token"))}});
      setResponse(prevState => ({...prevState, data: res.data.data, isLoading: false}));
    };

    return asyncRequest().catch(error => {
      console.log(error);
      setResponse(prevState => ({...prevState, isLoading: false}));
    });
  }, [setResponse]);

  return [response, fetchUserDetail];
};
