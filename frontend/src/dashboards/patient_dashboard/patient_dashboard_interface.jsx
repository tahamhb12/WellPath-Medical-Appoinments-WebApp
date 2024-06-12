import { useEffect, useState } from "react";
import "./patient_dashboard_interface.css"
import useAuthContext from "../../context/AuthContext";
import axios from "../../api/axios";
import img from "./img.png"
import doc from "./doc.png"
import {motion} from "framer-motion"
import { Rate } from "antd";

const Patient_dash_interface = (props) => {



    const settabs=props.settabs;
    const setstatus=props.setstatus;
    const {user,appointments,users,ratings} = useAuthContext()

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0'); 
    const formattedDate = `${year}-${month}-${day}`;


    const apps = appointments.filter(a=>a.patient_id==user.id && a.date>=formattedDate).sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0,2);
    const doctors = users.filter(x=>x.role=="doctor")


    
    
    return ( 
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        className="patient_dash_interface">
            <div className="patient_dash_infos">
                <div className="patient_infos">
                        <p className="date">{formattedDate}</p>
                        <div className="patient_fullname">
                            <p>Good Morning</p>
                            <p>{user.first_name} {user.last_name}</p>
                        </div>
                        <p className="uhave_app">You Have <span>{appointments.filter(a=>a.patient_id == user.id && a.date == formattedDate).length} Appointment</span> Today</p>
                </div>
                <div className="patient_image">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="next_patient_appointments">
                <div className="firstt">
                    <div className="types">
                        <h2>Next Appointment</h2>
                        <p  onClick={()=>{settabs("Appointments");setstatus("pending")}}>Show All <i class="fa-solid fa-angle-right"></i></p>
                    </div>
                    {apps.length>0 ?<div className="next_app">
                        {apps.map((a,index)=>(
                            <div className="patient_appoin" key={index}>
                                <p className="app_name">Dr. {a.doctor_name}</p>
                                <div className="app time">
                                    <p className="ppp" style={{display:"flex",alignItems:"center",gap:"4px"}}><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.55556 16C1.12778 16 0.761574 15.8433 0.456944 15.53C0.152315 15.2167 0 14.84 0 14.4V3.2C0 2.76 0.152315 2.38333 0.456944 2.07C0.761574 1.75667 1.12778 1.6 1.55556 1.6H2.33333V0H3.88889V1.6H10.1111V0H11.6667V1.6H12.4444C12.8722 1.6 13.2384 1.75667 13.5431 2.07C13.8477 2.38333 14 2.76 14 3.2V14.4C14 14.84 13.8477 15.2167 13.5431 15.53C13.2384 15.8433 12.8722 16 12.4444 16H1.55556ZM1.55556 14.4H12.4444V6.4H1.55556V14.4ZM1.55556 4.8H12.4444V3.2H1.55556V4.8ZM7 9.6C6.77963 9.6 6.59491 9.52333 6.44583 9.37C6.29676 9.21667 6.22222 9.02667 6.22222 8.8C6.22222 8.57333 6.29676 8.38333 6.44583 8.23C6.59491 8.07667 6.77963 8 7 8C7.22037 8 7.40509 8.07667 7.55417 8.23C7.70324 8.38333 7.77778 8.57333 7.77778 8.8C7.77778 9.02667 7.70324 9.21667 7.55417 9.37C7.40509 9.52333 7.22037 9.6 7 9.6ZM3.88889 9.6C3.66852 9.6 3.4838 9.52333 3.33472 9.37C3.18565 9.21667 3.11111 9.02667 3.11111 8.8C3.11111 8.57333 3.18565 8.38333 3.33472 8.23C3.4838 8.07667 3.66852 8 3.88889 8C4.10926 8 4.29398 8.07667 4.44306 8.23C4.59213 8.38333 4.66667 8.57333 4.66667 8.8C4.66667 9.02667 4.59213 9.21667 4.44306 9.37C4.29398 9.52333 4.10926 9.6 3.88889 9.6ZM10.1111 9.6C9.89074 9.6 9.70602 9.52333 9.55694 9.37C9.40787 9.21667 9.33333 9.02667 9.33333 8.8C9.33333 8.57333 9.40787 8.38333 9.55694 8.23C9.70602 8.07667 9.89074 8 10.1111 8C10.3315 8 10.5162 8.07667 10.6653 8.23C10.8144 8.38333 10.8889 8.57333 10.8889 8.8C10.8889 9.02667 10.8144 9.21667 10.6653 9.37C10.5162 9.52333 10.3315 9.6 10.1111 9.6ZM7 12.8C6.77963 12.8 6.59491 12.7233 6.44583 12.57C6.29676 12.4167 6.22222 12.2267 6.22222 12C6.22222 11.7733 6.29676 11.5833 6.44583 11.43C6.59491 11.2767 6.77963 11.2 7 11.2C7.22037 11.2 7.40509 11.2767 7.55417 11.43C7.70324 11.5833 7.77778 11.7733 7.77778 12C7.77778 12.2267 7.70324 12.4167 7.55417 12.57C7.40509 12.7233 7.22037 12.8 7 12.8ZM3.88889 12.8C3.66852 12.8 3.4838 12.7233 3.33472 12.57C3.18565 12.4167 3.11111 12.2267 3.11111 12C3.11111 11.7733 3.18565 11.5833 3.33472 11.43C3.4838 11.2767 3.66852 11.2 3.88889 11.2C4.10926 11.2 4.29398 11.2767 4.44306 11.43C4.59213 11.5833 4.66667 11.7733 4.66667 12C4.66667 12.2267 4.59213 12.4167 4.44306 12.57C4.29398 12.7233 4.10926 12.8 3.88889 12.8ZM10.1111 12.8C9.89074 12.8 9.70602 12.7233 9.55694 12.57C9.40787 12.4167 9.33333 12.2267 9.33333 12C9.33333 11.7733 9.40787 11.5833 9.55694 11.43C9.70602 11.2767 9.89074 11.2 10.1111 11.2C10.3315 11.2 10.5162 11.2767 10.6653 11.43C10.8144 11.5833 10.8889 11.7733 10.8889 12C10.8889 12.2267 10.8144 12.4167 10.6653 12.57C10.5162 12.7233 10.3315 12.8 10.1111 12.8Z" fill="#195696"/>
                                    </svg>
                                    {a.date}</p>
                                    <p className="ppp" style={{display:"flex",alignItems:"center",gap:"4px"}}>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.01159 2.47962e-07C3.24257 0.00109398 -0.0763613 3.23633 0.00133748 6.99765C-0.0763179 10.759 3.24313 14.073 7.01103 13.9953C11.0546 14.1397 13.9962 10.596 14 6.99765C14.0033 3.79198 11.7463 -0.00111973 7.01159 2.47962e-07ZM7.37088 13.2676V12.4681C7.37088 12.2701 7.2101 12.1093 7.01159 12.1093C6.81307 12.1093 6.6523 12.2701 6.6523 12.4681V13.2676C3.46903 13.0877 0.911267 10.5344 0.73081 7.35646H1.49587C1.69439 7.35646 1.85516 7.19569 1.85516 6.99772C1.85516 6.79975 1.69439 6.63897 1.49587 6.63897H0.73081C0.911281 3.46117 3.46847 0.908306 6.65174 0.728409V1.52792C6.65174 1.72589 6.81251 1.88667 7.01103 1.88667C7.20954 1.88667 7.37032 1.72589 7.37032 1.52792L7.37086 0.728409C10.5541 0.908334 13.1119 3.46159 13.2918 6.63897H12.5267C12.3282 6.63897 12.1674 6.79975 12.1674 6.99772C12.1674 7.19569 12.3282 7.35646 12.5267 7.35646H13.2918C13.1119 10.5343 10.5541 13.0877 7.37088 13.2676Z" fill="#195696"/>
                                        <path d="M7.37092 6.86215V3.80796C7.37092 3.60999 7.21015 3.44922 7.01163 3.44922C6.81312 3.44922 6.65234 3.60999 6.65234 3.80796V6.99781C6.65234 7.08531 6.68406 7.16953 6.74203 7.23515L8.33996 9.04476C8.47176 9.19406 8.69871 9.20719 8.84746 9.07648C8.9962 8.94523 9.01097 8.71883 8.87917 8.57008L7.37092 6.86215Z" fill="#195696"/>
                                        </svg>
                                        {a.time.slice(0,2)>12?<span>{a.time.slice(0,2)}:00 PM</span>:<span>{a.time.slice(0,2)}:00 AM</span>}
                                    </p>
                                </div>
                                <p className="apps_details" onClick={()=>{settabs("Appointments");setstatus("approved")}}>See Details</p>
                            </div>
                        ))}
                    </div>:<h3 className="no_apps_found">No Appointments</h3>}
                </div>
                <div className="pdfs">
                    <h3>Results</h3>
                    <div className="pdf">
                        <div className="result">
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 11.2H9V9.8H3V11.2ZM3 8.4H9V7H3V8.4ZM1.5 14C1.0875 14 0.734375 13.8629 0.440625 13.5887C0.146875 13.3146 0 12.985 0 12.6V1.4C0 1.015 0.146875 0.685417 0.440625 0.41125C0.734375 0.137083 1.0875 0 1.5 0H7.5L12 4.2V12.6C12 12.985 11.8531 13.3146 11.5594 13.5887C11.2656 13.8629 10.9125 14 10.5 14H1.5ZM6.75 4.9V1.4H1.5V12.6H10.5V4.9H6.75Z" fill="black"/>
                            </svg>
                            <p>Check Up Results.pdf</p>
                        </div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6V17M12 17L17 12.069M12 17L7 12.069" stroke="#195696" stroke-width="2"/>
                        <circle cx="12" cy="12" r="11" stroke="#195696" stroke-width="2"/>
                        </svg>
                    </div>
                    <div className="pdf">
                        <div className="result">
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 11.2H9V9.8H3V11.2ZM3 8.4H9V7H3V8.4ZM1.5 14C1.0875 14 0.734375 13.8629 0.440625 13.5887C0.146875 13.3146 0 12.985 0 12.6V1.4C0 1.015 0.146875 0.685417 0.440625 0.41125C0.734375 0.137083 1.0875 0 1.5 0H7.5L12 4.2V12.6C12 12.985 11.8531 13.3146 11.5594 13.5887C11.2656 13.8629 10.9125 14 10.5 14H1.5ZM6.75 4.9V1.4H1.5V12.6H10.5V4.9H6.75Z" fill="black"/>
                            </svg>
                            <p>Check Up Results.pdf</p>
                        </div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6V17M12 17L17 12.069M12 17L7 12.069" stroke="#195696" stroke-width="2"/>
                        <circle cx="12" cy="12" r="11" stroke="#195696" stroke-width="2"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="doctor_example">
                <div className="types">
                    <h2>Doctors</h2>
                    <p onClick={()=>settabs("Doctors List")}>Show All <i class="fa-solid fa-angle-right"></i></p>
                </div>
                <div className="some_doctors">
                {doctors.length==0 && <h2 style={{fontSize:"21px",textAlign:"center",width:"728px",marginTop:"44px",textDecoration:"underline",fontWeight:"600"}}>No Doctors Available</h2>}
                    {users.filter(x=>x.role == "doctor").slice(0,4).map((a,index)=>{
                        const total_ratings = ratings.filter(x=>x.doctor_id==a.id).reduce((r,curr) => +r + +curr.rate, 0);
                        const average_rating = total_ratings / ratings.filter(x=>x.doctor_id==a.id).length
                        return(
                            <div className="a_doctor" key={index}>
                                <div className="img">
                                    <img src={doc} alt="" />
                                </div>
                                <h3>Dr. {a.first_name} {a.last_name}</h3>
                                <p>{a.service}</p>
                                <Rate value={average_rating} disabled/>
                                <button onClick={()=>settabs("Doctors List")}>Book Appointment</button>
                            </div>
                            )})}
                </div>
            </div>
        </motion.div>
     );
}
 
export default Patient_dash_interface;