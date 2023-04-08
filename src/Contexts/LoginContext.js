import React from "react";

const LoginContext = React.createContext([1]);

const LoginSuccessProvider = LoginContext.Provider;
const LoginSuccessConsumer = LoginContext.Consumer;

export {LoginContext,LoginSuccessProvider, LoginSuccessConsumer};
