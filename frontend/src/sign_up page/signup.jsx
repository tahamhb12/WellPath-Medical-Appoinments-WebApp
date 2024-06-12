import "./signup.css";
import googlepic from "./google.png"
import facebookpic from "./facebook.png"
import login_picture from "./login picture.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuthContext from "../context/AuthContext";


const Signup = () => {

    const {register ,register_errors} = useAuthContext()


    const [first_name,setfirst_name] = useState("");
    const [last_name,setlast_name] = useState("");
    const [phone_number,setphone_number] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [password_confirmation,setpassword_confirmation] = useState("");



    const handleRegister = async(event)=>{
        event.preventDefault();
        register({first_name,last_name,phone_number,email,password,password_confirmation})
    }

    return ( 
        <div className="signup_page">
            <div className="first_half">
            <img className="immmg" src={login_picture} alt="" />
                <div className="logo">
                    <svg width="75" height="78" viewBox="0 0 75 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.5825 77.0581C30.2039 76.7702 28.2621 75.5985 27.0194 73.7021C26.5243 72.9475 26.0583 71.8156 25.8738 70.9219C25.6796 69.9688 25.6505 69.0851 25.6505 63.6439C25.6408 59.6624 25.602 57.4978 25.534 57.19C25.2816 56.0978 24.7864 55.3929 23.1748 53.8439C21.9029 52.6227 21.2136 52.1163 20.4175 51.7985C19.8641 51.5801 19.8155 51.5801 13.5534 51.5603C7.38836 51.5503 7.22331 51.5404 6.46603 51.3319C5.04855 50.9347 4.04855 50.3489 3.12622 49.4056C2.18448 48.4425 1.57282 47.3702 1.11651 45.9007L0.834961 45.0071V39.0993V33.1915L1.14564 32.278C1.61166 30.9078 2.30098 29.8255 3.19418 29.0411C4.14564 28.2071 5.07768 27.6709 6.22331 27.3035C7.02914 27.0454 7.66991 26.9659 8.95147 26.9461C9.80584 26.9361 10.0194 26.9064 10.1845 26.7574C10.2913 26.6581 10.534 26.1021 10.7379 25.5163C12.068 21.5149 14.6796 18.1092 18.1845 15.7858C20.0291 14.5645 22.2427 13.6411 24.5243 13.1248C25.6796 12.8666 25.6408 12.9659 25.6505 10.4142C25.6602 7.13756 25.8738 6.17444 26.9515 4.44678C27.8932 2.94749 29.2719 1.895 31.1262 1.25954C31.8058 1.03117 31.8447 1.02125 37.2719 0.991459L42.7476 0.96167L43.7573 1.21983C44.3204 1.35883 44.9806 1.57727 45.233 1.69642C47.3689 2.72905 48.9903 4.84394 49.4175 7.17727C49.4855 7.50493 49.5437 8.80564 49.5534 10.0567C49.5728 12.2709 49.5825 12.3503 49.7961 12.6681C49.9515 12.8865 50.0971 12.9858 50.2719 12.9858C50.4078 12.9858 50.6796 13.0255 50.8738 13.0851C51.068 13.1347 51.534 13.2539 51.9029 13.3432C54.4369 13.9489 56.9321 15.19 58.9126 16.8383C59.9029 17.6624 61.1554 18.8936 61.8835 19.7673C62.7864 20.8496 64.1554 23.2525 64.6214 24.5532C64.7185 24.8312 64.835 25.0993 64.8641 25.1489C64.9029 25.2085 65.0097 25.4964 65.1068 25.7943C65.4563 26.8964 65.4369 26.8865 66.3495 26.8865C68.835 26.8865 70.8835 27.7007 72.4952 29.3191C73.4369 30.2723 74.3398 31.8808 74.5243 32.9631C74.5534 33.1319 74.602 33.3106 74.6311 33.3503C74.6602 33.4 74.6796 35.912 74.6699 38.9503C74.6699 43.2298 74.6408 44.6198 74.534 45.1759C74.1359 47.3106 72.9418 49.0978 71.1165 50.3191C70.4466 50.7659 69.1068 51.3517 68.767 51.3418C68.6699 51.3418 68.5437 51.3915 68.466 51.451C68.3689 51.5305 66.4855 51.5801 62.2039 51.6099C54.5534 51.6794 55.466 51.4014 52.3787 54.5092C50.3981 56.495 49.9612 57.061 49.6699 57.9645C49.5049 58.4709 49.4854 58.9673 49.4757 64.468C49.466 70.9617 49.4855 70.8127 48.8835 72.3517C48.5243 73.2751 48.0388 73.99 47.1554 74.8936C46.5437 75.5191 46.1845 75.7872 45.5437 76.1049C44.5437 76.6113 43.7476 76.8794 42.9126 77.0184C42.3398 77.1177 33.3204 77.1475 32.5825 77.0581ZM38.2136 62.1149C38.466 61.9858 42.1068 58.3319 48.8544 51.4212C60.0971 39.9134 59.9612 40.0624 61.0291 37.7787C62.0777 35.5347 62.466 33.7773 62.4757 31.3546C62.4855 27.7205 61.1942 24.1858 58.8932 21.5248C57.5243 19.9361 56.068 18.8142 54.233 17.9007C51.9223 16.7688 50.1748 16.3319 47.7767 16.322C46.0583 16.312 45.1845 16.4411 43.602 16.9177C41.9223 17.434 40.0388 18.4368 38.6796 19.5588C38.301 19.8766 37.9223 20.1347 37.8544 20.1347C37.7767 20.1347 37.6117 20.0354 37.4855 19.9163C37.3495 19.7872 37.1165 19.5886 36.9515 19.4695C34.8835 17.9503 33.068 17.1063 30.6893 16.59C29.5049 16.3319 26.4175 16.3319 25.2524 16.59C24.7961 16.6993 24.3495 16.7886 24.2621 16.8085C24.1748 16.8283 23.699 16.9872 23.1942 17.1659C19.534 18.4468 16.5049 21.0879 14.7379 24.5532C14 26.0028 13.3884 28.1872 13.2039 30.0241C13 32.0695 13.2816 34.7007 13.8641 36.2198C14.5922 38.1163 15.3592 39.4567 16.3786 40.6482C16.9223 41.2936 28.932 53.6255 30.2136 54.8666C31.0874 55.7106 31.4369 55.8794 32.2816 55.8794C32.8253 55.8794 32.9612 55.8397 33.3592 55.5617C34.2136 54.9659 34.5728 53.6851 34.1554 52.7915C34.0583 52.5929 31.301 49.7035 27.5728 45.8907C24.0388 42.2964 20.7864 38.9305 20.3398 38.4142C19.068 36.9645 18.534 36.0709 18.0097 34.4822C17.6699 33.4595 17.6408 33.2907 17.602 31.9106C17.5534 30.2425 17.6505 29.5078 18.0874 28.1276C19.068 25.0397 21.5437 22.4681 24.4272 21.5248C24.8058 21.4056 25.2816 21.2468 25.4952 21.1773C26.4854 20.8298 28.534 20.7404 29.8544 20.9787C31.4952 21.2766 33.466 22.2993 34.5146 23.4014L34.8835 23.7886L34.6117 23.8482C34.4563 23.878 33.7379 24.017 33.0194 24.156C30.4369 24.6723 29.0388 25.139 26.8544 26.2411C25.1748 27.0851 23.2621 28.3064 22.0777 29.2893C20.9612 30.2127 19.8447 31.3347 19.6699 31.712C19.1165 32.9134 20.1845 34.5319 21.534 34.5319C22.233 34.5319 22.5243 34.3631 23.5146 33.39C27.2524 29.7163 33.0777 27.5716 38.6505 27.8198C43.8835 28.0482 48.6117 30.0936 52.534 33.817C53.6699 34.8993 55.5437 34.4822 55.9321 33.0624C56.0777 32.5064 56.0486 31.9305 55.8544 31.6028C55.2427 30.59 51.5243 27.7305 49.233 26.5191C47.0097 25.3475 44.4563 24.4539 42.068 23.9971C41.5049 23.8978 41.0291 23.7886 41 23.7588C40.9418 23.6993 41.8932 22.8255 42.4466 22.4482C43.2427 21.8922 43.7282 21.6439 44.6311 21.3361C48.6699 19.9461 53.2719 21.4454 56.0194 25.0496C57.9612 27.6014 58.5534 31.2156 57.5631 34.4326C57.1165 35.8723 56.5437 36.9149 55.5049 38.1063C55.2913 38.3546 50.7476 43.051 45.4078 48.5517C38.7573 55.3929 35.6214 58.6893 35.4563 58.9971C35.0194 59.851 35.0874 60.7446 35.6408 61.5191C35.9806 61.9957 36.3884 62.2439 37 62.3432C37.5049 62.4127 37.6796 62.3829 38.2136 62.1149ZM38.9903 48.6312C39.7282 48.373 40.4272 47.817 40.8738 47.1418C41.466 46.2581 41.6117 45.7517 41.6117 44.6099C41.6117 43.7163 41.5825 43.5574 41.3301 43.0212C40.5243 41.3432 38.5437 40.3702 36.8738 40.8269C36.0486 41.0553 35.5534 41.3333 35.0097 41.8695C33.7476 43.1205 33.4466 44.8978 34.233 46.5858C34.4952 47.1617 35.3787 48.1446 35.8641 48.4028C36.7476 48.8695 38.0389 48.9688 38.9903 48.6312ZM49.2621 40.4C49.8641 40.1021 50.1942 39.5957 50.2622 38.8907C50.3592 37.9673 49.9806 37.4014 48.4563 36.1603C45.8932 34.0751 42.8155 32.7546 39.5825 32.3376C38.2524 32.1688 35.8835 32.2681 34.5728 32.5461C32.0583 33.0723 29.6796 34.1744 27.5825 35.773C25.4466 37.4014 24.9029 38.5532 25.7088 39.7248C26.0777 40.2709 26.4952 40.4993 27.2233 40.5588C27.9806 40.6283 28.2816 40.4794 29.3787 39.5461C31.5631 37.6695 33.932 36.6368 36.7185 36.3191C39.7961 35.9716 43.4175 37.2127 46.0583 39.5262C47.2136 40.5191 47.5728 40.7078 48.2622 40.6681C48.5631 40.6482 49.0097 40.529 49.2621 40.4Z" fill="#195696"/>
                    </svg>
                    <h3>WELLPATH</h3>
                </div>
                <div className="infos">
                    <h3>LOG IN TO YOUR ACCOOUNT TO:</h3>
                    <ul>
                        <li>View upcoming appointments</li>
                        <li>Request prescription refills</li>
                        <li>Update your contact information</li>
                        <li>Pay your bills</li>
                    </ul>
                </div>
            </div>
            <div className="second_half">
                <div className="login_navbar">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/find_a_doctor"}>Find a Doctor</Link>
                    <Link to={"/services"}>Services</Link>
                    <Link to={"/about_us"}>About Us</Link>
                    <Link to={"/contact"}>Contact</Link>
                    <Link to={"/login"} className="sign_up">Log in</Link>
                </div>
                <div className="form">
                    <h1>CREATE ACCOUNT</h1>
                    <div className="api_login">
                        <button><img src={googlepic} alt="" /> SIGN UP WITH GOOGLE</button>
                        <button><img src={facebookpic} alt="" /> SIGN UP WITH FACEBOOK</button>
                    </div>
                    <div className="line_or_line">
                        <div className="line"></div>
                        <p>or</p>
                        <div className="line"></div>
                    </div>
                        <form onSubmit={handleRegister} action="">
                            <div className="name_inputs">
                                <div className="label">
                                    <label htmlFor="">Name*</label>
                                </div>
                                <div className="inps">
                                    <input type="text" value={first_name} placeholder="First Name" onChange={(e)=>setfirst_name(e.target.value)}/>
                                    <input type="text" value={last_name} placeholder="Last Name" onChange={(e)=>setlast_name(e.target.value)}/>
                                </div>
                                {register_errors.first_name && <p className="error_auth">{register_errors.first_name[0]}</p>}
                                {register_errors.last_name && <p className="error_auth">{register_errors.last_name[0]}</p>}
                            </div>
                            <div className="email_input">
                                <label>Phone Number*</label><br />
                                <input type="text" minLength={1} maxLength={10} value={phone_number} onChange={(e)=>setphone_number(e.target.value)}/>
                            </div>
                            {register_errors.phone_number && <p className="error_auth">{register_errors.phone_number[0]}</p>}
                            <div className="email_input">
                                <label>Email*</label><br />
                                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                            </div>
                            {register_errors.email && <p className="error_auth">{register_errors.email[0]}</p>}
                            <div className="password_input">
                                <label>Password*</label><br />
                                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                            </div>
                            {register_errors.password && <p className="error_auth">{register_errors.password[0]}</p>}
                            <div className="password_input">
                                <label>Repeat Password*</label><br />
                                <input type="password" value={password_confirmation} onChange={(e)=>setpassword_confirmation(e.target.value)}/>
                                <p className="asterisk">Required fields are marked with an asterisk (*).</p>
                            </div>
                            <div className="conditional_clicks">
                                <div className="remember_me">
                                    <input type="checkbox" name="" id="" />
                                    <p>i agree to all terms and conditions</p>
                                </div>
                            </div>
                            <div className="login_button">
                                <input type="submit" value={"SIGN UP"} name="" id="" />
                            </div>
                            <p className="dont_have_acc">already have an account? <Link to={"/login"}>LOG IN</Link></p>
                        </form>
                </div>
            </div>
        </div>
     );
}
 
export default Signup;