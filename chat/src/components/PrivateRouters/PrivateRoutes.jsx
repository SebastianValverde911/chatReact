import React,{useContext} from "react";
import { UserContext } from "../../context/UserContex";

export const PrivateRoutes = ({children}) => {
    const {user} = useContext(UserContext);
    return user ? children : <>Error 403</>
}