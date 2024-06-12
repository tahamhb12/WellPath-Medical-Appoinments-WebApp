import { useState,useEffect } from 'react'
import Navbar from './Homepage/navbar/navbar'
import Section1 from './Homepage/section1/section1';
import pic from "./Rectangle 1.png"
import Section2 from './Homepage/section2/section2';
import Section3 from './Homepage/section3/section3';
import Section4 from './Homepage/section4/section4';
import Section5 from './Homepage/section5/section5';
import Footer1 from './Homepage/footer1/footer1';
import Footer2 from './Homepage/footer2/footer2';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Find_A_Doctor from './Find_A_Doctor page/find_a_doctor';
import ServicesPage from './Services_Page/services';
import About_us from './About_us page/about_us';
import Contact from './contact page/contact';
import Login from './login page/login';
import Signup from './sign_up page/signup';
import useAuthContext from './context/AuthContext';
import Admin_dashboard from './dashboards/admin_dashboard/admin_dashboard';
import Doctor_dashboard from './dashboards/doctor_dashboard/doctor_dashboard';
import Patient_dashboard from './dashboards/patient_dashboard/patient_dashboard';
import AuthLayout from './layouts/AuthLayout';
import GuestLaoyout from './layouts/GuestLayout';


function App() {

  const navigate = useNavigate()
  const location = useLocation()
  const {user ,getuser,getusers,logout,getDemands,getAppoinments,header,getReviews,getRatings} = useAuthContext()

  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1060) {
        setIsNavOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(()=>{
    getusers()
    getDemands()
    getAppoinments()
    getReviews()
    getRatings()
  },[])


  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0); 
    },[]);
    return null;
  };



/*   if(user?.role=="doctor"){
    navigate("/doctor_dashboard")
  }
  if(user?.role=="admin"){
    navigate("/admin_dashboard")
  }
  if(user?.role=="patient"){
    navigate("/patient_dashboard")
  } */

  useEffect(() => {
    if (user) {
      switch (user.role) {
        case "doctor":
          navigate("/doctor_dashboard");
          break;
        case "admin":
          navigate("/admin_dashboard");
          break;
        case "patient":
          navigate("/patient_dashboard");
          break;
        default:
          break;
      }
    }
  }, [user, navigate]);

  return (
    <div className='App'>
      {location.pathname !=="/login" && 
      location.pathname !=="/doctor_dashboard" && 
      location.pathname !=="/admin_dashboard" && 
      location.pathname !=="/patient_dashboard" && 
      <div className='image'>
        <img src={pic} alt="" />
      </div>}
{/*       <button onClick={logout}>hhh</button>
 */}      {location.pathname !=="/login" &&
       location.pathname !=="/sign_up" && 
       location.pathname !=="/admin_dashboard" && 
       location.pathname !=="/doctor_dashboard" && 
       location.pathname !=="/patient_dashboard" && 
      (isNavOpen ? <div style={{paddingBottom:"380px"}}><Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/></div>
      :<div><Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/></div>)}
        
        <Routes>
          <Route path='/' exact element={
            <>
              <Section1/>
              <Section2/>
              <Section3/>
              <Section4/>
              <Section5/>
              <ScrollToTop/>
            </>}/>
            <Route element={<AuthLayout/>}>
              <Route path='/admin_dashboard' element={<Admin_dashboard/>}/>
              <Route path='/patient_dashboard' element={<Patient_dashboard/>}/>
              <Route path='/doctor_dashboard' element={<Doctor_dashboard/>}/>
            </Route>
            <Route element={<GuestLaoyout/>}>
              <Route path='/find_a_doctor' element={<><ScrollToTop/><Find_A_Doctor/></>}/>
              <Route path='/services' element={<><ScrollToTop/><ServicesPage/></>}/>
              <Route path='/about_us' element={<><ScrollToTop/><About_us/></>}/>
              <Route path='/contact' element={<><ScrollToTop/><Contact/></>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/sign_up' element={<Signup/>}/>
            </Route>
        </Routes>

        {location.pathname !=="/login" &&
         location.pathname !=="/sign_up" &&
         location.pathname !=="/doctor_dashboard" &&
         location.pathname !=="/admin_dashboard" &&
         location.pathname !=="/patient_dashboard" &&
          <Footer1/>}
        {location.pathname !=="/login" &&
         location.pathname !=="/sign_up" &&
         location.pathname !=="/doctor_dashboard" &&
         location.pathname !=="/patient_dashboard" &&
         location.pathname !=="/admin_dashboard" &&
          <Footer2/>}
    </div>
  )
}

export default App
