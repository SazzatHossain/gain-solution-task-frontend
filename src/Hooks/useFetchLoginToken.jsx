import {useCallback, useState} from 'react';
import {urls} from "../Constants/urls";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from 'react-router-dom';
import {LoginContext} from "../Contexts/LoginContext";

export const useFetchLoginToken = () => {
  const navigate = useNavigate();
  const getLoginResponse = () => {
    return localStorage.getItem('token') ?? '';
  };

  const [loginResponse, setLoginResponse] = useState({
    data: getLoginResponse() ?? '',
    isLoading: false,
    error: null,
  });

  const fetchLoginResponse = useCallback((phoneNo, password, onLoginSuccess, onLoginFailure) => {
    setLoginResponse(prevState => ({...prevState, isLoading: true}));
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
      const url = urls.loginUrl;
      const res = await axios.post(url, {phone_no: phoneNo, password: password}, config);
      setLoginResponse(prevState => ({...prevState, data: res.data, isLoading: false}));
      localStorage.setItem('token', JSON.stringify(res.data.token));
      localStorage.setItem('user_id', JSON.stringify(res.data.user_id));
      localStorage.setItem('first_name', JSON.stringify(res.data.first_name));
      localStorage.setItem('last_name', JSON.stringify(res.data.last_name));
      toast.success("Login Successful", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000
      });
      await navigate(`/`);
    };
    asyncRequest().catch((error) => {
      setLoginResponse(prevState => ({...prevState, isLoading: false}));
    });
  }, [setLoginResponse]);

  return [loginResponse, fetchLoginResponse];
};
