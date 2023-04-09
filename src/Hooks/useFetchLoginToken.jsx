import {useCallback, useState} from 'react';
import {urls} from "../Constants/urls";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from 'react-router-dom';
import {LoginContext} from "../Contexts/LoginContext";
import {useDispatch, useSelector} from "react-redux";
import {setIsLoggedIn} from "../redux/slices/loginSucessSlice";

export const useFetchLoginToken = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      await navigate(`/`);
      window.location.reload();
    };
    asyncRequest().catch((error) => {
      setLoginResponse(prevState => ({...prevState, isLoading: false}));
    });
  }, [setLoginResponse]);

  return [loginResponse, fetchLoginResponse];
};
