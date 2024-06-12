import { AnimatePresence,motion } from "framer-motion";
import doc from "./doc.png";
import { useEffect, useState } from "react";
import useAuthContext from "../../context/AuthContext";
import {Rate} from "antd"


const Doc_infos = (props) => {
    const selectedDoctor = props.selectedDoctor;
    const setSelectedDoctor = props.setSelectedDoctor;
    const showdoc = props.showdoc;
    const setshowdoc = props.setshowdoc;

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0'); 
    const formattedDate = `${year}-${month}-${day}`;

    const {demands,user,appointments,users,store_review,reviews,getReviews,store_rating,ratings,getRatings} = useAuthContext()
    const [clicked,setclicked] = useState("1")
    const [review_data,setreview_data] = useState("")
    const [upcoming,setupcoming] = useState("1")
    const [reloadusers,setreloadusers] = useState(false)
    const [rating,setrating] = useState("")


    const add_review=()=>{
        store_review({review:review_data,doctor_id:selectedDoctor.doctor_id,patient_id:user.id,date:formattedDate})
        setreview_data("")
        setreloadusers(!reloadusers)
        getReviews()
    }

    const add_rating=(value)=>{
        setrating(value)
        store_rating({doctor_id:selectedDoctor.doctor_id,patient_id:user.id,date:formattedDate,rate:value})
        setreloadusers(!reloadusers)
        getRatings()
    }

    useEffect(() => {
        getReviews()
        getReviews()
        getRatings()
        getRatings()
    },[reloadusers]);

    const my_rate = ratings.filter(x=>x.patient_id==user.id && x.doctor_id==selectedDoctor.doctor_id)
    const my_reviews = reviews.filter(x=>x.patient_id==user.id && x.doctor_id == selectedDoctor.doctor_id)
    console.log(my_rate)
    
    const total_ratings = ratings.filter(x=>x.doctor_id==selectedDoctor.doctor_id).reduce((r,curr) => +r + +curr.rate, 0);
    const average_rating = total_ratings / ratings.filter(x=>x.doctor_id==selectedDoctor.doctor_id).length
    console.log(Math.ceil(total_ratings))



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
                <h3>Dr. {selectedDoctor.doctor_name}</h3>
            </div>
            <div className="linee"></div>
            <div className="patient_appointments_doctor_infos">
                <div className="doctor_infos">
                    <div className="doc_message">
                        <img src={doc} alt="" />
                        <h2>Dr. {selectedDoctor.doctor_name}</h2>
                        <h3>{selectedDoctor.doctor_email}</h3>
                        <div className="past_upcoming_apps">
                            <div className="past">
                                <p>{appointments.filter(a=>a.patient_id == user.id && a.doctor_id == selectedDoctor.doctor_id && a.date<formattedDate).length}</p>
                                <p>Past</p>
                            </div>
                            <div className="linethrough"></div>
                            <div className="upcoming">
                                <p>{appointments.filter(a=>a.patient_id == user.id && a.doctor_id == selectedDoctor.doctor_id && a.date>=formattedDate).length}</p>
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
                                    <p className="second">{selectedDoctor.doctor_phone_number}</p>
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
                                    <p className="second" style={{textTransform:"capitalize"}}>{users.filter(x=>x.id == selectedDoctor.doctor_id).map(a=><p>{a.service}</p>)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {selectedDoctor.accepted =="pending" ?
                    <div style={{overflowX: "hidden",scrollbarColor:"#195696 white",scrollbarWidth:"thin"}}  className="notes">
                        <h2>Reviews</h2>
                        {reviews.filter(x=>x.doctor_id==selectedDoctor.doctor_id).map((a,index)=>(
                            <div className="mynotes" key={index}>
                                <div className="note_infos">
                                    <p>{a.review}</p>
                                    <p>{users.find(x=>x.id==a.patient_id).first_name+" "+users.find(x=>x.id==a.patient_id).last_name}</p>
                                </div>
                                <div className="date">
                                    <p>{a.date}</p>
                                </div>
                            </div>
                        ))}
                        {reviews.filter(x=>x.doctor_id==selectedDoctor.doctor_id).length==0 && <h3 className="No_Reviews_Yet">No Reviews Yet</h3>}
                    </div>
                    :
                    <div className="notes">
                        <h2>My Reviews</h2>
                        <textarea value={review_data} onChange={(e)=>setreview_data(e.target.value)} name="" id=""></textarea>
                        <div className="button">
                            <button onClick={add_review}>Save</button>
                        </div>
                        {my_reviews.slice(my_reviews.length-2,my_reviews.length).reverse().map((a,index)=>(
                        <div className="mynotes" key={index}>
                            <div className="note_infos">
                                <p>{a.review}</p>
                                <p>Pediatrics</p>
                            </div>
                            <div className="date">
                                <p>{a.date}</p>
                            </div>
                        </div>
                            ))}
                            {reviews.filter(x=>x.patient_id==user.id && x.doctor_id == selectedDoctor.doctor_id).length==0 && <h2>You Have No Past Reviews</h2>}
                    </div>}
                </div>
                <div className="sec_half_elements">
                    <div className="up_past_graph">
                        <div className="up_past_apps_click">
                            {clicked=="1" ?<button onClick={()=>{setclicked("1");setupcoming("1")}}>upcoming appointment</button>:<button onClick={()=>{setclicked("1");setupcoming("1")}} style={{backgroundColor:"transparent",color:"#555555"}}>upcoming appointment</button>}
                            {clicked=="2" ?<button onClick={()=>{setclicked("2");setupcoming("-1")}}>past appointment</button>:<button onClick={()=>{setclicked("2");setupcoming("-1")}} style={{backgroundColor:"transparent",color:"#555555"}}>past appointment</button>}
                        </div>
                        <div className="app_graph">
                            <h2>treatments schedule</h2>
                            <div className="inside_graph">
                                <div className="shapes">
                                    <div className="colored_line"></div>
                                </div>
                                {upcoming=="1"?
                                appointments.filter(a=>a.doctor_id == selectedDoctor.doctor_id && a.patient_id==selectedDoctor.patient_id && a.date>formattedDate).length>0?
                                <div className="upcoming_past_app">
                                    <div className="upcoming_past_app_date">
                                        <p>{appointments.filter(a=>a.doctor_id == selectedDoctor.doctor_id && a.patient_id==selectedDoctor.patient_id && a.date>formattedDate)
                                        .sort((a, b) => new Date(a.date) - new Date(b.date))
                                        .slice(0,1).map(x=><p>{x.date}</p>)}</p>
                                    </div>
                                    <div className="line"></div>
                                    <div className="upcoming_past_app_traitment">
                                        <p>Speciality</p>
                                        <p>{users.filter(x=>x.id == selectedDoctor.doctor_id).map(a=><p>{a.service}</p>)}</p>
                                    </div>
                                    <div className="line"></div>
                                    <div className="upcoming_past_app_traitment">
                                        <p>Status</p>
                                    <p>{appointments.filter(a=>a.doctor_id == selectedDoctor.doctor_id && a.patient_id==selectedDoctor.patient_id && a.date>formattedDate)
                                        .sort((a, b) => new Date(a.date) - new Date(b.date))
                                        .slice(0,1).map(x=><p>{x.status}</p>)}</p>
                                    </div>
                                    <div className="upcoming_past_app_doctor_notes">
                                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 11.2H9.5V9.8H3.5V11.2ZM3.5 8.4H9.5V7H3.5V8.4ZM2 14C1.5875 14 1.23438 13.8629 0.940625 13.5887C0.646875 13.3146 0.5 12.985 0.5 12.6V1.4C0.5 1.015 0.646875 0.685417 0.940625 0.41125C1.23438 0.137083 1.5875 0 2 0H8L12.5 4.2V12.6C12.5 12.985 12.3531 13.3146 12.0594 13.5887C11.7656 13.8629 11.4125 14 11 14H2ZM7.25 4.9V1.4H2V12.6H11V4.9H7.25Z" fill="#337EFB"/>
                                        </svg>
                                        <h2>note</h2>
                                    </div>
                                </div>
                                :upcoming=="1" && appointments.filter(a=>a.doctor_id == selectedDoctor.doctor_id && a.patient_id==selectedDoctor.patient_id && a.date>formattedDate).length==0
                                && 
                                <div className="upcoming_past_app">
                                    <p className="notfoud">No Upcoming Appointment</p>
                                </div>
                                :
                                appointments.filter(a=>a.doctor_id == selectedDoctor.doctor_id && a.patient_id==selectedDoctor.patient_id && a.date<formattedDate).length>0&&
                                <div className="upcoming_past_app">
                                    <div className="upcoming_past_app_date">
                                        <p>{appointments.filter(a=>a.doctor_id == selectedDoctor.doctor_id && a.patient_id==selectedDoctor.patient_id && a.date<formattedDate)
                                            .sort((a, b) => new Date(a.date) - new Date(b.date))
                                            .slice(-1).map(x=><p>{x.date}</p>)}
                                        </p>
                                    </div>
                                    <div className="line"></div>
                                    <div className="upcoming_past_app_traitment">
                                        <p>Speciality</p>
                                        <p>{users.filter(x=>x.id == selectedDoctor.doctor_id).map(a=><p>{a.service}</p>)}</p>
                                    </div>
                                    <div className="line"></div>
                                    <div className="upcoming_past_app_traitment">
                                        <p>Status</p>
                                    <p>Done</p>
                                    </div>
                                    <div className="upcoming_past_app_doctor_notes">
                                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 11.2H9.5V9.8H3.5V11.2ZM3.5 8.4H9.5V7H3.5V8.4ZM2 14C1.5875 14 1.23438 13.8629 0.940625 13.5887C0.646875 13.3146 0.5 12.985 0.5 12.6V1.4C0.5 1.015 0.646875 0.685417 0.940625 0.41125C1.23438 0.137083 1.5875 0 2 0H8L12.5 4.2V12.6C12.5 12.985 12.3531 13.3146 12.0594 13.5887C11.7656 13.8629 11.4125 14 11 14H2ZM7.25 4.9V1.4H2V12.6H11V4.9H7.25Z" fill="#337EFB"/>
                                        </svg>
                                        <h2>note</h2>
                                    </div>
                                </div>}
                                {upcoming!=="1" && appointments.filter(a=>a.doctor_id == selectedDoctor.doctor_id && a.patient_id==selectedDoctor.patient_id && a.date<formattedDate).length==0
                                && 
                                <div className="upcoming_past_app">
                                    <p className="notfoud">No Last Appointment</p>
                                </div>}
                            </div>
                        </div>
                    </div>
                    {selectedDoctor.accepted =="pending" ?
                    <div className="pdfss" style={{height:"203px"}}>
                        <div className="pdf_header">
                            <h2>Rating</h2>
                        </div>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                        <Rate disabled value={average_rating} style={{fontSize:"50px"}}/>
                    </div>
                    </div>
                    :
                    <div className="pdfss" style={{height:"203px"}}>
                    <div className="pdf_header">
                        <h2>My Rating</h2>
                    </div>
                    {my_rate.length==0 ? 
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                        <Rate value={rating} onChange={add_rating} style={{fontSize:"50px"}}/>
                    </div>
                    :
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                    <Rate value={my_rate[0].rate} disabled style={{fontSize:"50px"}}/>
                    </div>
                    }
                    {my_rate.length==0 ?
                    <h3 className="patient_ratinggg" style={{color:"black"}}>Note:You Cant Modify Your Rating,So Please Rate This Doctor Carefully.</h3>
                    :
                    <h3 className="patient_ratinggg">Thank You For Your Rate,Hope It Was Positive.</h3>
                    }
                </div>}
                </div>
            </div>
        </motion.div>
        </>
     );
}
 
export default Doc_infos;