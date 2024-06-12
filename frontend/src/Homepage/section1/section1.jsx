import "./section1.css"
import pic1 from "./Frame 18.png"
import pic2 from "./Rectangle 1.png"
import { Link } from "react-router-dom";



const Section1 = () => {
    return ( 
        <div className="section1">
{/*             <div className="immg">
                <img src={pic2} alt="" />
            </div> */}
            <div className="infos">
                <h1>YOUR HEALTH JOURNEY STARTS HERE</h1>
                <p>Book Appointments, Access Medical Records, And Manage Your Health Online</p>
                <div className="buttons">
                    <Link to={"/sign_up"} className="book">Book an appointment</Link>
                    <Link to={"/login"} className="login">Log in</Link>
                </div>
            </div>
            <div className="img">
                <img src={pic1} alt="" />
                <div className="doconline"><span>50+</span> Doctors Online</div>
                <div className="rating">
                    <div className="user">
                        <div className="userinfos">
                            <img src={pic2} alt="" width={"25px"} height={'25px'}/>
                            <p>Yesseerr</p>
                        </div>
                        <div className="stars">stars</div>
                    </div>
                    <div className="comment">
                        <p>ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
                    </div>
                </div>
                <div className="patients">
                    <div className="pics">
                        <img src={pic2} alt="" width={"25px"} height={'25px'}/>
                        <img src={pic2} alt="" width={"25px"} height={'25px'}/>
                        <img src={pic2} alt="" width={"25px"} height={'25px'}/>
                        <img src={pic2} alt="" width={"25px"} height={'25px'}/>
                    </div>
                    <div className="patients_number">
                        <p>+10k</p>
                        <p>Patient</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Section1;