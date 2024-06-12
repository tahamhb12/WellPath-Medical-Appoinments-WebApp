import { useState } from "react";
import useAuthContext from "../../context/AuthContext";
import Dashboard_navbars from "../dashboards_sidebar/dashboards_sidebar";
import Doctor_dash_interface from "../doctor_dashboard/doctor_dashboard_inerface";
import Doctor_appointment_interface from "../doctor_dashboard/doctor_appointment";
import My_patients from "../doctor_dashboard/doctor_patient_interface";
import Settings from "../patient_dashboard/settings";
import "./admin_dashboard.css"
import Admin_doctors_list from "./admin_doctors_list";
import Patients_admin from "./patients_admin_page";
import Admin_dash_interface from "./admin_dashboard_interface";

const Admin_dashboard = () => {

    const {user,header} = useAuthContext()
    const [tabs,settabs] = useState("Dashboard")


    return ( 
        <div className="admin_dashboard">
            <div className="header">
                <div className="logo">
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
                nav2={"Doctors"}
                nav3={"Patients"}
                nav4={"Reviews"}
                nav5={"Settings"}

                name1={"Dashboard"}
                name2={"Doctors"}
                name3={"Patients"}
                name4={"Reviews"}
                name5={"Settings"}
            />
            {tabs =="Dashboard" && <Admin_dash_interface settabs={settabs} />}
            {tabs =="Doctors" &&<Admin_doctors_list/>}
            {tabs =="Patients" &&<Patients_admin/>}
            {tabs =="Reviews" &&<Doctor_dash_interface hey={"Reviews"}/>}
            {tabs =="Settings" &&<Settings/>}
        </div>
     );
}
export default Admin_dashboard;
