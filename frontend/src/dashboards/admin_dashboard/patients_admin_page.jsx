import doc from "./img.png";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useAuthContext from "../../context/AuthContext";
import axios from "../../api/axios";
import Swal from 'sweetalert2';
import "./admin_doctors_list.css";

const Patients_admin = (props) => {
    const { demands, user, appointments, getDemands, users, getusers,getuser,register } = useAuthContext();
    const [search, setsearch] = useState("");
    const [show, setshow] = useState(false);
    const [patient_infos, setpatient_infos] = useState(null);
    const [reloadusers,setreloadusers] = useState(false)



    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];




    let patients = users.filter(a => a.role === "patient");
    patients = search !== "" ? patients.filter((p) => p.first_name.toLowerCase().includes(search.toLowerCase()) || p.last_name.toLowerCase().includes(search.toLowerCase())) : patients;


    const delete_demads_by_id =async (id) =>{
        try {
            await axios.delete(`/api/demands/patient/${id}`)
        } catch (error) {
            console.log(error)
        }
    }
    const delete_appointments_by_id =async (id) =>{
        try {
            await axios.delete(`/api/appointments/patient/${id}`)
        } catch (error) {
            console.log(error)
        }
    }
    const delete_ratings_by_id =async (id) =>{
        try {
            await axios.delete(`/api/ratings/patient/${id}`)
        } catch (error) {
            console.log(error)
        }
    }
    const delete_reviews_by_id =async (id) =>{
        try {
            await axios.delete(`/api/reviews/patient/${id}`)
        } catch (error) {
            console.log(error)
        }
    }


    const delete_doc = (id) =>{
        try {
            Swal.fire({
                title: "Are You Sure You Want To Delete this Patient?",
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
                    delete_ratings_by_id(id)
                    delete_reviews_by_id(id)
                    Swal.fire({
                        title: "Booked!",
                        text: `You have Deleted A Patient Successfully `,
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
        getusers()
    },[reloadusers]);


    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="patient_appointments">
                <div className="linee"></div>
                <div className="patient_appointments_header">
                    <div className="appointments_counter">
                        <h3 style={{ color: "#195696", fontSize: "24px", fontWeight: "600" }}>
                            {patients.length}
                            <span> Patients</span>
                        </h3>
                    </div>
                    <div className="line"></div>
                    <div className="searchinp">
                        <input type="search" className="patients_search_bar" placeholder="Search" onChange={(e) => setsearch(e.target.value)} />
                    </div>
                </div>
                <div className="linee"></div>
                <div className="patient_requests_section">
                    <div className="column_names">
                        <div className="inp">
                            <input type="checkbox" />
                            <p>Basic Info</p>
                        </div>
                        <div className="names" style={{gap:"70px"}}>
                            <p>Phone Number</p>
                            <p>City</p>
                            <p>Next Appointment</p>
                            <p>Register Date</p>
                        </div>
                    </div>
                    <div className="patients_requests">
                        {patients.map((a, index) => (
                            <div style={{ cursor: "pointer" }} className="patient_requests" key={index}>
                                <div className="inp">
                                    <input className="checkboxs" type="checkbox" onClick={(e) => e.stopPropagation()} />
                                    <div className="doc_infoss">
                                        <img src={doc} alt="" />
                                        <div className="name">
                                            <p style={{ textTransform: "capitalize" }}>{a.first_name} {a.last_name}</p>
                                            <p>{a.email}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="namess">
                                    <p style={{position:"relative",left:"-4"}}>{a.phone_number}</p>
                                    <p>Meknes</p>
                                    {appointments.filter(x => x.patient_id === a.id && x.date > formattedDate).length > 0 ?
                                        appointments.filter(x => x.patient_id === a.id && x.date > formattedDate)
                                        .sort((a, b) => new Date(a.date) - new Date(b.date))
                                        .slice(0,1).map(y => <p style={{width:"111px"}} key={y.id}>{y.date}</p>)
                                        :
                                        <p>No Appointment</p>}
                                    <p>{a.created_at.slice(0, 10)}</p>
                                </div>
{/*                                 <div onClick={() => setactions(!actions)} className="admin_doctors_dots">
                                    <i className="fa-solid fa-bars"></i>
                                </div> */}
                                <button onClick={() => { setpatient_infos(a); setshow(true)}} className="patient_infos_admin">Patient Details</button>
                                <i onClick={()=>delete_doc(a.id)} class="dell fa-solid fa-x"></i>
{/*                                 {actions && <div className="admin_doctors_actions">
                                    <button onClick={() => { setdoctor_infos(a); setshow(true);setactions(false) }}>Update Infos</button>
                                    <button onClick={()=>delete_doc(a.id)}>Delete</button>
                                </div>} */}
                            </div>
                        ))}
                        {patients.length==0 && <h2>No Patients Found...</h2>}
                    </div>
                </div>
                <AnimatePresence>
                    {show && <div className="admin_doctor_modal">
                        <motion.form
                            initial={{ x: 2000 }}
                            animate={{ x: 0 }}
                            transition={{ type: "just" }}
                            exit={{ x: 2000 }}
                            className="sss">
                            <div className="fulln">
                                <div className="first_name">
                                    <p>First Name</p>
                                    <input type="text" disabled defaultValue={patient_infos.first_name} onChange={(e) => setfirst_name(e.target.value)} />
                                </div>
                                <div className="first_name">
                                    <p>Last Name</p>
                                    <input type="text" disabled defaultValue={patient_infos.last_name} onChange={(e) => setlast_name(e.target.value)} />
                                </div>
                            </div>
                            <div className="email">
                                <p>Email</p>
                                <input style={{ textTransform: "none" }} type="email" disabled defaultValue={patient_infos.email} onChange={(e) => setemail(e.target.value)} />
                            </div>
                            <div className="email">
                                <p>Phone Number</p>
                                <input type="text" disabled minLength={0} maxLength={10} defaultValue={patient_infos.phone_number} onChange={(e) => setphone_number(e.target.value)} />
                            </div>
                            <div className="email">
                                <p>Role</p>
                                <input type="text" disabled defaultValue={patient_infos.role} onChange={(e) => setrole(e.target.value)} />
                            </div>
                            <div className="email">
                                <p>Created_at</p>
                                <input type="text" disabled defaultValue={patient_infos.created_at.slice(0,10)} onChange={(e) => setrole(e.target.value)} />
                            </div>
                            <div className="buttons">
                                <button type="reset" onClick={()=>setshow(false)}>Back</button>
                            </div>
                        </motion.form>
                    </div>}
                </AnimatePresence>
            </motion.div>
        </AnimatePresence>
    );
}

export default Patients_admin;
