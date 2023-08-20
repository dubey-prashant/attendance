"use client"

import { createContext, useState, useEffect } from "react"; 

export const UserContext = createContext({ user: null, setUser: () => { }, loadingUser: false, isLoggedIn: false, setIsLoggedIn: () => { } });
 

export const UserContextProvider = ({ children }) => { 
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const value = { user, setUser, loadingUser, isLoggedIn, setIsLoggedIn }
  // useEffect(() => {
  //   setLoadingUser(true)
  //   axiosInstance.get("/user/profile").then((res) => {
  //     setUser(res.data.data);
  //     setLoadingUser(false)
  //   }).catch((err) => {
  //     console.log(err)
  //     router.push("/auth/login")
  //     setLoadingUser(false)
  //   }
  //   );
  // }, []);

  return (
    <UserContext.Provider value={value } >
      {children}
    </UserContext.Provider>
  );
};
