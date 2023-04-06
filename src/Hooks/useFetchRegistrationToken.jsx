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
  const fetchRegistration = useCallback((firstName, lastName, phoneNo, password, onRegistrationSuccess, onRegistrationFailure)=>{
    // setResponse(prevState => ({...prevState, isLoading: true}));
    const asyncRequest = async () => {
      const url = urls.registrationUrl;
      const res = await axios.post(url, { first_name: firstName, last_name: lastName, phone_no: phoneNo, password: password });
      setRegistrationResponse(prevState => ({...prevState, data: res.data, isLoading: false}));
      toast.success("Registration Successful", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000
      });
      onRegistrationSuccess();
    };

    asyncRequest().catch(error => {
      setRegistrationResponse(prevState => ({...prevState, isLoading: false}));
      onRegistrationFailure(error);
    });
  }, [setRegistrationResponse]);

  return [registrationResponse, fetchRegistration];
};
