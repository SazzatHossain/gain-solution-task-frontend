import { useCallback, useState } from 'react';
import {urls} from "../Constants/urls";
import axios from "axios";
import {toast} from "react-toastify";

export const useFetchRegistrationToken = () => {
  const [registrationResponse, setRegistrationResponse] = useState({
    data: [],
    isLoading: false,
    error: null,
  });
  const fetchRegistration = useCallback((firstName, lastName, phoneNo, password)=>{
    // setResponse(prevState => ({...prevState, isLoading: true}));
    const asyncRequest = async () => {
      const url = urls.registrationUrl;
      const res = await axios.post(url, { first_name: firstName, last_name: lastName, phone_no: phoneNo, password: password });
      setRegistrationResponse(prevState => ({...prevState, data: res.data, isLoading: false}));
      toast.success('Successfully created User', {
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
      setRegistrationResponse(prevState => ({...prevState, isLoading: false}));
    });
  }, [setRegistrationResponse]);

  return [registrationResponse, fetchRegistration];
};
