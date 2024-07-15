/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
    const [user, setUser] = useState({
        userId: 1,
        fullName: "Huu Thang",
        email: "evondev@gmail.com",
    });
    const value = {user, setUser}
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
    const context = useContext(AuthContext);
    if (typeof context === "undefined") throw new Error("Must use in AuthProvider");
    return context;
}

export {useAuth, AuthProvider}