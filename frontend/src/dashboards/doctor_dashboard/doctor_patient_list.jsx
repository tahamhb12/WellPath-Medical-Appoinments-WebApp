import doc from "./img.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useAuthContext from "../../context/AuthContext";
import axios from "../../api/axios";
import Swal from 'sweetalert2';


const Patient_list = (props) => {
    const {showdoc, setshowdoc, selectedpatient, setselectedpatient } = props;
    const { demands, user, appointments, getDemands,users } = useAuthContext();
    const [search,setsearch] = useState("")

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    let ttt = appointments.filter(x=>x.doctor_id==user.id)
    ttt = search !== "" ? ttt.filter((p) => p.patient_name.toLowerCase().includes(search.toLowerCase())) : ttt;





    const removeDuplicates = (array) => {
        const uniqueAppointments = [];
        const seen = new Set();
    
        array.forEach((ttt) => {
          if (!seen.has(ttt.patient_id)) {
            seen.add(ttt.patient_id);
            uniqueAppointments.push(ttt);
          }
        });
    
        return uniqueAppointments;
      };
    
      const uniqueAppointments = removeDuplicates(ttt);

    console.log(uniqueAppointments)

    return (
        <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="patient_appointments">
            <div className="linee"></div>
            <div className="patient_appointments_header">
                <div className="appointments_counter">
                    <h3 style={{ color: "#195696", fontSize: "24px", fontWeight: "600" }}>
                        {uniqueAppointments.length}
                        <span> Patients</span>
                    </h3>
                </div>
                <div className="line"></div>
                    <div className="searchinp">
                        <input type="search" className="patients_search_bar" placeholder="Search" onChange={(e)=>setsearch(e.target.value)}/>
                    </div>
            </div>
            <div className="linee"></div>
                    <div className="patient_requests_section">
                        <h2>Requests</h2>
                        <div className="column_names">
                            <div className="inp">
                                <input type="checkbox" />
                                <p>Basic Info</p>
                            </div>
                            <div className="names">
                                <p>Phone Number</p>
                                <p>City</p>
                                <p>Next Appointment</p>
                                <p>Last Appointment</p>
                                <p>Register Date</p>
                            </div>
                        </div>
                        <div className="patients_requests">
                            {uniqueAppointments.map((a, index) => (
                                <div style={{ cursor: "pointer" }} className="patient_requests" key={index} onClick={() => { setselectedpatient(a); setshowdoc(true) }}>
                                    <div className="inp">
                                        <input className="checkboxs" type="checkbox" onClick={(e) => e.stopPropagation()} />
                                        <div className="doc_infoss">
                                            <img src={doc} alt="" />
                                            <div className="name">
                                                <p style={{textTransform:"capitalize"}}>{a.patient_name}</p>
                                                <p>{a.doctor_email}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="namess" style={{gap:"56px"}}>
                                        <p>{a.patient_phone_number}</p>
                                        <p>Meknes</p>
                                        {appointments.filter(x => x.patient_id === a.patient_id && x.doctor_id === user.id && x.date > formattedDate)
                                            .sort((a, b) => new Date(a.date) - new Date(b.date))
                                            .slice(-1).length ? <p>{appointments.filter(x => x.patient_id === a.patient_id && x.doctor_id === user.id && x.date > formattedDate)
                                            .sort((a, b) => new Date(a.date) - new Date(b.date))
                                            .slice(-1)
                                            .map(a => <p key={a.id} style={{width:"132px"}}>{a.date}</p>)
                                            }</p>
                                        :<p style={{width:"132px"}}>No Appointment</p>}

                                        {appointments.filter(x => x.patient_id === a.patient_id && x.doctor_id === user.id && x.date < formattedDate)
                                            .sort((a, b) => new Date(a.date) - new Date(b.date))
                                            .slice(-1).length ? <p>{appointments.filter(x => x.patient_id === a.patient_id && x.doctor_id === user.id && x.date < formattedDate)
                                            .sort((a, b) => new Date(a.date) - new Date(b.date))
                                            .slice(-1)
                                            .map(a => <p key={a.id} style={{width:"132px"}}>{a.date}</p>)
                                            }</p>
                                        :<p style={{width:"132px"}}>No Appointment</p>}
                                        <p style={{width:"111px"}}>{users.find(i=>i.id==a.patient_id).created_at.slice(0,10)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            {demands.length === 0 && appointments.length === 0 && <h2>No Patients Found...</h2>}
        </motion.div>
        </AnimatePresence>
    );
}

export default Patient_list;
