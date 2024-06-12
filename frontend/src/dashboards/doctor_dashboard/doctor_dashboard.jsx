import { useState } from "react";
import "./doctor_dashboard.css"
import Doctor_dash_interface from "./doctor_dashboard_inerface";
import img from "./img.png"
import Dashboard_navbars from "../dashboards_sidebar/dashboards_sidebar";
import useAuthContext from "../../context/AuthContext";
import Doctor_appointment_interface from "./doctor_appointment";
import Settings from "../patient_dashboard/settings";
import My_patients from "./doctor_patient_interface";

const Doctor_dashboard = () => {

    const {user ,getuser,logout,header} = useAuthContext()

    const [tabs,settabs] = useState("Dashboard")
    const [showModal, setShowModal] = useState(false); 




    return ( 
        <div className="doctor_dashboard">
            <div className="header">
                <div className="logo">
{/*                     <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9.5C15.8954 9.5 15 8.60457 15 7.5V2.5C15 1.39543 15.8954 0.5 17 0.5H25C26.1046 0.5 27 1.39543 27 2.5V7.5C27 8.60457 26.1046 9.5 25 9.5H17ZM2 15.5C0.895431 15.5 0 14.6046 0 13.5V2.5C0 1.39543 0.895431 0.5 2 0.5H10C11.1046 0.5 12 1.39543 12 2.5V13.5C12 14.6046 11.1046 15.5 10 15.5H2ZM17 27.5C15.8954 27.5 15 26.6046 15 25.5V14.5C15 13.3954 15.8954 12.5 17 12.5H25C26.1046 12.5 27 13.3954 27 14.5V25.5C27 26.6046 26.1046 27.5 25 27.5H17ZM2 27.5C0.895431 27.5 0 26.6046 0 25.5V20.5C0 19.3954 0.895431 18.5 2 18.5H10C11.1046 18.5 12 19.3954 12 20.5V25.5C12 26.6046 11.1046 27.5 10 27.5H2ZM3 10.5C3 11.6046 3.89543 12.5 5 12.5H7C8.10457 12.5 9 11.6046 9 10.5V5.5C9 4.39543 8.10457 3.5 7 3.5H5C3.89543 3.5 3 4.39543 3 5.5V10.5ZM18 22.5C18 23.6046 18.8954 24.5 20 24.5H22C23.1046 24.5 24 23.6046 24 22.5V17.5C24 16.3954 23.1046 15.5 22 15.5H20C18.8954 15.5 18 16.3954 18 17.5V22.5ZM18 5C18 5.82843 18.6716 6.5 19.5 6.5H22.5C23.3284 6.5 24 5.82843 24 5C24 4.17157 23.3284 3.5 22.5 3.5H19.5C18.6716 3.5 18 4.17157 18 5ZM3 23C3 23.8284 3.67157 24.5 4.5 24.5H7.5C8.32843 24.5 9 23.8284 9 23C9 22.1716 8.32843 21.5 7.5 21.5H4.5C3.67157 21.5 3 22.1716 3 23Z" fill="#195696"/>
                    </svg> */}
                    <h2>{header}</h2>
                </div>
                <div className="notification">
                    <input type="text" placeholder="Search"/>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 28.5V25.5H9V15C9 12.925 9.625 11.0813 10.875 9.46875C12.125 7.85625 13.75 6.8 15.75 6.3V5.25C15.75 4.625 15.9688 4.09375 16.4062 3.65625C16.8438 3.21875 17.375 3 18 3C18.625 3 19.1563 3.21875 19.5938 3.65625C20.0313 4.09375 20.25 4.625 20.25 5.25V6.3C22.25 6.8 23.875 7.85625 25.125 9.46875C26.375 11.0813 27 12.925 27 15V25.5H30V28.5H6ZM18 33C17.175 33 16.4688 32.7063 15.8813 32.1188C15.2938 31.5313 15 30.825 15 30H21C21 30.825 20.7063 31.5313 20.1188 32.1188C19.5313 32.7063 18.825 33 18 33ZM12 25.5H24V15C24 13.35 23.4125 11.9375 22.2375 10.7625C21.0625 9.5875 19.65 9 18 9C16.35 9 14.9375 9.5875 13.7625 10.7625C12.5875 11.9375 12 13.35 12 15V25.5Z" fill="#195696"/>
                        <circle cx="25.7142" cy="7.71422" r="3.42857" fill="#195696"/>
                    </svg>
                </div>
            </div>
            <Dashboard_navbars tabs={tabs} settabs={settabs}
                nav1={"Dashboard"}
                nav2={"Appointments"}
                nav3={"Patients List"}
                nav4={"Reviews"}
                nav5={"Settings"}

                name1={"Dashboard"}
                name2={"Appointments"}
                name3={"Patients List"}
                name4={"Reviews"}
                name5={"Settings"}
            />
            {tabs =="Dashboard" && <Doctor_dash_interface settabs={settabs} showModal={showModal} setShowModal={setShowModal}/>}
            {tabs =="Appointments" &&<Doctor_appointment_interface showModal={showModal} setShowModal={setShowModal}/>}
            {tabs =="Patients List" &&<My_patients/>}
            {tabs =="Reviews" &&<Doctor_dash_interface hey={"Reviews"}/>}
            {tabs =="Settings" &&<Settings/>}
        </div>
     );
}
 
export default Doctor_dashboard;