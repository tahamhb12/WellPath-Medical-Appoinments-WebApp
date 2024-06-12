import { useState } from "react";
import "./about_us.css"
import pic1 from "./Group 3.png"
import {motion,AnimatePresence } from "framer-motion"
const About_us = () => {

    const [show,setshow] = useState(false);
    const [show1,setshow1] = useState(false);
    const [show2,setshow2] = useState(false);
    const [show3,setshow3] = useState(false);
    const [show4,setshow4] = useState(false);

    return ( 
        <div className="about_us">
            <div className="about_us_section1">
                <div className="infos">
                    <h1>WELCOME TO WELLPATH - TOP CLINIC IN RABAT</h1>
                    <p className="first">patient-centered care, excellence, innovation</p>
                    <p className="second">At <span>WELLPATH</span>, we are dedicated to providing high-quality, compassionate healthcare services to our community. Our mission is to empower patients to take charge of their health through personalized care, education, and cutting-edge technology</p>
                </div>
                <div className="img">
                    <img src={pic1} alt="" />
                </div>
            </div>
            <div className="about_us_section2">
                <div className="Our_mission">
                    <div className="infos">
                        <p>Services</p>
                        <h2>Our Mission</h2>
                    </div>
                    <div className="card">
                        At <span>WELLPATH</span>, our mission is to provide high-quality, comprehensive healthcare services in RABAT. We are dedicated to empowering our patients to achieve optimal health and well-being through personalized care, education, and cutting-edge technology.
                    </div>
                </div>
                <div className="Our_vision">
                    <div className="infos">
                        <p>Services</p>
                        <h2>Our Vision</h2>
                        </div>
                    <div className="card">
                    Our vision is to be a leading healthcare provider in RABAT, recognized for our commitment to patient-centered care, innovative practices, and a focus on improving the overall health of our community. We continuously seek advancements in technology.
                    </div>
                </div>
            </div>
            <div className="about_us_section3">
                <div className="infos">
                    <p>Services</p>
                    <h3>Our Values</h3>
                </div>
                <div  onMouseOver={()=>setshow(true)} onMouseLeave={()=>setshow(false)}  className="animation">
                    <div className="title_arrow">
                        <h1>1. Patient-Centered Care</h1>
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
                        >We prioritize understanding and addressing each patient's unique needs and goals.</motion.p>}
                    </AnimatePresence>
                </div>

                <div  onMouseOver={()=>setshow1(true)} onMouseLeave={()=>setshow1(false)}  className="animation">
                    <div className="title_arrow">
                        <h1>2. Excellence</h1>
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
                        >We strive to deliver the highest quality care through continuous learning and improvement.</motion.p>}
                    </AnimatePresence>
                </div>

                <div  onMouseOver={()=>setshow2(true)} onMouseLeave={()=>setshow2(false)}  className="animation">
                    <div className="title_arrow">
                        <h1>3. Compassion</h1>
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
                        >We treat our patients with empathy, respect, and dignity.</motion.p>}
                    </AnimatePresence>
                </div>

                <div  onMouseOver={()=>setshow3(true)} onMouseLeave={()=>setshow3(false)}  className="animation">
                    <div className="title_arrow">
                        <h1>4. Collaboration</h1>
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
                        >We foster teamwork among our staff and encourage open communication with patients.</motion.p>}
                    </AnimatePresence>
                </div>

                <div  onMouseOver={()=>setshow4(true)} onMouseLeave={()=>setshow4(false)}  className="animation">
                    <div className="title_arrow">
                        <h1>5. Innovation</h1>
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
                        >We embrace new technologies and advancements to enhance patient care.</motion.p>}
                    </AnimatePresence>
                </div>
            </div>
            <div className="about_us_section4">
                <p className="pp">Our Clinic Advantages at WELLPATH</p>
                <h3 className="hh">Offering Cutting-Edge Dental Technology, Expert Team, Multilingual Support, Comprehensive Treatments, and a Comfort-First Approach.</h3>
                <div className="cards">
                    <div className="card1">
                        <div className="first">
                            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_272_977)">
                                <path d="M14.5 0C10.787 0 7.22601 1.475 4.6005 4.1005C1.975 6.72601 0.5 10.287 0.5 14C0.5 17.713 1.975 21.274 4.6005 23.8995C7.22601 26.525 10.787 28 14.5 28C18.213 28 21.774 26.525 24.3995 23.8995C27.025 21.274 28.5 17.713 28.5 14C28.5 10.287 27.025 6.72601 24.3995 4.1005C21.774 1.475 18.213 0 14.5 0ZM21.5 14.028C21.5024 14.1786 21.4743 14.3281 21.4175 14.4677C21.3608 14.6072 21.2764 14.7338 21.1696 14.84L16.5608 19.4348C16.4562 19.5396 16.332 19.6228 16.1952 19.6795C16.0585 19.7363 15.9119 19.7656 15.7638 19.7658C15.6157 19.7659 15.4691 19.7368 15.3322 19.6803C15.1954 19.6238 15.071 19.5408 14.9662 19.4362C14.8614 19.3316 14.7782 19.2074 14.7215 19.0706C14.6647 18.9339 14.6354 18.7873 14.6352 18.6392C14.6351 18.4911 14.6642 18.3445 14.7207 18.2076C14.7772 18.0708 14.8602 17.9464 14.9648 17.8416L17.664 15.1396H8.62C8.32296 15.1396 8.03808 15.0216 7.82804 14.8116C7.618 14.6015 7.5 14.3166 7.5 14.0196C7.5 13.7226 7.618 13.4377 7.82804 13.2276C8.03808 13.0176 8.32296 12.8996 8.62 12.8996H17.6892L14.9648 10.1752C14.7532 9.96356 14.6343 9.67651 14.6343 9.3772C14.6343 9.229 14.6634 9.08225 14.7202 8.94533C14.7769 8.8084 14.86 8.68399 14.9648 8.5792C15.0696 8.4744 15.194 8.39128 15.3309 8.33456C15.4678 8.27785 15.6146 8.24866 15.7628 8.24866C16.0621 8.24866 16.3492 8.36756 16.5608 8.5792L21.1696 13.174C21.2747 13.2785 21.3581 13.4029 21.4148 13.5399C21.4715 13.6769 21.5005 13.8237 21.5 13.972V14.028Z" fill="#195696"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_272_977">
                                <rect width="28" height="28" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <p>Patient-Centered Care</p>
                        </div>
                        <div className="second">
                            <p>Emphasize your commitment to personalized medicine. Mention how you build relationships with patients, understand their individual needs, and involve them in treatment decisions.</p>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="first">
                            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_272_977)">
                                <path d="M14.5 0C10.787 0 7.22601 1.475 4.6005 4.1005C1.975 6.72601 0.5 10.287 0.5 14C0.5 17.713 1.975 21.274 4.6005 23.8995C7.22601 26.525 10.787 28 14.5 28C18.213 28 21.774 26.525 24.3995 23.8995C27.025 21.274 28.5 17.713 28.5 14C28.5 10.287 27.025 6.72601 24.3995 4.1005C21.774 1.475 18.213 0 14.5 0ZM21.5 14.028C21.5024 14.1786 21.4743 14.3281 21.4175 14.4677C21.3608 14.6072 21.2764 14.7338 21.1696 14.84L16.5608 19.4348C16.4562 19.5396 16.332 19.6228 16.1952 19.6795C16.0585 19.7363 15.9119 19.7656 15.7638 19.7658C15.6157 19.7659 15.4691 19.7368 15.3322 19.6803C15.1954 19.6238 15.071 19.5408 14.9662 19.4362C14.8614 19.3316 14.7782 19.2074 14.7215 19.0706C14.6647 18.9339 14.6354 18.7873 14.6352 18.6392C14.6351 18.4911 14.6642 18.3445 14.7207 18.2076C14.7772 18.0708 14.8602 17.9464 14.9648 17.8416L17.664 15.1396H8.62C8.32296 15.1396 8.03808 15.0216 7.82804 14.8116C7.618 14.6015 7.5 14.3166 7.5 14.0196C7.5 13.7226 7.618 13.4377 7.82804 13.2276C8.03808 13.0176 8.32296 12.8996 8.62 12.8996H17.6892L14.9648 10.1752C14.7532 9.96356 14.6343 9.67651 14.6343 9.3772C14.6343 9.229 14.6634 9.08225 14.7202 8.94533C14.7769 8.8084 14.86 8.68399 14.9648 8.5792C15.0696 8.4744 15.194 8.39128 15.3309 8.33456C15.4678 8.27785 15.6146 8.24866 15.7628 8.24866C16.0621 8.24866 16.3492 8.36756 16.5608 8.5792L21.1696 13.174C21.2747 13.2785 21.3581 13.4029 21.4148 13.5399C21.4715 13.6769 21.5005 13.8237 21.5 13.972V14.028Z" fill="#195696"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_272_977">
                                <rect width="28" height="28" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <p>Highly Qualified Staff</p>
                        </div>
                        <div className="second">
                            <p>Showcase the expertise of your team. Briefly mention the qualifications and experience of your doctors, nurses, and other healthcare professionals.</p>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="first">
                            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_272_977)">
                                <path d="M14.5 0C10.787 0 7.22601 1.475 4.6005 4.1005C1.975 6.72601 0.5 10.287 0.5 14C0.5 17.713 1.975 21.274 4.6005 23.8995C7.22601 26.525 10.787 28 14.5 28C18.213 28 21.774 26.525 24.3995 23.8995C27.025 21.274 28.5 17.713 28.5 14C28.5 10.287 27.025 6.72601 24.3995 4.1005C21.774 1.475 18.213 0 14.5 0ZM21.5 14.028C21.5024 14.1786 21.4743 14.3281 21.4175 14.4677C21.3608 14.6072 21.2764 14.7338 21.1696 14.84L16.5608 19.4348C16.4562 19.5396 16.332 19.6228 16.1952 19.6795C16.0585 19.7363 15.9119 19.7656 15.7638 19.7658C15.6157 19.7659 15.4691 19.7368 15.3322 19.6803C15.1954 19.6238 15.071 19.5408 14.9662 19.4362C14.8614 19.3316 14.7782 19.2074 14.7215 19.0706C14.6647 18.9339 14.6354 18.7873 14.6352 18.6392C14.6351 18.4911 14.6642 18.3445 14.7207 18.2076C14.7772 18.0708 14.8602 17.9464 14.9648 17.8416L17.664 15.1396H8.62C8.32296 15.1396 8.03808 15.0216 7.82804 14.8116C7.618 14.6015 7.5 14.3166 7.5 14.0196C7.5 13.7226 7.618 13.4377 7.82804 13.2276C8.03808 13.0176 8.32296 12.8996 8.62 12.8996H17.6892L14.9648 10.1752C14.7532 9.96356 14.6343 9.67651 14.6343 9.3772C14.6343 9.229 14.6634 9.08225 14.7202 8.94533C14.7769 8.8084 14.86 8.68399 14.9648 8.5792C15.0696 8.4744 15.194 8.39128 15.3309 8.33456C15.4678 8.27785 15.6146 8.24866 15.7628 8.24866C16.0621 8.24866 16.3492 8.36756 16.5608 8.5792L21.1696 13.174C21.2747 13.2785 21.3581 13.4029 21.4148 13.5399C21.4715 13.6769 21.5005 13.8237 21.5 13.972V14.028Z" fill="#195696"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_272_977">
                                <rect width="28" height="28" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <p>Comprehensive Services</p>
                        </div>
                        <div className="second">
                            <p>Highlight the wide range of services you offer under one roof. This could include everything from primary care and preventative services to specialized treatments and procedures.</p>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="first">
                            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_272_977)">
                                <path d="M14.5 0C10.787 0 7.22601 1.475 4.6005 4.1005C1.975 6.72601 0.5 10.287 0.5 14C0.5 17.713 1.975 21.274 4.6005 23.8995C7.22601 26.525 10.787 28 14.5 28C18.213 28 21.774 26.525 24.3995 23.8995C27.025 21.274 28.5 17.713 28.5 14C28.5 10.287 27.025 6.72601 24.3995 4.1005C21.774 1.475 18.213 0 14.5 0ZM21.5 14.028C21.5024 14.1786 21.4743 14.3281 21.4175 14.4677C21.3608 14.6072 21.2764 14.7338 21.1696 14.84L16.5608 19.4348C16.4562 19.5396 16.332 19.6228 16.1952 19.6795C16.0585 19.7363 15.9119 19.7656 15.7638 19.7658C15.6157 19.7659 15.4691 19.7368 15.3322 19.6803C15.1954 19.6238 15.071 19.5408 14.9662 19.4362C14.8614 19.3316 14.7782 19.2074 14.7215 19.0706C14.6647 18.9339 14.6354 18.7873 14.6352 18.6392C14.6351 18.4911 14.6642 18.3445 14.7207 18.2076C14.7772 18.0708 14.8602 17.9464 14.9648 17.8416L17.664 15.1396H8.62C8.32296 15.1396 8.03808 15.0216 7.82804 14.8116C7.618 14.6015 7.5 14.3166 7.5 14.0196C7.5 13.7226 7.618 13.4377 7.82804 13.2276C8.03808 13.0176 8.32296 12.8996 8.62 12.8996H17.6892L14.9648 10.1752C14.7532 9.96356 14.6343 9.67651 14.6343 9.3772C14.6343 9.229 14.6634 9.08225 14.7202 8.94533C14.7769 8.8084 14.86 8.68399 14.9648 8.5792C15.0696 8.4744 15.194 8.39128 15.3309 8.33456C15.4678 8.27785 15.6146 8.24866 15.7628 8.24866C16.0621 8.24866 16.3492 8.36756 16.5608 8.5792L21.1696 13.174C21.2747 13.2785 21.3581 13.4029 21.4148 13.5399C21.4715 13.6769 21.5005 13.8237 21.5 13.972V14.028Z" fill="#195696"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_272_977">
                                <rect width="28" height="28" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <p>Innovative Technology</p>
                        </div>
                        <div className="second">
                            <p>Focus on how you leverage technology to enhance the patient experience. Mention features like online appointment scheduling, secure messaging with doctors, and electronic medical records.</p>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="first">
                            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_272_977)">
                                <path d="M14.5 0C10.787 0 7.22601 1.475 4.6005 4.1005C1.975 6.72601 0.5 10.287 0.5 14C0.5 17.713 1.975 21.274 4.6005 23.8995C7.22601 26.525 10.787 28 14.5 28C18.213 28 21.774 26.525 24.3995 23.8995C27.025 21.274 28.5 17.713 28.5 14C28.5 10.287 27.025 6.72601 24.3995 4.1005C21.774 1.475 18.213 0 14.5 0ZM21.5 14.028C21.5024 14.1786 21.4743 14.3281 21.4175 14.4677C21.3608 14.6072 21.2764 14.7338 21.1696 14.84L16.5608 19.4348C16.4562 19.5396 16.332 19.6228 16.1952 19.6795C16.0585 19.7363 15.9119 19.7656 15.7638 19.7658C15.6157 19.7659 15.4691 19.7368 15.3322 19.6803C15.1954 19.6238 15.071 19.5408 14.9662 19.4362C14.8614 19.3316 14.7782 19.2074 14.7215 19.0706C14.6647 18.9339 14.6354 18.7873 14.6352 18.6392C14.6351 18.4911 14.6642 18.3445 14.7207 18.2076C14.7772 18.0708 14.8602 17.9464 14.9648 17.8416L17.664 15.1396H8.62C8.32296 15.1396 8.03808 15.0216 7.82804 14.8116C7.618 14.6015 7.5 14.3166 7.5 14.0196C7.5 13.7226 7.618 13.4377 7.82804 13.2276C8.03808 13.0176 8.32296 12.8996 8.62 12.8996H17.6892L14.9648 10.1752C14.7532 9.96356 14.6343 9.67651 14.6343 9.3772C14.6343 9.229 14.6634 9.08225 14.7202 8.94533C14.7769 8.8084 14.86 8.68399 14.9648 8.5792C15.0696 8.4744 15.194 8.39128 15.3309 8.33456C15.4678 8.27785 15.6146 8.24866 15.7628 8.24866C16.0621 8.24866 16.3492 8.36756 16.5608 8.5792L21.1696 13.174C21.2747 13.2785 21.3581 13.4029 21.4148 13.5399C21.4715 13.6769 21.5005 13.8237 21.5 13.972V14.028Z" fill="#195696"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_272_977">
                                <rect width="28" height="28" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <p>Convenience and Efficiency</p>
                        </div>
                        <div className="second">
                            <p>Emphasize the ease of accessing care at your clinic. Mention features like extended hours, convenient location, and minimal wait times.</p>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="first">
                            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_272_977)">
                                <path d="M14.5 0C10.787 0 7.22601 1.475 4.6005 4.1005C1.975 6.72601 0.5 10.287 0.5 14C0.5 17.713 1.975 21.274 4.6005 23.8995C7.22601 26.525 10.787 28 14.5 28C18.213 28 21.774 26.525 24.3995 23.8995C27.025 21.274 28.5 17.713 28.5 14C28.5 10.287 27.025 6.72601 24.3995 4.1005C21.774 1.475 18.213 0 14.5 0ZM21.5 14.028C21.5024 14.1786 21.4743 14.3281 21.4175 14.4677C21.3608 14.6072 21.2764 14.7338 21.1696 14.84L16.5608 19.4348C16.4562 19.5396 16.332 19.6228 16.1952 19.6795C16.0585 19.7363 15.9119 19.7656 15.7638 19.7658C15.6157 19.7659 15.4691 19.7368 15.3322 19.6803C15.1954 19.6238 15.071 19.5408 14.9662 19.4362C14.8614 19.3316 14.7782 19.2074 14.7215 19.0706C14.6647 18.9339 14.6354 18.7873 14.6352 18.6392C14.6351 18.4911 14.6642 18.3445 14.7207 18.2076C14.7772 18.0708 14.8602 17.9464 14.9648 17.8416L17.664 15.1396H8.62C8.32296 15.1396 8.03808 15.0216 7.82804 14.8116C7.618 14.6015 7.5 14.3166 7.5 14.0196C7.5 13.7226 7.618 13.4377 7.82804 13.2276C8.03808 13.0176 8.32296 12.8996 8.62 12.8996H17.6892L14.9648 10.1752C14.7532 9.96356 14.6343 9.67651 14.6343 9.3772C14.6343 9.229 14.6634 9.08225 14.7202 8.94533C14.7769 8.8084 14.86 8.68399 14.9648 8.5792C15.0696 8.4744 15.194 8.39128 15.3309 8.33456C15.4678 8.27785 15.6146 8.24866 15.7628 8.24866C16.0621 8.24866 16.3492 8.36756 16.5608 8.5792L21.1696 13.174C21.2747 13.2785 21.3581 13.4029 21.4148 13.5399C21.4715 13.6769 21.5005 13.8237 21.5 13.972V14.028Z" fill="#195696"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_272_977">
                                <rect width="28" height="28" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <p>Community Focus</p>
                        </div>
                        <div className="second">
                            <p>Highlight your dedication to improving the health and well-being of the Rabat community. Mention any community outreach programs, health fairs, or partnerships you participate in.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About_us;