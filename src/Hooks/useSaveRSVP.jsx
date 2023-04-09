import { useCallback, useState } from 'react';
import  axios  from "axios";
import {urls} from "../Constants/urls";
import {toast} from "react-toastify";

export const useSaveRSVP = () => {
  const [response, setResponse] = useState({
    data: [],
    isLoading: false,
    error: null,
  });
  const saveRSVP = useCallback((eventId, attending)=>{
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
      const url = urls.rsvp(eventId);
      const res = await axios.post(url, {attending}, config);
      setResponse(prevState => ({...prevState, data: res.data.data, isLoading: false}));
      toast.success('Successfully responder', {
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
    });
  }, [setResponse]);

  return [response, saveRSVP];
};
