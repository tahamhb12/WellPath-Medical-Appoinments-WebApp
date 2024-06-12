import {createContext,useContext,useEffect,useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children })=>{


    const [header,setheader] = useState("Dashboard")
    const [user,setuser] = useState(null);
    const [users,setusers] = useState([]);
    const [demands,setdemands] = useState([]);
    const [appointments,setAppointments] = useState([]);
    const [reviews,setreviews] = useState([]);
    const [ratings,setratings] = useState([]);
    const [login_errors,setlogin_errors] = useState([]);
    const [register_errors,setRegister_errors] = useState([]);


    const navigate = useNavigate();
    const csrf =  () => axios.get("/sanctum/csrf-cookie");

    const getusers =async() =>{
        const {data} = await axios.get("/api/users")
        setusers(data)
    }

    const getuser = async() => {
        const { data } = await axios.get("/api/user");
        setuser(data)
    }

    const login = async ({ ...data })=>{
        await csrf()
        try {
            await axios.post('/login',data);
            await getuser();
            navigate("/")
        } catch (error) {
            if(error.response.status === 422){
                setlogin_errors(error.response.data.errors)
            }
    }}

    const register = async ({ ...data })=>{
        await csrf()
        try {
            await axios.post('/register',data);
            await getuser();
            navigate("/")
        } catch (error) {
            if(error.response.status === 422){
                setRegister_errors(error.response.data.errors)
            }
    }}

    const getDemands = async()=>{
        const {data} = await axios.get("/api/demands")
        setdemands(data)
    }

    const getAppoinments = async()=>{
        const {data} = await axios.get("/api/appointments")
        setAppointments(data)
    }

    const store_review=async({...data})=>{
        try { 
            await axios.post("/api/reviews",data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const getReviews = async()=>{
        const {data} = await axios.get("/api/reviews")
        setreviews(data)
    }

    const store_rating=async({...data})=>{
        try { 
            await axios.post("/api/ratings",data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const getRatings = async()=>{
        const {data} = await axios.get("/api/ratings")
        setratings(data)
    }

    const logout = () => {
        axios.post("/logout").then(()=>{
            setuser(null)
        })
    }

    useEffect(()=>{
        if(!user){
          getuser()
        }
      },[])

    return <AuthContext.Provider value={{
        user,
        header,
        setheader,
        users,
        demands,
        appointments,
        login_errors,
        register_errors,
        reviews,
        ratings,
        login,
        register,
        logout,
        getusers,
        getuser,
        getDemands,
        getAppoinments,
        store_review,
        getReviews,
        store_rating,
        getRatings
    }}> {children} </AuthContext.Provider>
}
export default function useAuthContext(){
    return useContext(AuthContext);
}