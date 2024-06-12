import { AnimatePresence,motion } from "framer-motion";
import { useState } from "react";
import useAuthContext from "../../context/AuthContext";
import doc from "./doc.png"
import "./show_patient_infos.css"



const Patient_infos = (props) => {
    const selectedpatient = props.selectedpatient;
    const setselectedpatient = props.setselectedpatient;
    const showdoc = props.showdoc;
    const setshowdoc = props.setshowdoc;

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0'); 
    const formattedDate = `${year}-${month}-${day}`;

    const {demands,user,appointments,users} = useAuthContext()
    const [clicked,setclicked] = useState("1")
    const [upcoming,setupcoming] = useState("1")


const upcoming_apps = appointments.filter(a=>a.patient_id == selectedpatient.patient_id && a.doctor_id==user.id && a.date>formattedDate)
const past_apps = appointments.filter(a=>a.patient_id == selectedpatient.patient_id && a.doctor_id==user.id && a.date<formattedDate)

console.log(upcoming_apps)

    return ( 
        <>
        <motion.div
        initial={{x:1000}}
        animate={{x:0}}
        transition={{type:"just"}}
        className="patient_appointments">
            <div className="linee"></div>
            <div className="patient_appointments_header">
                <h2 onClick={()=>setshowdoc(false)} style={{cursor:"pointer"}}>Appointments</h2>
                <i class="fa-solid fa-angle-right"></i>
                <h3>Dr. {selectedpatient.patient_name}</h3>
            </div>
            <div className="linee"></div>
            <div className="patient_appointments_doctor_infos">
                <div className="doctor_infos">
                    <div className="doc_message">
                        <img src={doc} alt="" />
                        <h2>{selectedpatient.patient_name}</h2>
                        <h3>{demands.find(x=>x.patient_id == selectedpatient.patient_id).patient_email}</h3>
                        <div className="past_upcoming_apps">
                            <div className="past">
                                <p>{appointments.filter(a=>a.doctor_id == user.id && a.patient_id == selectedpatient.patient_id && a.date<formattedDate).length}</p>
                                <p>Past</p>
                            </div>
                            <div className="linethrough"></div>
                            <div className="upcoming">
                                <p>{appointments.filter(a=>a.doctor_id == user.id && a.patient_id == selectedpatient.patient_id && a.date>=formattedDate).length}</p>
                                <p>Upcoming</p>
                            </div>
                        </div>
                    </div>
                    <div className="doc_infos">
                        <div className="second_infos">
                            <div className="first_t">
                                <div className="gender">
                                    <p className="first">Gender</p>
                                    <p className="second">Male</p>
                                </div>
                                <div className="birthday">
                                    <p className="first">Birthday</p>
                                    <p className="second">june 11, 2001</p>
                                </div>
                                <div className="phone">
                                    <p className="first">Phone Number</p>
                                    <p className="second">{selectedpatient.patient_phone_number}</p>
                                </div>
                            </div>
                            <div className="second_t">
                                <div className="gender">
                                    <p className="first">City</p>
                                    <p className="second">Meknes</p>
                                </div>
                                <div className="birthday">
                                    <p className="first">Zip Code</p>
                                    <p className="second">53000</p>
                                </div>
                                <div className="phone">
                                    <p className="first">Client Status</p>
                                    <p className="second">Active</p>
                                </div>
                            </div>
                            <div className="third_t">
{/*                                 <div className="gender">
                                    <p className="first">Patient</p>
                                    <p className="second">Since</p>
                                </div> */}
                                <div className="birthday">
                                    <p className="first">Registred Date</p>
                                    <p className="second">june 11, 2001</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pdfss">
                        <div className="pdf_header">
                            <h2>Files / Documents</h2>
                            <div style={{cursor:"pointer"}} className="pdf_header_2">
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 16H9V13H12V11H9V8H7V11H4V13H7V16ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H10L16 6V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 7V2H2V18H14V7H9Z" fill="#337EFB"/>
                                </svg>
                                <p>Add Files</p>
                            </div>
                        </div>
                        <div className="pdfs_files">
                            <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 11.7H9V10.3H3V11.7ZM3 8.9H9V7.5H3V8.9ZM1.5 14.5C1.0875 14.5 0.734375 14.3629 0.440625 14.0887C0.146875 13.8146 0 13.485 0 13.1V1.9C0 1.515 0.146875 1.18542 0.440625 0.91125C0.734375 0.637083 1.0875 0.5 1.5 0.5H7.5L12 4.7V13.1C12 13.485 11.8531 13.8146 11.5594 14.0887C11.2656 14.3629 10.9125 14.5 10.5 14.5H1.5ZM6.75 5.4V1.9H1.5V13.1H10.5V5.4H6.75Z" fill="black"/>
                            </svg>
                            <p>Check up results.pdf</p>
                        </div>
                    </div>
                </div>
                <div className="sec_half_elementss">
                    <div className="up_past_graphh">
                        <div className="up_past_apps_click">
                            {clicked=="1" ?<button onClick={()=>{setclicked("1");setupcoming("1")}}>upcoming appointments</button>:<button onClick={()=>{setclicked("1");setupcoming("1")}} style={{backgroundColor:"transparent",color:"#555555"}}>upcoming appointments</button>}
                            {clicked=="2" ?<button onClick={()=>{setclicked("2");setupcoming("-1")}}>past appointments</button>:<button onClick={()=>{setclicked("2");setupcoming("-1")}} style={{backgroundColor:"transparent",color:"#555555"}}>past appointments</button>}
                        </div>
                        {upcoming=="1" ?<div className="app_graphh">
                            <h2>treatments schedule</h2>
                            {upcoming_apps.sort((a, b) => new Date(a.date) - new Date(b.date))
                                            .map(x=>(
                                            <div className="inside_graphh" style={upcoming_apps.length == 1 ? {height:"75%"} : {}}>
                                                <div className="shapes">
                                                    <div className="colored_line"></div>
                                                </div>
                                                <div className="upcoming_past_app">
                                                    <div className="upcoming_past_app_date">
                                                        <p>{x.date}</p>
                                                    </div>
                                                    <div className="line"></div>
                                                    <div className="upcoming_past_app_traitment">
                                                        <p>Treatment</p>
                                                        <p>Ilness</p>
                                                    </div>
                                                    <div className="line"></div>
                                                    <div className="upcoming_past_app_traitment">
                                                        <p>Doctor</p>
                                                        <p>Dr. {user.first_name} {user.last_name}</p>
                                                    </div>
                                                    <div className="upcoming_past_app_doctor_notes">
                                                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.5 11.2H9.5V9.8H3.5V11.2ZM3.5 8.4H9.5V7H3.5V8.4ZM2 14C1.5875 14 1.23438 13.8629 0.940625 13.5887C0.646875 13.3146 0.5 12.985 0.5 12.6V1.4C0.5 1.015 0.646875 0.685417 0.940625 0.41125C1.23438 0.137083 1.5875 0 2 0H8L12.5 4.2V12.6C12.5 12.985 12.3531 13.3146 12.0594 13.5887C11.7656 13.8629 11.4125 14 11 14H2ZM7.25 4.9V1.4H2V12.6H11V4.9H7.25Z" fill="#337EFB"/>
                                                        </svg>
                                                        <h2>note</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            ))}
                                            {upcoming_apps.length==0
                                            &&<h3 className="notfound">No Upcoming Appointments</h3>}
                        </div>
                        :
                        <div className="app_graphh">
                            <h2>treatments schedule</h2>
                            {past_apps.sort((a, b) => new Date(a.date) - new Date(b.date))
                                            .map(x=>(
                                            <div className="inside_graphh" style={past_apps.length == 1 ? {height:"75%"} : {}}>
                                                <div className="shapes">
                                                    <div className="colored_line"></div>
                                                </div>
                                                <div className="upcoming_past_app">
                                                    <div className="upcoming_past_app_date">
                                                        <p>{x.date}</p>
                                                    </div>
                                                    <div className="line"></div>
                                                    <div className="upcoming_past_app_traitment">
                                                        <p>Treatment</p>
                                                        <p>Ilness</p>
                                                    </div>
                                                    <div className="line"></div>
                                                    <div className="upcoming_past_app_traitment">
                                                        <p>Doctor</p>
                                                        <p>Dr. {user.first_name} {user.last_name}</p>
                                                    </div>
                                                    <div className="upcoming_past_app_doctor_notes">
                                                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.5 11.2H9.5V9.8H3.5V11.2ZM3.5 8.4H9.5V7H3.5V8.4ZM2 14C1.5875 14 1.23438 13.8629 0.940625 13.5887C0.646875 13.3146 0.5 12.985 0.5 12.6V1.4C0.5 1.015 0.646875 0.685417 0.940625 0.41125C1.23438 0.137083 1.5875 0 2 0H8L12.5 4.2V12.6C12.5 12.985 12.3531 13.3146 12.0594 13.5887C11.7656 13.8629 11.4125 14 11 14H2ZM7.25 4.9V1.4H2V12.6H11V4.9H7.25Z" fill="#337EFB"/>
                                                        </svg>
                                                        <h2>note</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            ))}
                                            {past_apps.length==0
                                            &&<h3 className="notfound">No Last Appointments</h3>}
                                            
                        </div>}
                    </div>
{/*                     <div className="pdfs">
                        sshhhs
                    </div> */}
                </div>
            </div>
        </motion.div>
        </>
     );
}
 
export default Patient_infos;


{/* <p>{appointments.filter(a=>a.patient_id == selectedpatient.patient_id && a.doctor_id==user.id && a.date<formattedDate)
                                            .sort((a, b) => new Date(a.date) - new Date(b.date))
                                            .slice(-1).map(x=><p>{x.date}</p>)}
                                        </p> */}


                                        {/* <div className="notes">
                                        <h2>Review</h2>
                                        <textarea name="" id=""></textarea>
                                        <div className="button">
                                            <button>Save</button>
                                        </div>
                                        <div className="mynotes">
                                            <div className="note_infos">
                                                <p>Dr. David Lee</p>
                                                <p>Pediatrics</p>
                                            </div>
                                            <div className="date">
                                                <p>6 may, 2024</p>
                                            </div>
                                        </div>
                                        <div className="mynotes">
                                            <div className="note_infos">
                                                <p>Dr. David Lee</p>
                                                <p>Pediatrics</p>
                                            </div>
                                            <div className="date">
                                                <p>6 may, 2024</p>
                                            </div>
                                        </div>
                                    </div> */}