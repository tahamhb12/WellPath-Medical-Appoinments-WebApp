import useAuthContext from "../../context/AuthContext"
import Calendar from "./cal"
import "./doctor_dashboard.css"
import PatientsChart from "./graph"
import VisitsChart from "./graph2"
import img from "./img.png"
import {motion} from 'framer-motion'


const Doctor_dash_interface = (props) => {
    const settabs = props.settabs
    const setShowModal = props.setShowModal

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0'); 
    const formattedDate = `${year}-${month}-${day}`;

    const {user ,getuser,logout,demands,appointments} = useAuthContext()

    const my_demands = demands.filter((a)=>a.accepted == "pending" && a.doctor_id == user.id)

    const my_apps = appointments.filter(x=>x.doctor_id == user.id && x.date==formattedDate)


    return ( 
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        className="doctor_dash_interface">
            <div className="doctor_dashboard_sections">
                <div className="doctor_dashboard_section1">
                    <div className="section_sec1">
                        <div className="welcome_doc">
                            <div className="infoss">
                                <p>{formattedDate}</p>
                                <div className="doc_name">
                                    <h2>Good Morning </h2>
                                    <h2>Dr.{user.first_name} {user.last_name}</h2>
                                </div>
                                <p className="u_have_pat">You Have <span>{my_apps.length}</span> Appointments Today</p>
                            </div>
                            <div className="immmmg">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div className="request">
                            <PatientsChart/>
                            <VisitsChart/>
                        </div>
                    </div>
                    <div className="section_sec2">
                        <div className="firstt">
                            <div className="types">
                                <h2>Requests</h2>
                                <p onClick={()=>settabs("Appointments")}>Show All <i class="fa-solid fa-angle-right"></i></p>
                            </div>
                        </div>
                        {my_demands.length==0&&<h2 className="noo_req">You Have No requests</h2>}
                        <div className="doctors_req_examples">
                            {my_demands.slice(my_demands.length-3,my_demands.length).map((a,index)=>(
                                <div className="request_infos_doc" key={index}>
                                    <div className="req_name_service">
                                        <h2>{a.patient_name}</h2>
                                        <p>Ilness</p>
                                    </div>
                                    <div className="req_date_time">
                                        <p className="req_date">
                                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.55556 16C1.12778 16 0.761574 15.8433 0.456944 15.53C0.152315 15.2167 0 14.84 0 14.4V3.2C0 2.76 0.152315 2.38333 0.456944 2.07C0.761574 1.75667 1.12778 1.6 1.55556 1.6H2.33333V0H3.88889V1.6H10.1111V0H11.6667V1.6H12.4444C12.8722 1.6 13.2384 1.75667 13.5431 2.07C13.8477 2.38333 14 2.76 14 3.2V14.4C14 14.84 13.8477 15.2167 13.5431 15.53C13.2384 15.8433 12.8722 16 12.4444 16H1.55556ZM1.55556 14.4H12.4444V6.4H1.55556V14.4ZM1.55556 4.8H12.4444V3.2H1.55556V4.8ZM7 9.6C6.77963 9.6 6.59491 9.52333 6.44583 9.37C6.29676 9.21667 6.22222 9.02667 6.22222 8.8C6.22222 8.57333 6.29676 8.38333 6.44583 8.23C6.59491 8.07667 6.77963 8 7 8C7.22037 8 7.40509 8.07667 7.55417 8.23C7.70324 8.38333 7.77778 8.57333 7.77778 8.8C7.77778 9.02667 7.70324 9.21667 7.55417 9.37C7.40509 9.52333 7.22037 9.6 7 9.6ZM3.88889 9.6C3.66852 9.6 3.4838 9.52333 3.33472 9.37C3.18565 9.21667 3.11111 9.02667 3.11111 8.8C3.11111 8.57333 3.18565 8.38333 3.33472 8.23C3.4838 8.07667 3.66852 8 3.88889 8C4.10926 8 4.29398 8.07667 4.44306 8.23C4.59213 8.38333 4.66667 8.57333 4.66667 8.8C4.66667 9.02667 4.59213 9.21667 4.44306 9.37C4.29398 9.52333 4.10926 9.6 3.88889 9.6ZM10.1111 9.6C9.89074 9.6 9.70602 9.52333 9.55694 9.37C9.40787 9.21667 9.33333 9.02667 9.33333 8.8C9.33333 8.57333 9.40787 8.38333 9.55694 8.23C9.70602 8.07667 9.89074 8 10.1111 8C10.3315 8 10.5162 8.07667 10.6653 8.23C10.8144 8.38333 10.8889 8.57333 10.8889 8.8C10.8889 9.02667 10.8144 9.21667 10.6653 9.37C10.5162 9.52333 10.3315 9.6 10.1111 9.6ZM7 12.8C6.77963 12.8 6.59491 12.7233 6.44583 12.57C6.29676 12.4167 6.22222 12.2267 6.22222 12C6.22222 11.7733 6.29676 11.5833 6.44583 11.43C6.59491 11.2767 6.77963 11.2 7 11.2C7.22037 11.2 7.40509 11.2767 7.55417 11.43C7.70324 11.5833 7.77778 11.7733 7.77778 12C7.77778 12.2267 7.70324 12.4167 7.55417 12.57C7.40509 12.7233 7.22037 12.8 7 12.8ZM3.88889 12.8C3.66852 12.8 3.4838 12.7233 3.33472 12.57C3.18565 12.4167 3.11111 12.2267 3.11111 12C3.11111 11.7733 3.18565 11.5833 3.33472 11.43C3.4838 11.2767 3.66852 11.2 3.88889 11.2C4.10926 11.2 4.29398 11.2767 4.44306 11.43C4.59213 11.5833 4.66667 11.7733 4.66667 12C4.66667 12.2267 4.59213 12.4167 4.44306 12.57C4.29398 12.7233 4.10926 12.8 3.88889 12.8ZM10.1111 12.8C9.89074 12.8 9.70602 12.7233 9.55694 12.57C9.40787 12.4167 9.33333 12.2267 9.33333 12C9.33333 11.7733 9.40787 11.5833 9.55694 11.43C9.70602 11.2767 9.89074 11.2 10.1111 11.2C10.3315 11.2 10.5162 11.2767 10.6653 11.43C10.8144 11.5833 10.8889 11.7733 10.8889 12C10.8889 12.2267 10.8144 12.4167 10.6653 12.57C10.5162 12.7233 10.3315 12.8 10.1111 12.8Z" fill="#195696"/>
                                            </svg>
                                            {a.date}
                                        </p>
                                        <p className="req_time">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.01159 2.47962e-07C3.24257 0.00109398 -0.0763613 3.23633 0.00133748 6.99765C-0.0763179 10.759 3.24313 14.073 7.01103 13.9953C11.0546 14.1397 13.9962 10.596 14 6.99765C14.0033 3.79198 11.7463 -0.00111973 7.01159 2.47962e-07ZM7.37088 13.2676V12.4681C7.37088 12.2701 7.2101 12.1093 7.01159 12.1093C6.81307 12.1093 6.6523 12.2701 6.6523 12.4681V13.2676C3.46903 13.0877 0.911267 10.5344 0.73081 7.35646H1.49587C1.69439 7.35646 1.85516 7.19569 1.85516 6.99772C1.85516 6.79975 1.69439 6.63897 1.49587 6.63897H0.73081C0.911281 3.46117 3.46847 0.908306 6.65174 0.728409V1.52792C6.65174 1.72589 6.81251 1.88667 7.01103 1.88667C7.20954 1.88667 7.37032 1.72589 7.37032 1.52792L7.37086 0.728409C10.5541 0.908334 13.1119 3.46159 13.2918 6.63897H12.5267C12.3282 6.63897 12.1674 6.79975 12.1674 6.99772C12.1674 7.19569 12.3282 7.35646 12.5267 7.35646H13.2918C13.1119 10.5343 10.5541 13.0877 7.37088 13.2676Z" fill="#195696"/>
                                            <path d="M7.37141 6.86215V3.80796C7.37141 3.60999 7.21064 3.44922 7.01212 3.44922C6.81361 3.44922 6.65283 3.60999 6.65283 3.80796V6.99781C6.65283 7.08531 6.68455 7.16953 6.74252 7.23515L8.34045 9.04476C8.47225 9.19406 8.6992 9.20719 8.84794 9.07648C8.99669 8.94523 9.01146 8.71883 8.87966 8.57008L7.37141 6.86215Z" fill="#195696"/>
                                            </svg>
                                            10:00PM
                                        </p>
                                    </div>
                                    <div className="req_details">
                                        <p onClick={()=>{settabs("Appointments");setShowModal(true)}}>See Details</p>
                                    </div>
                                    <div className="side_color"></div>
                                </div>
                            ))}
                        </div>
{/*                         <h3 className="no_apps_found">No Appointments</h3>
 */}                    </div>
                </div>
                <div className="section2">
                    <Calendar settabs={settabs}/>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Doctor_dash_interface;