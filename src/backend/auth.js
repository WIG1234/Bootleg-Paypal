import React,{useState,useEffect} from"react";
import  app from "./firebase";

export const AuthContext=React.createContext();

export const AuthProvider=({children})=>{ 
    const [user,setUser]=useState( null);
    useEffect(()=>{
        app.auth().onAuthStateChange(setUser);

    },[]);
    return(
        <AuthContext.Provider
        value={{user}}>
            {children}

        </AuthContext.Provider>

    );
}