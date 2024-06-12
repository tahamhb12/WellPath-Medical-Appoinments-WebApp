import { useState } from "react";
import {motion,AnimatePresence } from "framer-motion"

import "./contact.css"
const Contact = () => {

    const [show,setshow] = useState(false)
    const [show1,setshow1] = useState(false);
    const [show2,setshow2] = useState(false);
    const [show3,setshow3] = useState(false);
    const [show4,setshow4] = useState(false);

    return ( 
        <div className="contact">
            <div className="contact_section1">
                <div className="infoss">
                    <h3>GET IN TOUCH</h3>
                    <p className="mm">Have a question or want to schedule an appointment? Fill out our quick and easy contact form below and we'll get back to you as soon as possible.</p>
                </div>
                <div className="form">
                    <div className="infos">
                        <div className="title">
                            <h3>CONTACT US</h3>
                            <p >Contact Details</p>
                        </div>
                        <div className="informations">
                            <div className="book">
                                <div className="icon">
                                    <svg width="35" height="41" viewBox="0 0 35 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.2233 29.7492C24.6217 28.2819 22.7356 27.4741 21.2653 28.0522C21.0106 28.1335 18.476 29.1929 18.2901 29.1929C18.1198 28.9351 11.6633 12.8887 11.5709 12.5919C11.6896 12.481 14.2773 11.5231 14.4273 11.4434C15.8821 10.9121 16.7259 8.91202 16.104 7.49785L13.8085 1.89751C13.4679 1.05526 12.4397 0.459907 11.4365 0.50211C9.61292 0.50211 8.27536 0.784939 6.983 1.44281C-1.88953 6.19309 -1.18309 18.6094 2.90636 27.2852C6.67066 35.4029 14.1446 43.0141 23.0372 39.7155C24.195 39.2811 25.4561 38.5623 26.4124 37.7904C27.1905 37.1638 27.739 35.8872 27.3078 34.8371L25.2233 29.7492ZM11.5521 2.55555C11.7068 2.55712 11.8708 2.64462 11.9193 2.69775L14.2069 8.27769C14.3866 8.67146 14.0882 9.39023 13.6772 9.53556L11.8584 10.2512L8.79254 2.9088C9.56759 2.6541 10.4286 2.54774 11.5521 2.55555ZM4.77047 26.4258C1.6234 18.4833 -0.35624 9.9092 6.96124 3.84923L10.0411 11.2249C9.49887 11.8202 9.36139 12.6578 9.71452 13.5203L16.3009 29.8165C16.6994 30.7885 17.5151 31.3057 18.4495 31.2432L21.295 38.1356C12.9665 40.5029 6.71139 30.6416 4.77047 26.4258ZM25.1249 36.192C24.5795 36.6311 23.8951 37.0608 23.2107 37.4014L20.4027 30.5994L22.0169 29.9634C22.4497 29.7931 23.1467 30.0947 23.3248 30.5291L25.4046 35.603C25.4218 35.728 25.303 36.0482 25.1249 36.192Z" fill="#0C2D66"/>
                                    <path d="M33.3878 13.2621C31.8064 9.42122 28.7955 6.41488 24.9109 4.79758C24.3874 4.58038 23.7874 4.82727 23.5686 5.35073C23.3514 5.87421 23.5983 6.47424 24.1217 6.69302C30.9221 9.35566 34.4364 17.6781 31.3986 24.3333C31.1736 24.8536 31.4126 25.4568 31.933 25.6818C32.4408 25.9053 33.0565 25.6724 33.2815 25.1474C34.9331 21.3284 34.9707 17.1075 33.3878 13.2621Z" fill="#0C2D66"/>
                                    <path d="M22.3139 10.7981C21.7905 10.5809 21.1904 10.8278 20.9717 11.3512C20.7545 11.8747 21.0013 12.4747 21.5248 12.6935C25.0313 14.067 26.8471 18.353 25.2813 21.7861C25.0563 22.3064 25.2953 22.9096 25.8157 23.1346C26.3235 23.358 26.9392 23.1252 27.1642 22.6002C29.1955 18.1531 26.858 12.5778 22.3139 10.7981Z" fill="#0C2D66"/>
                                    </svg>
                                </div>
                                <div className="whatsapp">
                                    <p>Book Appointment</p>
                                    <p>Whatsapp: +212 6 xxxxxxxxx</p>
                                </div>
                            </div>
                            <div className="book">
                                <div className="icon">
                                    <svg width="38" height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 42.6407C0 42.6764 0.0142849 42.7067 0.0196419 42.7407C0.0267845 42.7907 0.0321411 42.8407 0.0499977 42.8907C0.0678542 42.9389 0.0982101 42.9799 0.124993 43.0228C0.144634 43.0514 0.153563 43.0853 0.176776 43.1121C0.182133 43.1174 0.189275 43.1192 0.194632 43.1246C0.246415 43.1799 0.3107 43.2228 0.37855 43.2603C0.396407 43.271 0.410692 43.2871 0.430333 43.2942C0.51783 43.3317 0.612468 43.3549 0.714246 43.3549H37.284C37.384 43.3549 37.4804 43.3335 37.5679 43.2942C37.5857 43.2871 37.6 43.2692 37.6197 43.2603C37.6875 43.2228 37.7518 43.1817 37.8036 43.1246C37.8089 43.1192 37.8161 43.1174 37.8214 43.1121C37.8464 43.0853 37.8536 43.0514 37.8732 43.021C37.9018 42.9782 37.9304 42.9389 37.9482 42.8907C37.9661 42.8407 37.9714 42.7907 37.9786 42.7407C37.9839 42.7067 37.9982 42.6764 37.9982 42.6407L38 17.3184C38 17.3113 37.9964 17.3041 37.9964 17.2952C37.9946 17.2595 37.9839 17.2238 37.9768 17.1881C37.9696 17.147 37.9661 17.1059 37.95 17.0667C37.9446 17.0524 37.9393 17.0381 37.9339 17.022C37.9196 16.9917 37.8964 16.9684 37.8786 16.9399C37.8768 16.9381 37.8768 16.9363 37.875 16.9345C37.8554 16.9059 37.8464 16.872 37.8232 16.8452C37.8179 16.8399 37.8107 16.8381 37.8054 16.8309C37.7947 16.8184 37.7822 16.8077 37.7697 16.797C37.7661 16.7934 37.7625 16.7863 37.7589 16.7827L34.0591 13.5257L34.0573 7.58499C34.0573 7.19037 33.7377 6.87074 33.3431 6.87074H26.5059L19.4703 0.678116C19.2007 0.440628 18.7953 0.440628 18.5275 0.678116L11.4956 6.87074H4.65662C4.262 6.87074 3.94237 7.19037 3.94237 7.58499V13.5257L0.242519 16.7827C0.237162 16.7863 0.235377 16.7934 0.231805 16.797C0.219306 16.8077 0.206806 16.8184 0.196093 16.8309C0.190736 16.8363 0.183593 16.8381 0.178236 16.8452C0.155023 16.872 0.146095 16.9059 0.126454 16.9345C0.124668 16.9363 0.124668 16.9381 0.122882 16.9399C0.105026 16.9684 0.0800269 16.9917 0.0675292 17.022C0.0603862 17.0363 0.0568151 17.0506 0.0514581 17.0667C0.037173 17.1059 0.0336021 17.147 0.0246741 17.1881C0.0175311 17.2238 0.00681763 17.2577 0.00503211 17.2952C0.00503211 17.3024 0.00146042 17.3095 0.00146042 17.3184L0 42.6407ZM14.0067 29.977L1.4285 41.0586V18.8987L14.0067 29.977ZM18.9993 27.4825L35.3931 41.9267H2.60514L18.9993 27.4825ZM36.5702 18.8992V41.059L23.992 29.9775L36.5702 18.8992ZM36.2023 17.3189L34.056 19.2099V15.4279L36.2023 17.3171V17.3189ZM18.9995 2.16622L24.3423 6.87137H13.6553L18.9981 2.16622H18.9995ZM32.6272 8.29988V20.4689L22.9115 29.0258L19.4724 25.9956C19.4474 25.9741 19.4153 25.9652 19.3867 25.9473C19.3474 25.9206 19.3081 25.8938 19.2635 25.8759C19.2206 25.8581 19.1778 25.8509 19.1332 25.842C19.0867 25.8331 19.0439 25.8241 18.9974 25.8241C18.9528 25.8241 18.9117 25.8331 18.8671 25.842C18.8207 25.8509 18.776 25.8598 18.7314 25.8777C18.6885 25.8956 18.651 25.9206 18.61 25.9473C18.5814 25.9652 18.5492 25.9741 18.5242 25.9973L15.0851 29.0276L5.36948 20.4707V8.29984L32.6272 8.29988ZM3.94282 19.21L1.79649 17.319L3.94282 15.4298V19.2118V19.21Z" fill="#0C2D66"/>
                                    <path d="M9.83522 14.9031H28.1612C28.5558 14.9031 28.8755 14.5835 28.8755 14.1889C28.8755 13.7942 28.5558 13.4746 28.1612 13.4746H9.83522C9.4406 13.4746 9.12097 13.7942 9.12097 14.1889C9.12097 14.5835 9.4406 14.9031 9.83522 14.9031Z" fill="#0C2D66"/>
                                    <path d="M9.83522 18.8653H28.1612C28.5558 18.8653 28.8755 18.5456 28.8755 18.151C28.8755 17.7564 28.5558 17.4368 28.1612 17.4368H9.83522C9.4406 17.4368 9.12097 17.7564 9.12097 18.151C9.12097 18.5456 9.4406 18.8653 9.83522 18.8653Z" fill="#0C2D66"/>
                                    <path d="M25.429 21.3992H12.5688C12.1742 21.3992 11.8546 21.7188 11.8546 22.1134C11.8546 22.508 12.1742 22.8277 12.5688 22.8277H25.429C25.8236 22.8277 26.1433 22.508 26.1433 22.1134C26.1433 21.7188 25.8236 21.3992 25.429 21.3992Z" fill="#0C2D66"/>
                                    </svg>
                                </div>
                                <div className="whatsapp">
                                    <p>Write To Us</p>
                                    <p>Tahamhb@Gmail.Com</p>
                                </div>
                            </div>
                            <div className="book">
                                <div className="icon">
                                    <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.0356 0.500001C10.1906 0.503438 -0.239984 10.671 0.00420335 22.4918C-0.239848 34.3127 10.1923 44.7278 22.0339 44.4836C34.7417 44.9374 43.9865 33.8006 43.9984 22.4918C44.0087 12.4172 36.9157 0.496481 22.0356 0.500001ZM23.1648 42.1966V39.684C23.1648 39.0618 22.6595 38.5565 22.0356 38.5565C21.4117 38.5565 20.9065 39.0618 20.9065 39.684V42.1966C10.9023 41.6312 2.86388 33.607 2.29675 23.6195H4.70114C5.32502 23.6195 5.83029 23.1142 5.83029 22.492C5.83029 21.8699 5.32502 21.3646 4.70114 21.3646H2.29675C2.86392 11.3776 10.9005 3.35457 20.9047 2.7892V5.30187C20.9047 5.92404 21.41 6.42931 22.0339 6.42931C22.6578 6.42931 23.163 5.92404 23.163 5.30187L23.1647 2.7892C33.1689 3.35466 41.2073 11.3789 41.7727 21.3646H39.3683C38.7444 21.3646 38.2392 21.8699 38.2392 22.492C38.2392 23.1142 38.7444 23.6195 39.3683 23.6195H41.7727C41.2072 33.6065 33.169 41.6313 23.1648 42.1966Z" fill="#0C2D66"/>
                                    <path d="M23.1646 22.0658V12.4673C23.1646 11.8451 22.6593 11.3398 22.0354 11.3398C21.4115 11.3398 20.9062 11.8451 20.9062 12.4673V22.4922C20.9062 22.7672 21.0059 23.0318 21.1881 23.2381L26.21 28.9252C26.6242 29.3944 27.3375 29.4357 27.8049 29.0249C28.2724 28.6124 28.3188 27.9009 27.9046 27.4334L23.1646 22.0658Z" fill="#0C2D66"/>
                                    </svg>
                                </div>
                                <div className="whatsapp">
                                    <p>Clinic Hours</p>
                                    <p>Mon-Sun 10:00am - 9:00pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inputs">
                        <h2>Send Us a Message</h2>
                        <div className="name_inputs">
                            <div className="label">
                                <label htmlFor="">Name*</label>
                            </div>
                            <div className="inps">
                                <input type="text" name="" id="" placeholder="First Name"/>
                                <input type="text" name="" id="" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="email_inputs">
                            <label>Email*</label><br />
                            <input type="email" name="" id=""/>
                        </div>
                        <div className="subject_inputs">
                            <label>Subject*</label><br />
                            <input type="text" name="" id="" />
                        </div>
                        <div className="message_inputs">
                            <label>Message*</label><br />
                            <input type="text" name="" id="" />
                        </div>
                        <input className="submit" type="submit" name="" id="" />
                    </div>
                </div>
            </div>
                <div className="contact_section3">
                    <div className="infos">
                        <p>FAQ</p>
                        <h3>Frequently Asked Questions</h3>
                    </div>
                    <div  onMouseOver={()=>setshow(true)} onMouseLeave={()=>setshow(false)}  className="animation">
                        <div className="title_arrow">
                            <h1>1. What are your clinic hours?</h1>
                            {show ?<svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 10.5L10.5 1.5L1.5 10.5" stroke="#0C2D66" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                            :<svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 1.5L10.5 10.5L1.5 1.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
                            </svg>
    }
                        </div>
                        <AnimatePresence>
                            {show && <motion.p
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                            >Our clinic hours are Monday-Friday from 9:00 AM to 5:00 PM. We may also have Saturday hours of 9:00 AM to 5:00 PM. Please note that these hours are subject to change, so it's always best to call us in advance to confirm at +212 5 xxxxxxxx.</motion.p>}
                        </AnimatePresence>
                    </div>
                    <div  onMouseOver={()=>setshow2(true)} onMouseLeave={()=>setshow2(false)}  className="animation">
                    <div className="title_arrow">
                        <h1>2. How do I schedule an appointment?</h1>
                        {show2 ?<svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 10.5L10.5 1.5L1.5 10.5" stroke="#0C2D66" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                        :<svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 1.5L10.5 10.5L1.5 1.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
                        </svg>
}
                    </div>
                    <AnimatePresence>
                        {show2 && <motion.p
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                        >We accept a variety of insurance plans. However, it's always best to contact your insurance provider directly to confirm coverage and any prior authorization requirements before your appointment.  We can also help you verify your coverage upon request.</motion.p>}
                    </AnimatePresence>
                </div>

                <div  onMouseOver={()=>setshow3(true)} onMouseLeave={()=>setshow3(false)}  className="animation">
                    <div className="title_arrow">
                        <h1>3. Do you accept my insurance?</h1>
                        {show3 ?<svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 10.5L10.5 1.5L1.5 10.5" stroke="#0C2D66" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                        :<svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 1.5L10.5 10.5L1.5 1.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
                        </svg>
}
                    </div>
                    <AnimatePresence>
                        {show3 && <motion.p
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                        >You can schedule an appointment by calling us at +212 5 xxxxxxxx or by filling out our online appointment.</motion.p>}
                    </AnimatePresence>
                </div>

                <div  onMouseOver={()=>setshow4(true)} onMouseLeave={()=>setshow4(false)}  className="animation">
                    <div className="title_arrow">
                        <h1>4. Do you offer telehealth appointments?</h1>
                        {show4 ?<svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 10.5L10.5 1.5L1.5 10.5" stroke="#0C2D66" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                        :<svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 1.5L10.5 10.5L1.5 1.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
                        </svg>
}
                    </div>
                    <AnimatePresence>
                        {show4 && <motion.p
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                        >Yes. We understand that scheduling in-person appointments can be challenging.  We may offer telehealth appointments for certain consultations or follow-up visits.  Please contact us to inquire about telehealth options for your specific needs.</motion.p>}
                    </AnimatePresence>
                </div>
                <div  onMouseOver={()=>setshow1(true)} onMouseLeave={()=>setshow1(false)}  className="animation">
                    <div className="title_arrow">
                        <h1>5. What should I bring to my first appointment?</h1>
                        {show1 ?<svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 10.5L10.5 1.5L1.5 10.5" stroke="#0C2D66" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                        :<svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 1.5L10.5 10.5L1.5 1.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
                        </svg>
}
                    </div>
                    <AnimatePresence>
                        {show1 && <motion.p
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                        >For your first appointment, please bring a valid photo ID, your insurance card (if applicable), and a list of any medications you are currently taking.  If you have any medical records relevant to your visit, feel free to bring them as well.</motion.p>}
                    </AnimatePresence>
                </div>
                </div>
            </div>

     );
}
 
export default Contact;