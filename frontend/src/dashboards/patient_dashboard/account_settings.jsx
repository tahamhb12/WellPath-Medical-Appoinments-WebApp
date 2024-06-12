import doc from "./doc.png"
import useAuthContext from "../../context/AuthContext";
import {motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import Swal from 'sweetalert2';


const Account_settings = () => {


    const [first_name, setfirst_name] = useState("")
    const [last_name, setlast_name] = useState("")
    const [phone_number, setphone_number] = useState("")
    const [email, setemail] = useState("")
    const [service, setservice] = useState("")

    const {user,getuser} = useAuthContext()

    useEffect(()=>{
        setfirst_name(user.first_name)
        setlast_name(user.last_name)
        setphone_number(user.phone_number)
        setservice(user.service)
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        if(first_name!== user.first_name || last_name!== user.last_name || phone_number!== user.phone_number){
          await axios.put('api/user/update',{first_name,last_name,phone_number});
            Swal.fire({
                title: "Done!",
                text: `You have Changed Your Informations Succesfully. `,
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
/*             if(error.response.status === 422){
                seterrors(error.response.data.errors)
                setTimeout(() => {
                    seterrors([])
                }, 5000);
            } */
            console.log(error)
        }
      };

    return ( 
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        className="settings">
            <div className="profile_setting">
                <div className="image_settings">
                    <h2>your profile picture</h2>
                    <div className="image_sec">
                        <img src={doc} alt="" />
                        <button className="upload_new">upload new</button>
                        <button className="remove_pic">remove profile picture</button>
                    </div>
                </div>
                <div className="line"></div>

                <form onSubmit={handleSubmit} className="user_inps">
                    <div className="full_name">
                        <div className="first_name">
                            <p>First Name</p>
                            <input type="text" defaultValue={user.first_name} onChange={(e)=>setfirst_name(e.target.value)}/>
                        </div>
                        <div className="first_name">
                            <p>Last Name</p>
                            <input type="text" defaultValue={user.last_name} onChange={(e)=>setlast_name(e.target.value)}/>
                        </div>
                    </div>
                    <div className="full_name">
                        <div className="first_name">
                            <p>Email Address</p>
                            <input type="email" defaultValue={user.email} disabled style={{backgroundColor:"#eee",cursor:"not-allowed"}}/>
                        </div>
                        <div className="first_name">
                            <p>Phone Number</p>
                            <input type="text" minLength={0} maxLength={10} defaultValue={user.phone_number} onChange={(e)=>setphone_number(e.target.value)}/>
                        </div>
                    </div>
                    <div className="full_name">
                        <div className="first_name">
                            <p>Birthday</p>
                            <input type="text" defaultValue={"2000-01-01"}/>
                        </div>
                        {user.role=="doctor" && <div className="first_name">
                            <p>Service</p>
                            <input type="text" defaultValue={user.service} disabled style={{backgroundColor:"#eee",cursor:"not-allowed"}} onChange={(e)=>setservice(e.target.value)}/>
                        </div>}
                    </div>
                    <div className="confirm_changes">
                        <button type="reset">Cancel</button>
                        <button type="submit">Confirm</button>
                    </div>
                </form>
            </div>
        </motion.div>
     );
}
 
export default Account_settings;