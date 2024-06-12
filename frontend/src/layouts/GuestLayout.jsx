import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const GuestLaoyout = () => {

    const {user} = useAuthContext();

    return !user ? <Outlet/> : <Navigate/>
}
 
export default GuestLaoyout;