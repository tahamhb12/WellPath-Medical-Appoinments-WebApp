import useAuthContext from "../../context/AuthContext";
import "../patient_dashboard/patient_My_Appointments_interface.css"
import { useState } from "react";
import { AnimatePresence,motion } from "framer-motion";
import Patient_list from "./doctor_patient_list";
import Patient_infos from "./show_patient_infos";

const My_patients = (props) => {

    const [showdoc,setshowdoc] = useState(false)
    const [selectedpatient, setselectedpatient] = useState(null);

    console.log(selectedpatient)
    
    const {demands,user,appointments} = useAuthContext()
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0'); 
    const formattedDate = `${year}-${month}-${day}`;


    return ( 
        <> 
              {showdoc==false &&<Patient_list 
              selectedpatient={selectedpatient} setselectedpatient={setselectedpatient} 
              showdoc={showdoc} setshowdoc={setshowdoc}/>}
            {showdoc && <Patient_infos  selectedpatient={selectedpatient} setselectedpatient={setselectedpatient}
            showdoc={showdoc} setshowdoc={setshowdoc}/>}
        </>
     );
}
 
export default My_patients;