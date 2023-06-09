import { useCallback, useState } from 'react';
import  axios  from "axios";
import {urls} from "../Constants/urls";
import {toast} from "react-toastify";

export const useSaveEventDetail = () => {
  const [response, setResponse] = useState({
    data: [],
    isLoading: false,
    error: null,
  });
  const createEventDetail = useCallback((eventDetail)=>{
    setResponse(prevState => ({...prevState, isLoading: true}));
    const asyncRequest = async () => {
      let config = {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
        },
        params: {
          token: JSON.parse(localStorage.getItem("token"))
        }
      };
      const url = urls.events;
      const res = await axios.post(url, eventDetail, config);
      setResponse(prevState => ({...prevState, data: res.data.data, isLoading: false}));
      toast.success("Successfully Created Event", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };

    asyncRequest().catch(error => {
      console.log(error);
      setResponse(prevState => ({...prevState, isLoading: false}));
      toast.error("Event creation failed", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });
  }, [setResponse]);

  return [response, createEventDetail];
};
