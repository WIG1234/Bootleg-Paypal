import React,{useContent} from"react";
import{Routes,Redirect, Route} from "react-router-dom";
import{AuthContext} from"./auth.js";
const PrivateRoute=({component:RouteComponent,...rest})=>{
    const {user}=useContext(AuthContext);
    return(
        <Route
        {...rest}
        render={routeProps =>
            !!user ?(
            <RouteComponent {...routeProps}/>
            ):(<Redirect to={login}/>)
        }
        />

    )

}
export default PrivateRoute;