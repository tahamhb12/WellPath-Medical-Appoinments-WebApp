import "./patient_My_Appointments_interface.css"
import doc from "./doc.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useAuthContext from "../../context/AuthContext";
import axios from "../../api/axios";
import Swal from 'sweetalert2';


const Patient_Appointments = (props) => {
    const { status, setstatus, showdoc, setshowdoc, selectedDoctor, setSelectedDoctor } = props;
    const { demands, user, appointments, getDemands } = useAuthContext();

    const [allChecked, setAllChecked] = useState(false);
    const [checkedItems, setCheckedItems] = useState(demands.map(() => false));
    const [demandstoddelete, setdemandstoddelete] = useState([]);
    const [test, settest] = useState(false);

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    const alldemands = demands.filter(x => x.accepted === "pending" && x.patient_id === user.id);

    const handleMasterCheckboxClick = () => {
        const newValue = !allChecked;
        setAllChecked(newValue);
        setCheckedItems(demands.map(() => newValue));
        settest(!test);

        if (newValue) {
            setdemandstoddelete(alldemands.map(demand => demand.id));
        } else {
            setdemandstoddelete([]);
        }
    };

    const handleCheckboxClick = (index, id) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);

        if (newCheckedItems[index]) {
            setdemandstoddelete(prev => [...prev, id]);
        } else {
            setdemandstoddelete(prev => prev.filter(demandId => demandId !== id));
        }

        if (newCheckedItems.every(item => item)) {
            setAllChecked(true);
        } else {
            setAllChecked(false);
        }
    };

    const deleteRequest = async () => {
        try {
            if (test) {
                await Promise.all(alldemands.map(async (demand) => {
                    await axios.delete(`api/demands/${demand.id}`);
                }));
                setAllChecked(false);
            } else {
                await Promise.all(demandstoddelete.map(async (id) => {
                    await axios.delete(`api/demands/${id}`);
                }));
            }
            setdemandstoddelete([]);
            Swal.fire({
                title: "Done!",
                text: `The Request Has Been Deleted Succesfully`,
                icon: "success"
              });
            setCheckedItems(demands.map(() => false));
            getDemands();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="patient_appointments">
            <div className="linee"></div>
            <div className="patient_appointments_header">
                <div className="appointments_counter">
                    <h3 style={{ color: "#195696", fontSize: "24px", fontWeight: "600" }}>
                        {status === "pending"
                            ? demands.filter(a => a.patient_id === user.id && a.accepted === "pending").length
                            : status === "approved"
                                ? appointments.filter(a => a.patient_id === user.id && a.date >= formattedDate).length
                                : appointments.filter(a => a.patient_id === user.id && a.date < formattedDate).length}
                        <span> Appointments</span>
                    </h3>
                </div>
                <div className="line"></div>
                <div className="sort_by">
                    <p>Sort By: </p>
                    <i className="arr fa-solid fa-angle-down"></i>
                    <select className="simple" value={status} onChange={(e) => setstatus(e.target.value)}>
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="history">History</option>
                    </select>
                </div>
            </div>
            <div className="linee"></div>

            <AnimatePresence>
                {status === "pending" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="patient_requests_section">
                        <h2>Requests
                            {test || demandstoddelete.length>0 ? <button style={{backgroundColor:"#195696"}} onClick={deleteRequest}>Delete</button>
                            :<button disabled style={{cursor:"not-allowed"}} onClick={deleteRequest}>Delete</button>}
                        </h2>
                        <div className="column_names">
                            <div className="inp">
                                <input type="checkbox" checked={allChecked} onChange={handleMasterCheckboxClick} />
                                <p>Basic Info</p>
                            </div>
                            <div className="names" style={{gap: "76px"}}>
                                <p>Phone Number</p>
                                <p>City</p>
                                <p>Status</p>
                                <p>Last Appointment</p>
                                <p>Register Date</p>
                            </div>
                        </div>
                        <div className="patients_requests">
                            {alldemands.map((a, index) => (
                                <div style={{ cursor: "pointer" }} className="patient_requests" key={index} onClick={() => { setSelectedDoctor(a); setshowdoc(true) }}>
                                    <div className="inp">
                                        <input
                                            className="checkboxs"
                                            type="checkbox"
                                            checked={checkedItems[index]}
                                            onChange={() => handleCheckboxClick(index, a.id)}
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                        <div className="doc_infoss">
                                            <img src={doc} alt="" />
                                            <div className="name">
                                                <p style={{width:"150px"}}>Dr. {a.doctor_name}</p>
                                                <p>{a.doctor_email}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="namess" style={{gap:"68px"}}>
                                        <p>{a.doctor_phone_number}</p>
                                        <p>Meknes</p>
                                        <p style={{marginLeft:"-12px"}}>{a.accepted}</p>
                                        {appointments.filter(x => x.doctor_id === a.doctor_id && x.patient_id === user.id && x.date < formattedDate)
                                            .sort((a, b) => new Date(a.date) - new Date(b.date))
                                            .slice(-1)
                                            .map(a => <p style={{marginLeft:"5px"}} key={a.id}>{a.date}</p>)
                                        }
                                        {appointments.filter(x => x.doctor_id === a.doctor_id && x.patient_id === user.id && x.date < formattedDate).length==0
                                        && <p>No Last Appointment</p>}
                                        {appointments.filter(x => x.doctor_id === a.doctor_id && x.patient_id === user.id && x.date < formattedDate).length==0
                                        ? <p style={{marginLeft:"-13px"}}>{a.created_at.slice(0, 10)}</p>
                                        :<p style={{marginLeft:"21px"}}>{a.created_at.slice(0, 10)}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {status === "approved" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="patient_requests_section">
                        <h2>Appointments</h2>
                        <div className="column_names">
                            <div className="inp">
                                <input type="checkbox" />
                                <p>Basic Info</p>
                            </div>
                            <div className="names" style={{gap:"82px"}}>
                                <p>Phone Number</p>
                                <p>City</p>
                                <p>Status</p>
                                <p>Appointment Date</p>
                                <p>Register Date</p>
                            </div>
                        </div>
                        <div className="patients_requests">
                            {appointments.filter(a => a.patient_id === user.id && a.date >= formattedDate)
                                .sort((a, b) => new Date(a.date) - new Date(b.date))
                                .map((a, index) => (
                                    <div style={{ cursor: "pointer" }} className="patient_requests" key={index} onClick={() => { setSelectedDoctor(a); setshowdoc(true) }}>
                                        <div className="inp">
                                            <input className="checkboxs" type="checkbox" onClick={(e) => e.stopPropagation()} />
                                            <div className="doc_infoss">
                                                <img src={doc} alt="" />
                                                <div className="name">
                                                    <p style={{width:"150px"}}>Dr. {a.doctor_name}</p>
                                                    <p>{a.doctor_email}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="namess">
                                            <p>{a.doctor_phone_number}</p>
                                            <p>Meknes</p>
                                            <p style={{ width: "91.78px" }}>{a.status}</p>
                                            <p>{a.date}</p>
                                            <p>{a.created_at.slice(0, 10)}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {status === "history" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="patient_requests_section">
                        <h2>History</h2>
                        <div className="column_names">
                            <div className="inp">
                                <input type="checkbox" />
                                <p>Basic Info</p>
                            </div>
                            <div className="names">
                                <p>Phone Number</p>
                                <p>City</p>
                                <p>Appointment Date</p>
                                <p>Register Date</p>
                            </div>
                        </div>
                        <div className="patients_requests">
                            {appointments.filter(a => a.patient_id === user.id && a.date < formattedDate).map((a, index) => (
                                <div style={{ cursor: "pointer" }} className="patient_requests" key={index} onClick={() => { setSelectedDoctor(a); setshowdoc(true) }}>
                                    <div className="inp">
                                        <input className="checkboxs" type="checkbox" onClick={(e) => e.stopPropagation()} />
                                        <div className="doc_infoss">
                                            <img src={doc} alt="" />
                                            <div className="name">
                                                <p style={{width:"150px"}}>Dr. {a.doctor_name}</p>
                                                <p>{a.doctor_email}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="namess" style={{gap:"72px",marginLeft:"-15px"}}>
                                        <p>{a.doctor_phone_number}</p>
                                        <p>Meknes</p>
                                        <p>{a.date}</p>
                                        <p>{a.created_at.slice(0, 10)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {demands.length === 0 && appointments.length === 0 && <h2>No Appointments Found...</h2>}
        </div>
    );
}

export default Patient_Appointments;
