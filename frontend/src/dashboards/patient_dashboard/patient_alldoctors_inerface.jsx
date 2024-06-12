import { useEffect, useState } from "react";
import useAuthContext from "../../context/AuthContext";
import axios from "../../api/axios";
import "./patient_alldoctors_inerface.css";
import doc from "./doc.png";
import {AnimatePresence, motion} from "framer-motion";
import Cal from "./cal";
import Swal from 'sweetalert2';
import { Rate } from "antd";

const Alldoctors_interface = () => {
    const { users, user ,ratings} = useAuthContext();
    const [date, setDate] = useState("");
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [showModal, setShowModal] = useState(false); 
    const [clicked, setclicked] = useState(""); 

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero for single digit months
    const day = String(today.getDate()).padStart(2, '0'); // Add leading zero for single digit days
    const formattedDate = `${year}-${month}-${day}`;
    console.log(date>formattedDate); // Output: 2024-05-10


    let doctors = users.filter(a => a.role === "doctor");
    doctors = clicked !== "" ? doctors.filter(a=>a.service ==clicked):doctors

    let specialities = users.filter((a,index)=>a.role == "doctor")

    const removeDuplicates = (array) => {
        const uniqueAppointments = [];
        const seen = new Set();
    
        array.forEach((specialities) => {
          if (!seen.has(specialities.service)) {
            seen.add(specialities.service);
            uniqueAppointments.push(specialities);
          }
        });
    
        return uniqueAppointments;
      };
      const Unique_services = removeDuplicates(specialities);


    console.log(Unique_services)



    /*     useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const hours = now.getHours(); // Get hours
            const minutes = now.getMinutes(); // Get minutes
            const seconds = now.getSeconds(); // Get seconds

            // Format time in 24-hour format
            const formattedTime = `${hours}:${minutes}:${seconds}`;

            setCurrentTime(formattedTime);
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup
    }, []); */


    const add_demands=async()=>{
        try {
            if(date>formattedDate){
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, book it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                        axios.post("/api/demands",{
                            patient_id:user.id,
                            doctor_id:selectedDoctor.id,
                            patient_name:user.first_name +" "+ user.last_name,
                            doctor_name:selectedDoctor.first_name +" "+ selectedDoctor.last_name,
                            patient_phone_number:user.phone_number,
                            doctor_phone_number:selectedDoctor.phone_number,
                            patient_email:user.email,
                            doctor_email:selectedDoctor.email,
                            date:date,
                        })
                      Swal.fire({
                        title: "Booked!",
                        text: "Your appointment has been booked.",
                        icon: "success"
                      });
                    }
                  });
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Selected date must be after today's date!",
                  });
            }
        } catch (error) {
            alert("error");
            console.log(error)
        }
    }

    const openModal = (doctor) => {
        setSelectedDoctor(doctor);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="doctors_sec">
            <div className="filtersec">
            {clicked == "" ? <p style={{width:"fit-content",padding:"0px 24px"}} onClick={()=>setclicked("")}>All</p>:<p onClick={()=>setclicked("")} style={{opacity:"0.4",width:"fit-content",padding:"0px 24px"}}>All</p>}
            {clicked == "surgery" ? <p style={{width:"fit-content",padding:"0px 24px"}} onClick={()=>setclicked("surgery")}>Surgery</p>:<p onClick={()=>setclicked("surgery")} style={{opacity:"0.4",width:"fit-content",padding:"0px 24px"}}>Surgery</p>}
            {Unique_services.map(a=>(
                clicked == a.service ? <p style={{textTransform:"capitalize",width:"fit-content",padding:"0px 24px"}} onClick={()=>setclicked(a.service)}>{a.service}</p>:<p onClick={()=>setclicked(a.service)} style={{opacity:"0.4",textTransform:"capitalize",width:"fit-content",padding:"0px 24px"}}>{a.service}</p>
            ))}
            </div>
            <div className="doctors">
            <AnimatePresence>
                {doctors.map((a, index) => {
                    const total_ratings = ratings.filter(x=>x.doctor_id==a.id).reduce((r,curr) => +r + +curr.rate, 0);
                    const average_rating = total_ratings / ratings.filter(x=>x.doctor_id==a.id).length
                    return(
                    <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    className="doctor" key={index}>
                        <div className="docimg">
                            <img src={doc} alt="later" />
                        </div>
                        <div className="docinfos">
                            <p className="doc_name">Dr. {a.first_name} {a.last_name}</p>
                            <p className="same">{a.service}</p>
                            <p className="same">{a.phone_number}</p>
                            <p className="same">{a.email}</p>
                            <Rate value={average_rating} disabled/>
                            <button onClick={() => openModal(a)}>Book Appointment</button>
                        </div>
                    </motion.div>
                )})}</AnimatePresence>
                <div className="doctors_not_found">   
                    {doctors.length == 0 && <h2>No Result Found...</h2>}                   
                </div>
                <AnimatePresence>
                {showModal && (
                    <div className="conttt">
                        <motion.div
                        initial={{x:1000}}
                        animate={{x:0}}
                        exit={{x:1000}}
                        transition={{type:"just"}}
                        className="modal">
                            <div className="modal-content">
                                <div className="modal_header">
                                    <h3>Doctor Informations</h3>
                                    <i style={{cursor:"pointer"}} onClick={closeModal} class="fa-solid fa-x"></i>
                                </div>
                                <div className="doc_infos">
                                    <div className="first_infos">
                                        <div className="docimg">
                                            <img src={doc} alt="later" />
                                        </div>
                                        <h3>Dr. {selectedDoctor.first_name} {selectedDoctor.last_name}</h3>
                                        <p>{selectedDoctor.email}</p>
                                        <p className="text">doctor {selectedDoctor.first_name} is currently professor of the department of medecine</p>
                                    </div>
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
                                                <p className="second">{selectedDoctor.phone_number}</p>
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
                                            <div className="gender">
                                                <p className="first">Doctor</p>
                                                <p className="second">Since</p>
                                            </div>
                                            <div className="birthday">
                                                <p className="first">Registred Date</p>
                                                <p className="second">june 11, 2001</p>
                                            </div>
                                            <div className="birthday">
                                                <p className="first">Speciality</p>
                                                <p className="second">{selectedDoctor.service}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="calendar_book">
                                    <Cal date={date} setDate={setDate}/>
                                </div>
                                <div className="calendar_button">
                                    <button onClick={()=>add_demands()} className="cal_button">Book Appointment</button>
                                </div>
                            </div>
{/*                             <div className="arrowdd">
                                <i class="fa-solid fa-arrow-down"></i>
                            </div> */}
                        </motion.div>
                    </div>
                )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Alldoctors_interface;
