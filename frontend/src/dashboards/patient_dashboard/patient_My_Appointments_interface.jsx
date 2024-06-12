import useAuthContext from "../../context/AuthContext";
import "./patient_My_Appointments_interface.css"
import doc from "./doc.png";
import { useState } from "react";
import { AnimatePresence,motion } from "framer-motion";
import Patient_Appointments from "./patient_Appointments";
import Doc_infos from "./doctor_infos";

const My_Appointments = (props) => {

    const status = props.status;
    const setstatus = props.setstatus;
    const [showdoc,setshowdoc] = useState(false)
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    console.log(selectedDoctor)
    
    const {demands,user,appointments} = useAuthContext()
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0'); 
    const formattedDate = `${year}-${month}-${day}`;


    return ( 
        <> 
              {showdoc==false &&<Patient_Appointments 
              status={status} setstatus={setstatus}  
              selectedDoctor={selectedDoctor} setSelectedDoctor={setSelectedDoctor} 
              showdoc={showdoc} setshowdoc={setshowdoc}/>}
            {showdoc && <Doc_infos  selectedDoctor={selectedDoctor} setSelectedDoctor={setSelectedDoctor}
            showdoc={showdoc} setshowdoc={setshowdoc}/>}
        </>
     );
}
 
export default My_Appointments;