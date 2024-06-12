import { useState } from "react";
import "./settings.css"
import Account_settings from "./account_settings";
import Security_settings from "./Security_settings";
import {motion } from "framer-motion";


const Settings = () => {

    const [clicked,setclicked] = useState("account_settings")
    const [tab,settab] = useState("Account_settings")

    return ( 
        <>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            className="settings">
                <div className="linee"></div>
                <div className="settings_header">
                    {clicked=="account_settings" ? <div>account settings</div> : <div onClick={()=>{setclicked("account_settings");settab("Account_settings")}} style={{backgroundColor:"transparent",color:"#7F7F7F"}}>account settings</div>}
                    {clicked=="privacy" ? <div>privacy and security</div> : <div onClick={()=>{setclicked("privacy");settab("Security_settings")}} style={{backgroundColor:"transparent",color:"#7F7F7F"}}>privacy and security</div>}
                </div>
                <div className="linee"></div>
            </motion.div>
            {tab=="Account_settings" && <Account_settings/>}
            {tab=="Security_settings" && <Security_settings/>}
        </>
     );
}
 
export default Settings;