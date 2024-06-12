import "./admin_dashboard_interface.css"
import useAuthContext from "../../context/AuthContext";
import doc from "./doctor.png"
import healthy from "./healthy (1).png"
import addmns from "./admin-with-cogwheels.png"
import appointment from "./appointment.png"
import {motion} from "framer-motion"
import CountUp from 'react-countup';
import Calendar from "../doctor_dashboard/cal";
import Calendrrr from "./callll";

const Admin_dash_interface = (props) => {

    const settabs = props.settabs;
    const {users,appointments,user} = useAuthContext()
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero for single digit months
    const day = String(today.getDate()).padStart(2, '0'); // Add leading zero for single digit days
    const formattedDate = `${year}-${month}-${day}`;
    const week = `${year}-${month}-${+day+7}`;


    const doctors = users.filter(x=>x.role=="doctor")
    const admins = users.filter(x=>x.role=="admin")
    const patients = users.filter(x=>x.role=="patient")

    const monnthh = appointments.filter(x=>x.date>formattedDate && x.date<week )

    console.log(monnthh)

    return ( 
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        className="Admin_dash_interface">
            <div className="admin_dashboard_infos">
                <div className="admin_dash_infos">
                    <p>{formattedDate}</p>
                    <div className="admin_name">
                    <h2>Good Morning</h2>
                    <h2>Mr. {user.first_name} {user.last_name}</h2>
                    </div>
                    <p>We Have {monnthh.length} <span>Patients</span> This Week</p>
                </div>
                <div className="users_numbers">
                    <div className="doctors_number">
                        <div className="img">
                            <img src={doc} alt="" />
                        </div>
                        <div className="inf">
                            <p>
                                <CountUp startVal={0} end={doctors.length} duration={1} />
                            </p>
                            <h2>Doctors</h2>
                        </div>
                    </div>
                    <div className="doctors_number">
                        <div className="img">
                                <img src={healthy} alt="" />
                        </div>
                        <div className="inf">
                            <p>
                                <CountUp startVal={0} end={patients.length} duration={1} />
                            </p>
                            <h2>Patients</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="admin_docc">
                <h2>Doctors List</h2>
                <p onClick={()=>settabs("Doctors")}>Show All <i class="fa-solid fa-angle-right"></i></p>
            </div>
            {doctors.slice(0,2).map((a,index)=>(
                <div className="admin_some_doctors" key={index}>
                    <div className="doctor_name">
                        <h3>Dr. {a.first_name} {a.last_name}</h3>
                        <p>{a.service}</p>
                    </div>
                    <div className="register_date">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.55556 16C1.12778 16 0.761574 15.8433 0.456944 15.53C0.152315 15.2167 0 14.84 0 14.4V3.2C0 2.76 0.152315 2.38333 0.456944 2.07C0.761574 1.75667 1.12778 1.6 1.55556 1.6H2.33333V0H3.88889V1.6H10.1111V0H11.6667V1.6H12.4444C12.8722 1.6 13.2384 1.75667 13.5431 2.07C13.8477 2.38333 14 2.76 14 3.2V14.4C14 14.84 13.8477 15.2167 13.5431 15.53C13.2384 15.8433 12.8722 16 12.4444 16H1.55556ZM1.55556 14.4H12.4444V6.4H1.55556V14.4ZM1.55556 4.8H12.4444V3.2H1.55556V4.8ZM7 9.6C6.77963 9.6 6.59491 9.52333 6.44583 9.37C6.29676 9.21667 6.22222 9.02667 6.22222 8.8C6.22222 8.57333 6.29676 8.38333 6.44583 8.23C6.59491 8.07667 6.77963 8 7 8C7.22037 8 7.40509 8.07667 7.55417 8.23C7.70324 8.38333 7.77778 8.57333 7.77778 8.8C7.77778 9.02667 7.70324 9.21667 7.55417 9.37C7.40509 9.52333 7.22037 9.6 7 9.6ZM3.88889 9.6C3.66852 9.6 3.4838 9.52333 3.33472 9.37C3.18565 9.21667 3.11111 9.02667 3.11111 8.8C3.11111 8.57333 3.18565 8.38333 3.33472 8.23C3.4838 8.07667 3.66852 8 3.88889 8C4.10926 8 4.29398 8.07667 4.44306 8.23C4.59213 8.38333 4.66667 8.57333 4.66667 8.8C4.66667 9.02667 4.59213 9.21667 4.44306 9.37C4.29398 9.52333 4.10926 9.6 3.88889 9.6ZM10.1111 9.6C9.89074 9.6 9.70602 9.52333 9.55694 9.37C9.40787 9.21667 9.33333 9.02667 9.33333 8.8C9.33333 8.57333 9.40787 8.38333 9.55694 8.23C9.70602 8.07667 9.89074 8 10.1111 8C10.3315 8 10.5162 8.07667 10.6653 8.23C10.8144 8.38333 10.8889 8.57333 10.8889 8.8C10.8889 9.02667 10.8144 9.21667 10.6653 9.37C10.5162 9.52333 10.3315 9.6 10.1111 9.6ZM7 12.8C6.77963 12.8 6.59491 12.7233 6.44583 12.57C6.29676 12.4167 6.22222 12.2267 6.22222 12C6.22222 11.7733 6.29676 11.5833 6.44583 11.43C6.59491 11.2767 6.77963 11.2 7 11.2C7.22037 11.2 7.40509 11.2767 7.55417 11.43C7.70324 11.5833 7.77778 11.7733 7.77778 12C7.77778 12.2267 7.70324 12.4167 7.55417 12.57C7.40509 12.7233 7.22037 12.8 7 12.8ZM3.88889 12.8C3.66852 12.8 3.4838 12.7233 3.33472 12.57C3.18565 12.4167 3.11111 12.2267 3.11111 12C3.11111 11.7733 3.18565 11.5833 3.33472 11.43C3.4838 11.2767 3.66852 11.2 3.88889 11.2C4.10926 11.2 4.29398 11.2767 4.44306 11.43C4.59213 11.5833 4.66667 11.7733 4.66667 12C4.66667 12.2267 4.59213 12.4167 4.44306 12.57C4.29398 12.7233 4.10926 12.8 3.88889 12.8ZM10.1111 12.8C9.89074 12.8 9.70602 12.7233 9.55694 12.57C9.40787 12.4167 9.33333 12.2267 9.33333 12C9.33333 11.7733 9.40787 11.5833 9.55694 11.43C9.70602 11.2767 9.89074 11.2 10.1111 11.2C10.3315 11.2 10.5162 11.2767 10.6653 11.43C10.8144 11.5833 10.8889 11.7733 10.8889 12C10.8889 12.2267 10.8144 12.4167 10.6653 12.57C10.5162 12.7233 10.3315 12.8 10.1111 12.8Z" fill="#195696"/>
                        </svg>
                        <p>{a.created_at.slice(0,10)}</p>
                    </div>
                    <button onClick={()=>settabs("Doctors")}>see details</button>
                </div>
            ))}
            <div className="admin_docc">
                <h2>Patients List</h2>
                <p onClick={()=>settabs("Patients")}>Show All <i class="fa-solid fa-angle-right"></i></p>
            </div>
            {patients.slice(0,2).map((a,index)=>(
                <div className="admin_some_doctors" key={index}>
                    <div className="doctor_name">
                        <h3>Dr. {a.first_name} {a.last_name}</h3>
                        <p>{a.service}</p>
                    </div>
                    <div className="register_date">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.55556 16C1.12778 16 0.761574 15.8433 0.456944 15.53C0.152315 15.2167 0 14.84 0 14.4V3.2C0 2.76 0.152315 2.38333 0.456944 2.07C0.761574 1.75667 1.12778 1.6 1.55556 1.6H2.33333V0H3.88889V1.6H10.1111V0H11.6667V1.6H12.4444C12.8722 1.6 13.2384 1.75667 13.5431 2.07C13.8477 2.38333 14 2.76 14 3.2V14.4C14 14.84 13.8477 15.2167 13.5431 15.53C13.2384 15.8433 12.8722 16 12.4444 16H1.55556ZM1.55556 14.4H12.4444V6.4H1.55556V14.4ZM1.55556 4.8H12.4444V3.2H1.55556V4.8ZM7 9.6C6.77963 9.6 6.59491 9.52333 6.44583 9.37C6.29676 9.21667 6.22222 9.02667 6.22222 8.8C6.22222 8.57333 6.29676 8.38333 6.44583 8.23C6.59491 8.07667 6.77963 8 7 8C7.22037 8 7.40509 8.07667 7.55417 8.23C7.70324 8.38333 7.77778 8.57333 7.77778 8.8C7.77778 9.02667 7.70324 9.21667 7.55417 9.37C7.40509 9.52333 7.22037 9.6 7 9.6ZM3.88889 9.6C3.66852 9.6 3.4838 9.52333 3.33472 9.37C3.18565 9.21667 3.11111 9.02667 3.11111 8.8C3.11111 8.57333 3.18565 8.38333 3.33472 8.23C3.4838 8.07667 3.66852 8 3.88889 8C4.10926 8 4.29398 8.07667 4.44306 8.23C4.59213 8.38333 4.66667 8.57333 4.66667 8.8C4.66667 9.02667 4.59213 9.21667 4.44306 9.37C4.29398 9.52333 4.10926 9.6 3.88889 9.6ZM10.1111 9.6C9.89074 9.6 9.70602 9.52333 9.55694 9.37C9.40787 9.21667 9.33333 9.02667 9.33333 8.8C9.33333 8.57333 9.40787 8.38333 9.55694 8.23C9.70602 8.07667 9.89074 8 10.1111 8C10.3315 8 10.5162 8.07667 10.6653 8.23C10.8144 8.38333 10.8889 8.57333 10.8889 8.8C10.8889 9.02667 10.8144 9.21667 10.6653 9.37C10.5162 9.52333 10.3315 9.6 10.1111 9.6ZM7 12.8C6.77963 12.8 6.59491 12.7233 6.44583 12.57C6.29676 12.4167 6.22222 12.2267 6.22222 12C6.22222 11.7733 6.29676 11.5833 6.44583 11.43C6.59491 11.2767 6.77963 11.2 7 11.2C7.22037 11.2 7.40509 11.2767 7.55417 11.43C7.70324 11.5833 7.77778 11.7733 7.77778 12C7.77778 12.2267 7.70324 12.4167 7.55417 12.57C7.40509 12.7233 7.22037 12.8 7 12.8ZM3.88889 12.8C3.66852 12.8 3.4838 12.7233 3.33472 12.57C3.18565 12.4167 3.11111 12.2267 3.11111 12C3.11111 11.7733 3.18565 11.5833 3.33472 11.43C3.4838 11.2767 3.66852 11.2 3.88889 11.2C4.10926 11.2 4.29398 11.2767 4.44306 11.43C4.59213 11.5833 4.66667 11.7733 4.66667 12C4.66667 12.2267 4.59213 12.4167 4.44306 12.57C4.29398 12.7233 4.10926 12.8 3.88889 12.8ZM10.1111 12.8C9.89074 12.8 9.70602 12.7233 9.55694 12.57C9.40787 12.4167 9.33333 12.2267 9.33333 12C9.33333 11.7733 9.40787 11.5833 9.55694 11.43C9.70602 11.2767 9.89074 11.2 10.1111 11.2C10.3315 11.2 10.5162 11.2767 10.6653 11.43C10.8144 11.5833 10.8889 11.7733 10.8889 12C10.8889 12.2267 10.8144 12.4167 10.6653 12.57C10.5162 12.7233 10.3315 12.8 10.1111 12.8Z" fill="#195696"/>
                        </svg>
                        <p>{a.created_at.slice(0,10)}</p>
                    </div>
                    <button onClick={()=>settabs("Patients")}>see details</button>
                </div>
            ))}
        </motion.div>
     );
}
 
export default Admin_dash_interface;



{/*             <div className="users_numbers">
                <div className="doctors_number">
                    <div className="img">
                        <img src={doc} alt="" />
                    </div>
                    <div className="inf">
                        <p>
                            <CountUp startVal={0} end={doctors.length} duration={1} />
                        </p>
                        <h2>Doctors</h2>
                    </div>
                </div>
                <div className="doctors_number">
                    <div className="img">
                            <img src={healthy} alt="" />
                    </div>
                    <div className="inf">
                        <p>
                            <CountUp startVal={0} end={patients.length} duration={1} />
                        </p>
                        <h2>Patients</h2>
                    </div>
                </div>
                <div className="doctors_number">
                    <div className="img">
                    <img src={addmns} alt="" />
                    </div>
                    <div className="inf">
                        <p>
                            <CountUp startVal={0} end={admins.length} duration={1} />
                        </p>
                        
                        <h2>Admins</h2>
                    </div>
                </div>
                <div className="doctors_number">
                    <div className="img">
                    <img src={appointment} alt="" />
                    </div>
                    <div className="inf" style={{marginTop:"-10px"}}>
                        <p>
                        <CountUp startVal={0} end={today_sessions.length} duration={1} />
                        </p>
                        <h2 style={{fontSize:"20px"}}>Today Appointments</h2>
                    </div>
                </div>
            </div>
            <div className="todays_sessions">
                <Calendrrr/>
            </div> */}