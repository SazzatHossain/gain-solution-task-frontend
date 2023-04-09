import { useCallback, useState } from 'react';
import  axios  from "axios";
import {toast} from "react-toastify";
import {urls} from "../Constants/urls";
import {useNavigate} from "react-router-dom";

export const useUpdateUserInfo = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState({
    data: [],
    isLoading: false,
    error: null,
  });
  const updateUserInfo = useCallback((userDetail)=>{
    setResponse(prevState => ({...prevState, isLoading: true}));
    const asyncRequest = async () => {
      const url = `${urls.userDetailUpdate}`;
      const res = await axios.patch(url,userDetail,{params: {token: JSON.parse(localStorage.getItem("token"))}});
      setResponse(prevState => ({...prevState, data: res.data.data, isLoading: false}));
      toast.success('Successfully updated user profile', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      if(res.data.status === 200) {
        setTimeout(()=>{
          navigate('/user-profile');
        }, 1000);
      }
    };

    asyncRequest().catch(error => {
      console.log(error);
      setResponse(prevState => ({...prevState, isLoading: false}));
      toast.error('Unable to update profile', {
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

  return [response, updateUserInfo];
};
