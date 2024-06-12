import {motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import Swal from 'sweetalert2';
import useAuthContext from "../../context/AuthContext";


const Security_settings = () => {


    const [current_password, setcurrent_password] = useState("")
    const [password, setpassword] = useState("")
    const [password_confirmation, setpassword_confirmation] = useState("")
    const [errors, seterrors] = useState([])
    const {user,getuser} = useAuthContext()

    useEffect(()=>{
        setpassword(user.password)
    },[])

    console.log(user.password)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(password!== user.password){
                await axios.put('api/user/update',{first_name:user.first_name,last_name:user.last_name,phone_number:user.phone_number,password,password_confirmation});
                Swal.fire({
                    title: "Done!",
                    text: `You have Changed Your Password Succesfully. `,
                    icon: "success"
                  });
                  getuser()
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No updates have been made. Please modify the information to submit your changes!",
                  });
            }
        } catch (error) {
            if(error.response.status === 422){
                seterrors(error.response.data.errors)
                setTimeout(() => {
                    seterrors([])
                }, 5000);
            }
            console.log(error)
        }
      };

    const Resetform = () =>{
        setpassword(user.password)
      }

    return ( 
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        className="settings">
            <form onSubmit={handleSubmit} onReset={Resetform} className="security_settings">
{/*                 <div className="password">
                    <p>current password</p>
                    <input type="password" onChange={(e)=>setcurrent_password(e.target.value)}/>
                </div> */}
                <div className="password">
                    <p>new password</p>
                    <input type="password" onChange={(e)=>setpassword(e.target.value)}/>
                </div>
                <div className="password">
                    <p>repeat new password</p>
                    <input type="password" onChange={(e)=>setpassword_confirmation(e.target.value)}/>
                </div>
                <div className="buttons">
                    <button type="reset">Cancel</button>
                    <button type="submit">Confirm</button>
                </div>
            </form>
            {errors.password&&<p className="error">{errors.password[0]}</p>}
        </motion.div>
     );
}
 
export default Security_settings;