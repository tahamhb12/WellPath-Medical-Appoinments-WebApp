import doc from "./doc.png";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useAuthContext from "../../context/AuthContext";
import axios from "../../api/axios";
import Swal from 'sweetalert2';
import "./admin_doctors_list.css";

const Admin_doctors_list = (props) => {
    const { demands, user, appointments, getDemands, users, getusers,getuser,register } = useAuthContext();
    const [search, setsearch] = useState("");
    const [actions, setactions] = useState(false);
    const [show, setshow] = useState(false);
    const [add, setadd] = useState(false);
    const [doctor_infos, setdoctor_infos] = useState(null);

    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [phone_number, setphone_number] = useState("");
    const [email, setemail] = useState("");
    const [service, setservice] = useState("");
    const [role, setrole] = useState("");
    const [password, setpassword] = useState("");
    const [password_confirmation, setpassword_confirmation] = useState("");
    const [errors, seterrors] = useState([]);
    const [reloadusers,setreloadusers] = useState(false)

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    useEffect(() => {
        if (doctor_infos) {
            setfirst_name(doctor_infos.first_name);
            setlast_name(doctor_infos.last_name);
            setphone_number(doctor_infos.phone_number);
            setrole(doctor_infos.role);
            setservice(doctor_infos.service);
            setemail(doctor_infos.email);
        }
    },[doctor_infos]);


    let doctors = users.filter(a => a.role === "doctor");
    doctors = search !== "" ? doctors.filter((p) => p.first_name.toLowerCase().includes(search.toLowerCase()) || p.last_name.toLowerCase().includes(search.toLowerCase())) : doctors;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (first_name !== doctor_infos.first_name || last_name !== doctor_infos.last_name || phone_number !== doctor_infos.phone_number || role !== doctor_infos.role || service !== doctor_infos.service || email !== doctor_infos.email) {
                await axios.put(`api/user/${doctor_infos.id}`, { first_name, last_name, phone_number, email, service,role });
                Swal.fire({
                    title: "Done!",
                    text: "You have changed your information successfully.",
                    icon: "success"
                });
                getusers()
                setshow(false)
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No updates have been made. Please modify the information to submit your changes!",
                });
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                Swal.fire({
                    icon: "error",
                    title: "Email Taken",
                    text: "The email address you entered is already in use. Please try a different email address.",
                });
            } else {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "An unexpected error occurred. Please try again later.",
                });
            }
        }
    };

    const handleRegister = async(event)=>{
        event.preventDefault();
        seterrors([])
        try {
            await axios.post("/api/users",{first_name,last_name,phone_number,email,password,password_confirmation,role:"doctor",service})
            Swal.fire({
                title: "Done!",
                text: "You have Added A New Doctor Successfully.",
                icon: "success"
            });
            setadd(false)
            getusers()
        } catch (error) {
            if(error.response.status === 422){
                seterrors(error.response.data.errors)
            }
        }
    }
    const delete_demads_by_id =async (id) =>{
        try {
            await axios.delete(`/api/demands/doctor/${id}`)
        } catch (error) {
            console.log(error)
        }
    }
    const delete_appointments_by_id =async (id) =>{
        try {
            await axios.delete(`/api/appointments/doctor/${id}`)
        } catch (error) {
            console.log(error)
        }
    }


    const delete_doc = (id) =>{
        try {
            Swal.fire({
                title: "Are You Sure You Want To Delete this Doctor?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirm!",
              }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`/api/users/${id}`)
                    setreloadusers(!reloadusers)
                    delete_appointments_by_id(id)
                    delete_demads_by_id(id)
                    Swal.fire({
                        title: "Booked!",
                        text: `You have Deleted A Doctor Successfully `,
                        icon: "success"
                    });
                    getusers()
                }})
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getusers()
    },[reloadusers]);


    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="patient_appointments">
                <div className="linee"></div>
                <div className="patient_appointments_header">
                    <div className="appointments_counter">
                        <h3 style={{ color: "#195696", fontSize: "24px", fontWeight: "600" }}>
                            {doctors.length}
                            <span> Doctors</span>
                        </h3>
                    </div>
                    <div className="line"></div>
                    <div className="searchinp">
                        <input type="search" className="patients_search_bar" placeholder="Search" onChange={(e) => setsearch(e.target.value)} />
                    </div>
                </div>
                <div className="linee"></div>
                <div className="patient_requests_section">
                    <h2 style={{width:"1195px"}}>Doctors <button onClick={()=>{setadd(true);seterrors([])}} style={{backgroundColor:"#195696" , width:"99px" , height:"29px"}}>Add Doctor</button></h2>
                    <div className="column_names">
                        <div className="inp">
                            <input type="checkbox" />
                            <p>Basic Info</p>
                        </div>
                        <div className="names">
                            <p>Phone Number</p>
                            <p>City</p>
                            <p>Speciality</p>
                            <p>Next Appointment</p>
                            <p style={{marginLeft:"-19px"}}>Register Date</p>
                        </div>
                    </div>
                    <div className="patients_requests">
                        {doctors.map((a, index) => (
                            <div style={{ cursor: "pointer",width:"1195px" }} className="patient_requests" key={index}>
                                <div className="inp">
                                    <input className="checkboxs" type="checkbox" onClick={(e) => e.stopPropagation()} />
                                    <div className="doc_infoss">
                                        <img src={doc} alt="" />
                                        <div className="name">
                                            <p style={{ textTransform: "capitalize",width:"170px" }}>Dr. {a.first_name} {a.last_name}</p>
                                            <p>{a.email}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="namess">
                                    <p style={{width:"63px"}}>{a.phone_number}</p>
                                    <p style={{width:"63px",position:"relative",left:"15px"}}>Meknes</p>
                                    <p style={{ textTransform: "capitalize",width:"63px"}}>{a.service}</p>
                                    {appointments.filter(x => x.doctor_id == a.id && x.date > formattedDate).length > 0 ?
                                        appointments.filter(x => x.doctor_id === a.id && x.date > formattedDate)
                                        .sort((a, b) => new Date(a.date) - new Date(b.date))
                                        .slice(0,1).map(y => <p style={{width:"107px",textAlign:"center"}} key={y.id}>{y.date}</p>)
                                        :
                                        <p style={{width:"115px",textAlign:"center"}}>No Appointment</p>}
                                    <p style={{width:"107px"}}>{a.created_at.slice(0, 10)}</p>
                                </div>
                                <i style={{position:"absolute",right:"20px",top:"20px"}} onClick={()=>delete_doc(a.id)} class="fa-solid fa-x"></i>
                                <button className="update_tt" style={{position:"absolute",right:"51px"}} onClick={() => { setdoctor_infos(a); setshow(true);setactions(false) }}>Update Infos</button>
{/*                                 <button className="delete_tt" style={{position:"absolute",right:"15px"}} onClick={()=>delete_doc(a.id)}>Delete</button>
 */}{/*                                 {actions && <div className="admin_doctors_actions">
                                    <button onClick={() => { setdoctor_infos(a); setshow(true);setactions(false) }}>Update Infos</button>
                                    <button onClick={()=>delete_doc(a.id)}>Delete</button>
                                </div>} */}
                            </div>
                        ))}
                        {doctors.length==0 && <h2>No Doctors Found...</h2>}
                    </div>
                </div>
                <AnimatePresence>
                    {show && <div className="admin_doctor_modal">
                        <motion.form onSubmit={handleSubmit}
                            initial={{ x: 2000 }}
                            animate={{ x: 0 }}
                            transition={{ type: "just" }}
                            exit={{ x: 2000 }}
                            className="sss">
                            <div className="fulln">
                                <div className="first_name">
                                    <p>First Name</p>
                                    <input type="text" defaultValue={doctor_infos.first_name} onChange={(e) => setfirst_name(e.target.value)} />
                                </div>
                                <div className="first_name">
                                    <p>Last Name</p>
                                    <input type="text" defaultValue={doctor_infos.last_name} onChange={(e) => setlast_name(e.target.value)} />
                                </div>
                            </div>
                            <div className="email">
                                <p>Email</p>
                                <input style={{ textTransform: "none" }} type="email" defaultValue={doctor_infos.email} onChange={(e) => setemail(e.target.value)} />
                            </div>
                            <div className="email">
                                <p>Phone Number</p>
                                <input type="text" minLength={0} maxLength={10} defaultValue={doctor_infos.phone_number} onChange={(e) => setphone_number(e.target.value)} />
                            </div>
                            <div className="email">
                                <p>Service</p>
                                <input type="text" defaultValue={doctor_infos.service} onChange={(e) => setservice(e.target.value)} />
                            </div>
                            <div className="email">
                                <p>Role</p>
                                <input type="text" defaultValue={doctor_infos.role} onChange={(e) => setrole(e.target.value)} />
                            </div>
                            <div className="buttons">
                                <button type="submit">Confirm</button>
                                <button type="reset" onClick={()=>setshow(false)}>Cancel</button>
                            </div>
                        </motion.form>
                    </div>}
                </AnimatePresence>

                <AnimatePresence>
                    {add && <div className="admin_doctor_modal">
                        <motion.form onSubmit={handleRegister}
                            initial={{ opacity:0 }}
                            animate={{ opacity: 1 }}
                            transition={{ type: "just" }}
                            exit={{ opacity: 0 }}
                            className="sss">
                            <div className="fulln">
                                <div className="first_name">
                                    <p>First Name</p>
                                    <input type="text"  onChange={(e) => setfirst_name(e.target.value)} />
                                </div>
                                <div className="first_name">
                                    <p>Last Name</p>
                                    <input type="text"  onChange={(e) => setlast_name(e.target.value)} />
                                </div>
                            </div>
                            <div className="email">
                                <p>Email</p>
                                <input style={{ textTransform: "none" }} type="email"  onChange={(e) => setemail(e.target.value)} />
                            </div>
                            {errors.email && <p>{errors.email[0]}</p>}
                            <div className="email">
                                <p>Phone Number</p>
                                <input type="text" minLength={0} maxLength={10}  onChange={(e) => setphone_number(e.target.value)} />
                            </div>
                            <div className="email">
                                <p>Service</p>
                                <input type="text"  onChange={(e) => setservice(e.target.value)} />
                            </div>
                            <div className="email">
                                <p>Role</p>
                                <input type="text" value={"doctor"} disabled/>
                            </div>
                            <div className="email">
                                <p>Password</p>
                                <input type="password"  onChange={(e) => setpassword(e.target.value)} />
                            </div>
                            <div className="email">
                                <p>Password Confirmation</p>
                                <input type="password"  onChange={(e) => setpassword_confirmation(e.target.value)} />
                            </div>
                            <div className="buttons">
                                <button type="submit">Confirm</button>
                                <button type="reset" onClick={()=>setadd(false)}>Cancel</button>
                            </div>
                        </motion.form>
                    </div>}
                </AnimatePresence>
            </motion.div>
        </AnimatePresence>
    );
}

export default Admin_doctors_list;
