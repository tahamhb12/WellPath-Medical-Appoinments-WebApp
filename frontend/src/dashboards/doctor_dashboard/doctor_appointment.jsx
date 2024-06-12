import { useState } from "react";
import "./doctor_appoinment.css"
import {AnimatePresence, motion} from "framer-motion";
import useAuthContext from "../../context/AuthContext";
import pic from "./img.png"
import Cal from "../patient_dashboard/cal";
import axios from "../../api/axios";
import Swal from 'sweetalert2';
import MyCalendar from "./chart";
import PatientsChart from "./graph";
import VisitsChart from "./graph2";







const Doctor_appointment_interface = (props) => {

    const setShowModal = props.setShowModal
    const showModal = props.showModal
    const [reschedule, setreschedule] = useState(false); 
    const [date, setDate] = useState("");
    const [selectedrequest, setSelectedrequest] = useState(null);
    const {demands,user,appointments,getDemands} = useAuthContext()

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero for single digit months
    const day = String(today.getDate()).padStart(2, '0'); // Add leading zero for single digit days
    const formattedDate = `${year}-${month}-${day}`;

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const openReschedule = (request) => {
        setSelectedrequest(request);
        setreschedule(true);
    };

    const closeReschedule = () => {
        setreschedule(false);
    };

    const change_pendingTo_accepted=async (id) =>{
        try {
            await axios.put(`api/demands/${id}/accept`)
            getDemands()
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }
    const change_pendingTo_rescheduled=async (id) =>{
        try {
            await axios.put(`api/demands/${id}/reschedule`,{date})
            getDemands()
        } catch (error) {
            console.log(error)
        }
    }

    const AcceptRequest = async(a) =>{
        try {
                Swal.fire({
                    title: "Are you sure you want to accept this request?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Confirm!",
                    html: '<input id="appointment-time" type="time" class="swal2-input" placeholder="Select time">',
                    preConfirm: () => {
                        const time = Swal.getPopup().querySelector('#appointment-time').value;
                        if (!time) {
                            Swal.showValidationMessage('Please Select A Time For The Appointment');
                        }else if(time.slice(0,2) > 17 || time.slice(0,2)<9){
                            Swal.showValidationMessage("Selected Time Doesn't Match Your Working Hours");
                        }
                        return time;
                    }
                  }).then((result) => {
                    if (result.isConfirmed) {
                        const time = result.value;
                        axios.post("/api/appointments",{
                            patient_id:a.patient_id,
                            doctor_id:user.id,
                            patient_name:a.patient_name,
                            doctor_name:user.first_name +" "+ user.last_name,
                            patient_phone_number:a.patient_phone_number,
                            doctor_phone_number:user.phone_number,
                            date:a.date,
                            time:time,
                            status:"Accepted"
                        })
                        change_pendingTo_accepted(a.id);
                      Swal.fire({
                        title: "Booked!",
                        text: `You have a new Appointment at ${a.date}`,
                        icon: "success"
                      });
                    }
                  });
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }
    const RescheduleRequest = async() =>{
        try {
            if(date>formattedDate){
                Swal.fire({
                    title: "Are you sure you want to accept this request?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Confirm!",
                    html: '<input id="appointment-time" type="time" class="swal2-input" placeholder="Select time">',
                    preConfirm: () => {
                        const time = Swal.getPopup().querySelector('#appointment-time').value;
                        if (!time) {
                            Swal.showValidationMessage('Please Select A Time For The Appointment');
                        }else if(time.slice(0,2) > 17 || time.slice(0,2)<9){
                            Swal.showValidationMessage("Selected Time Doesn't Match Your Working Hours");
                        }
                        return time;
                    }
                  }).then((result) => {
                    if (result.isConfirmed) {
                        const time = result.value;
                        axios.post("/api/appointments",{
                            patient_id:selectedrequest.patient_id,
                            doctor_id:user.id,
                            patient_name:selectedrequest.patient_name,
                            doctor_name:user.first_name +" "+ user.last_name,
                            patient_phone_number:selectedrequest.patient_phone_number,
                            doctor_phone_number:user.phone_number,
                            date:date,
                            time:time,
                            status:"Rescheduled"
                        })
                        change_pendingTo_rescheduled(selectedrequest.id);
                        Swal.fire({
                            title: "Booked!",
                            text: `You have Reschedule an Appointment to ${date}`,
                            icon: "success"
                          });
                    }})
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Selected date must be after today's date!",
                  });
            }
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }

    return ( 
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        className="Doctor_appointment_interface">
            <div className="Doctor_appointment_interface sec1">
                <p className="requests_modal" onClick={(openModal)}>Requests</p>
            </div>
{/*             <div>
                    {appointments.filter(a=>a.doctor_id == user.id).map((a,index)=>(
                        <p>{a.date}</p>
                    ))}
                </div> */}
            <AnimatePresence>
                {showModal && (
                    <div className="conttt">
                        <motion.div
                        initial={{x:1000}}
                        animate={{x:0}}
                        exit={{x:1000}}
                        transition={{type:"just"}}
                        className="modal_2">
                            <div className="modal_2-content">
                                <div className="modal_2_header">
                                    <h3>Requests</h3>
                                    <i style={{cursor:"pointer"}} onClick={closeModal} class="fa-solid fa-x"></i>
                                </div>
                                <div className="requests_map">
                                {demands.filter(a=>a.accepted=="pending" && a.doctor_id == user.id).map((a,index)=>(
                                        <div className="request" key={index}>
                                            <div className="request_infos">
                                                <div className="request_img">
                                                    <img src={pic} alt="" />
                                                </div>
                                                <div className="request_name">
                                                    <p>{a.patient_name}</p>
                                                    <p>{a.patient_email}</p>
                                                </div>
                                            </div>
                                                <div className="request_city">
                                                    <p>meknes</p>
                                                </div>
                                                <div className="request_date">
                                                    <p>{a.date}</p>
                                                </div>
                                                <div className="request_date">
                                                    <p className="status">{a.accepted}</p>
                                                </div>
                                                <div className="request_buttons">
                                                    <button onClick={()=>AcceptRequest(a)}>Accept</button>
                                                    <button onClick={()=>openReschedule(a)}>Reschedule</button>
                                                </div>
                                        </div>
                                    ))}                               <div className="notes">
                                        <p className="req_note">Note :</p>
                                        <p className="req_note1">Pending means that the request is not accepted yet.</p>
                                    </div>
                                </div>
                            </div>
{/*                             <div className="arrowdd">
                                <i class="fa-solid fa-arrow-down"></i>
                            </div> */}
                        </motion.div>
                    </div>
                )}
                </AnimatePresence>
                
            <AnimatePresence>
                {reschedule && (
                    <div className="conttt">
                        <motion.div
                        initial={{y:1000}}
                        animate={{y:0}}
                        exit={{y:1000}}
                        transition={{type:"just"}}
                        className="modal_2">
                            <div className="modal_2-content">
                                <div className="modal_2_header">
                                    <h3>Reschedule</h3>
                                    <i style={{cursor:"pointer"}} onClick={closeReschedule} class="fa-solid fa-x"></i>
                                </div>
                                <div className="new_date_input">
                                    <Cal date={date} setDate={setDate}/>
                                </div>
                                <div className="confirm_new_date">
                                    <button onClick={()=>RescheduleRequest()}>Accept Request</button>
                                </div>
                                <p className="req_note">Note :</p>
                                <p className="req_note1">Please be aware that once this request is accepted, it will be integrated into our schedule for the chosen day. A notification regarding the appointment will be sent to the patient.</p>
                            </div>
{/*                             <div className="arrowdd">
                                <i class="fa-solid fa-arrow-down"></i>
                            </div> */}
                        </motion.div>
                    </div>
                )}
                </AnimatePresence>
                <MyCalendar/>
        </motion.div>
     );
}
 
export default Doctor_appointment_interface;