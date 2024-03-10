import { createContext, useState, useCallback } from 'react';

export const AuthContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loginError, setLoginError] = useState(null);
  const [isLoginLoading, setIsLoginLoading] = useState(null);
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(null);
  const [registerInfo, setRegisterInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const [forgotPassError, setForgotPassError] = useState(null);
  const [isForgotPassLoading, setIsForgotPassLoading] = useState(null);
  const [resetPassInfo, setForgotPassInfo] = useState({
    email: '',
  });

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  const registerUser = useCallback(async (e) => {
    e.preventDefault();

    setIsRegisterLoading(true);
    setRegisterError(null);

    await delay(500);
    const response = {
      error: true,
      message:
        'We are not registering any new users at the moment. The inconvinience is regretted. You can however go through the entire app without login as well. Thanks',
    };

    setIsRegisterLoading(false);
    if (response.error) {
      return setRegisterError(response);
    }
    localStorage.setItem('User', JSON.stringify(response));
    setUser(response);
  }, []);

  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info);
  }, []);

  const loginUser = useCallback(async (e) => {
    e.preventDefault();

    setIsLoginLoading(true);
    setLoginError(null);

    await delay(500);
    const response = {
      error: true,
      message: 'User not found.',
    };

    setIsLoginLoading(false);
    if (response.error) {
      return setLoginError(response);
    }
    localStorage.setItem('User', JSON.stringify(response));
    setUser(response);
  }, []);

  const updateResetPassInfo = useCallback((info) => {
    setForgotPassInfo(info);
  }, []);

  const sendPassResetLink = useCallback(async (e) => {
    e.preventDefault();

    setIsForgotPassLoading(true);
    setForgotPassError(null);

    await delay(500);
    const response = {
      error: false,
      success: true,
      message:
        "A link has not been sent because we do not have any userbase as of now. Let's meet sometime later..",
    };

    setIsForgotPassLoading(false);
    if (response.error) {
      return setForgotPassError(response);
    }
  }, []);

  const logoutUser = useCallback(() => {
    localStorage.removeItem('User');
    setUser(null);
  }, []);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        registerError,
        isRegisterLoading,
        logoutUser,
        loginInfo,
        updateLoginInfo,
        loginUser,
        loginError,
        isLoginLoading,
        resetPassInfo,
        updateResetPassInfo,
        sendPassResetLink,
        forgotPassError,
        isForgotPassLoading,
      }}
    >
      {' '}
      {children}
    </AuthContext.Provider>
  );
};
