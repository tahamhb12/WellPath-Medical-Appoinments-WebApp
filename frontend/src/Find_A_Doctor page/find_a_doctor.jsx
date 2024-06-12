import "./find_a_doctor.css"
import pic1 from "./Group 3.png"
import doc from "./portrait-attractive-male-doctor Background Removed (1).png"
import doc2 from "./doc2.png"
import docfff from "./docfff.png"
import docf from "./docf.png"
import heart from "./heart.png"
import Section4 from '../Homepage/section4/section4';
import useAuthContext from "../context/AuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom"

const Find_A_Doctor = () => {

    const {users} = useAuthContext()
    console.log(users)
    const navigate = useNavigate()

    const nav = () =>{
        navigate("/login")
    }
    
    return ( 
        <div className="find_a_doctor">
            <div className="find_a_doctor_section1">
                <h3><span>Tell US</span> YOUR PROBLEM</h3>
                <img src={pic1} alt="" />
            </div>
            <div className="consultation_check_div">
                <div className="choose_service">
                    <img src={heart} alt="" />
                    <div className="somethingtodolater">
                        <p>Choose service</p>
                        <label htmlFor="">Cardioloty</label>
                        <select name="" id="">
                            <option value=""></option>
                            <option value="">Pediatrics</option>
                            <option value="">Cardiologist</option>
                            <option value="">Surgery</option>
                            <option value="">Dermatology</option>
                        </select>
                    </div>
                </div>
            <div className="line"></div>
                <div className="date">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.56262 43.56H39.4677C41.5069 43.56 43.1662 41.8947 43.1662 39.8475V33.1186C43.1662 33.1086 43.1682 33.0986 43.1682 33.0886V26.5296H43.1662V20.9021H42.1007V26.5296H35.5892C34.1379 26.5296 32.9564 27.7171 32.9564 29.1765V35.7319H4.56267C3.11929 35.7319 1.94577 34.5524 1.94577 33.1011V10.4368H42.1008V17.07H43.1663V6.04875C43.1663 4.00162 41.507 2.33633 39.4678 2.33633H38.0084L38.0104 0.439148H36.9449V2.33633H32.8586V0.439148H31.7931V2.33633H27.7068V0.439148H26.6413V2.33633H22.555V0.439148H21.4895V2.33633H17.4032V0.439148H16.3377V2.33633H12.2514L12.2534 0.439148H11.1879V2.33633H7.10158V0.439148H6.03605V2.33633H4.56268C2.53356 2.33633 0.880249 3.99762 0.880249 6.03877V39.8584C0.880249 41.8995 2.53157 43.5608 4.56268 43.5608L4.56262 43.56ZM4.56262 3.40702H6.03599V5.30221H7.10153V3.40702H11.1878V5.30221H12.2533V3.40702H16.3396V5.30221H17.4051V3.40702H21.4914V5.30221H22.557V3.40702H26.6432V5.30221H27.7088V3.40702H31.795V5.30221H32.8606V3.40702H36.9469V5.30221H38.0124V3.40702H39.4718C40.9231 3.40702 42.1047 4.59252 42.1047 6.04793V9.36453H1.94557V6.03795C1.94557 4.58658 3.11924 3.40702 4.56262 3.40702ZM42.1009 33.0904C42.1009 33.8181 41.805 34.4778 41.3292 34.9556C40.8534 35.4334 40.1957 35.7293 39.47 35.7293H34.774L42.1007 28.3622L42.1009 33.0904ZM35.5895 27.6005H41.3531L34.0224 34.9712V29.1758C34.0224 28.3062 34.7258 27.6005 35.5895 27.6005ZM1.94588 39.0839C1.94788 39.0859 1.94988 39.0879 1.95387 39.0899C1.99985 39.1359 2.04783 39.1779 2.09581 39.2219C2.75755 39.8376 3.65716 40.1834 4.56276 40.1854H11.458V39.1139L4.56276 39.1119C3.11938 39.1119 1.94586 37.9284 1.94586 36.475V35.7013C2.63155 36.3931 3.58515 36.8029 4.56276 36.8009H39.4679C40.4495 36.8029 41.4111 36.391 42.1007 35.6933V36.469C42.1007 37.9264 40.9192 39.1099 39.4679 39.1099L16.6255 39.1119V40.1834H39.4679C40.4495 40.1854 41.4111 39.7736 42.1007 39.0759V39.8456C42.1007 41.303 40.9192 42.4865 39.4679 42.4865L4.56276 42.4885C3.11938 42.4885 1.94586 41.309 1.94586 39.8576L1.94588 39.0839Z" fill="#195696"/>
                        <path d="M11.1437 12.2691H6.10181V17.3389H11.1437V12.2691ZM10.0762 16.2654H7.16539V13.3386H10.0762V16.2654Z" fill="#195696"/>
                        <path d="M20.0758 12.2691H15.0339V17.3389H20.0758V12.2691ZM19.0103 16.2654H16.0995V13.3386H19.0103V16.2654Z" fill="#195696"/>
                        <path d="M29.01 12.2691H23.9681V17.3389H29.01V12.2691ZM27.9445 16.2654H25.0337V13.3386H27.9445V16.2654Z" fill="#195696"/>
                        <path d="M37.9441 12.2691H32.9022V17.3389H37.9441V12.2691ZM36.8766 16.2654H33.9678V13.3386H36.8766V16.2654Z" fill="#195696"/>
                        <path d="M11.1437 20.1459H6.10181V25.2157H11.1437V20.1459ZM10.0762 24.1442H7.16539V21.2174H10.0762V24.1442Z" fill="#195696"/>
                        <path d="M20.0758 20.1459H15.0339V25.2157H20.0758V20.1459ZM19.0103 24.1442H16.0995V21.2174H19.0103V24.1442Z" fill="#195696"/>
                        <path d="M29.01 20.1459H23.9681V25.2157H29.01V20.1459ZM27.9445 24.1442H25.0337V21.2174H27.9445V24.1442Z" fill="#195696"/>
                        <path d="M32.9026 25.2156H37.9445V20.1458H32.9026V25.2156ZM33.9681 21.2173H36.8769V24.1441H33.9681V21.2173Z" fill="#195696"/>
                        <path d="M6.10205 33.0945H11.1439V28.0247H6.10205V33.0945ZM7.16758 29.0962H10.0783V32.023H7.16758V29.0962Z" fill="#195696"/>
                        <path d="M15.0343 33.0945H20.0762V28.0247H15.0343V33.0945ZM16.1018 29.0962H19.0126V32.023H16.1018V29.0962Z" fill="#195696"/>
                        <path d="M29.008 29.9179V28.0267H23.9681V33.0965H29.008V32.015L25.0337 32.025V29.0982H27.9425V29.9178L29.008 29.9179Z" fill="#195696"/>
                    </svg>
                    <div className="date_input">
                        <p>Date</p>
                        <input type="date" name="" id="" />
                    </div>
                </div>
            <div className="line"></div>
                <div className="search_button">
                    <Link to={"/login"}>search</Link>
                </div>
            </div>
            <div className="later_doctors">
                <div className="later_doctor" style={{cursor:"pointer"}} onClick={nav}>
                    <img src={doc} alt="" />
                    <div className="infffss">
                        <h2>Dr. David Lee</h2>
                        <p>Pediatrics</p>
                    </div>
                </div>
                <div className="later_doctor" style={{cursor:"pointer"}} onClick={nav}>
                        <img style={{width:"244px"}} src={docf} alt="" />
                    <div className="infffss">
                        <h2>Dr. Michael Garcia</h2>
                        <p>Cardiologist</p>
                    </div>
                </div>
                <div className="later_doctor" style={{cursor:"pointer"}} onClick={nav}>
                        <img src={doc2} alt="" />
                    <div className="infffss">
                        <h2>Dr. Michael Garcia</h2>
                        <p>Surgery</p>
                    </div>
                </div>
                <div className="later_doctor" style={{cursor:"pointer"}} onClick={nav}>
                        <img style={{width:"244px"}} src={docfff} alt="" />
                    <div className="infffss">
                        <h2>Dr. Dr. Sarah Rodr</h2>
                        <p>Dermatology</p>
                    </div>
                </div>
            </div>
            <Section4/>
        </div>
     );
}

export default Find_A_Doctor;