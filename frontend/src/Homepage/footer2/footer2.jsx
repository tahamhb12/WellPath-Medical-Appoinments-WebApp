import "./footer2.css"
import { Link,useLocation } from "react-router-dom";
const Footer2 = () => {

    const location = useLocation()

    return ( 
            <div className="footer2">
                <div className="first_half">
                    <div className="adress">
                        <Link to={"/"} className="logo">
                            <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.4599 43.7475C17.0922 43.583 15.9757 42.9135 15.2611 41.8298C14.9764 41.3986 14.7085 40.7518 14.6024 40.2411C14.4908 39.6964 14.474 39.1915 14.474 36.0823C14.4684 33.8071 14.4461 32.5702 14.407 32.3943C14.2619 31.7702 13.9772 31.3674 13.0505 30.4823C12.3192 29.7844 11.9228 29.495 11.465 29.3135C11.1468 29.1886 11.1189 29.1886 7.51819 29.1773C3.97328 29.1716 3.87838 29.1659 3.44294 29.0468C2.62789 28.8199 2.05289 28.4851 1.52255 27.9461C0.981049 27.3957 0.62935 26.783 0.366971 25.9433L0.205078 25.4326V22.0567V18.6808L0.38372 18.1589C0.651681 17.3759 1.04804 16.7574 1.56163 16.3092C2.10872 15.8326 2.64464 15.5262 3.30338 15.3163C3.76673 15.1688 4.13518 15.1234 4.87207 15.112C5.36333 15.1064 5.48615 15.0894 5.58105 15.0042C5.64246 14.9475 5.78202 14.6298 5.89925 14.295C6.66406 12.0085 8.16576 10.0624 10.1811 8.73475C11.2417 8.03687 12.5145 7.50921 13.8264 7.21418C14.4908 7.06666 14.4684 7.1234 14.474 5.66524C14.4796 3.7929 14.6024 3.24255 15.2221 2.25531C15.7636 1.39858 16.5563 0.797158 17.6226 0.434037C18.0133 0.303541 18.0357 0.297868 21.1563 0.280847L24.3048 0.263824L24.8854 0.411343C25.2092 0.490775 25.5888 0.615597 25.734 0.683682C26.9621 1.27375 27.8944 2.48226 28.14 3.8156C28.1791 4.00283 28.2126 4.74609 28.2182 5.46099C28.2294 6.72624 28.2349 6.77162 28.3577 6.95319C28.4471 7.07801 28.5308 7.13475 28.6313 7.13475C28.7094 7.13475 28.8658 7.15744 28.9774 7.19148C29.0891 7.21985 29.357 7.28794 29.5692 7.339C31.0262 7.6851 32.4609 8.39432 33.5997 9.33616C34.1692 9.80709 34.8893 10.5106 35.308 11.0099C35.8272 11.6284 36.6143 13.0014 36.8823 13.7447C36.9381 13.9035 37.0051 14.0567 37.0218 14.0851C37.0442 14.1191 37.1056 14.2837 37.1614 14.4539C37.3624 15.0837 37.3512 15.078 37.876 15.078C39.3051 15.078 40.483 15.5433 41.4097 16.4681C41.9512 17.0128 42.4704 17.9319 42.5764 18.5503C42.5932 18.6468 42.6211 18.7489 42.6378 18.7716C42.6546 18.8 42.6658 20.2355 42.6602 21.9716C42.6602 24.417 42.6434 25.2113 42.582 25.5291C42.3531 26.7489 41.6665 27.7702 40.617 28.4681C40.2318 28.7234 39.4614 29.0581 39.266 29.0525C39.2102 29.0525 39.1376 29.0808 39.0929 29.1149C39.0371 29.1603 37.9541 29.1886 35.4922 29.2057C31.0932 29.2454 31.6179 29.0865 29.8427 30.8624C28.7039 31.9972 28.4527 32.3206 28.2852 32.8369C28.1903 33.1262 28.1791 33.4099 28.1735 36.5532C28.1679 40.2638 28.1791 40.1787 27.833 41.0581C27.6264 41.5858 27.3473 41.9943 26.8393 42.5106C26.4876 42.8681 26.281 43.0213 25.9126 43.2028C25.3376 43.4922 24.8798 43.6454 24.3997 43.7248C24.0704 43.7815 18.8842 43.7986 18.4599 43.7475ZM21.6978 35.2085C21.8429 35.1347 23.9364 33.0468 27.8162 29.0979C34.2808 22.522 34.2027 22.6071 34.8167 21.3021C35.4196 20.0199 35.6429 19.0156 35.6485 17.6312C35.6541 15.5546 34.9116 13.5347 33.5886 12.0142C32.8014 11.1064 31.9641 10.4652 30.909 9.94326C29.5803 9.29645 28.5755 9.0468 27.1966 9.04113C26.2085 9.03545 25.7061 9.10921 24.7961 9.38155C23.8303 9.67659 22.7473 10.2496 21.9658 10.8908C21.748 11.0723 21.5303 11.2199 21.4912 11.2199C21.4466 11.2199 21.3517 11.1631 21.2791 11.095C21.201 11.0213 21.067 10.9078 20.9721 10.8397C19.783 9.97162 18.7391 9.48936 17.3713 9.19432C16.6903 9.0468 14.915 9.0468 14.2451 9.19432C13.9827 9.25673 13.726 9.3078 13.6757 9.31914C13.6255 9.33049 13.3519 9.42127 13.0616 9.5234C10.957 10.2553 9.21527 11.7645 8.19925 13.7447C7.77498 14.573 7.42328 15.8213 7.31722 16.8709C7.19998 18.0397 7.36187 19.5433 7.69683 20.4113C8.11552 21.495 8.55653 22.261 9.1427 22.9418C9.45532 23.3106 16.3609 30.3574 17.0978 31.0667C17.6002 31.5489 17.8012 31.6454 18.2869 31.6454C18.5995 31.6454 18.6777 31.6227 18.9065 31.4638C19.3978 31.1234 19.6044 30.3915 19.3643 29.8808C19.3085 29.7674 17.723 28.1163 15.5794 25.9376C13.5473 23.8837 11.6772 21.9603 11.4204 21.6652C10.6891 20.8369 10.382 20.3262 10.0806 19.4184C9.88518 18.834 9.86843 18.7376 9.8461 17.9489C9.81819 16.9957 9.87401 16.5759 10.1252 15.7872C10.6891 14.0227 12.1126 12.5532 13.7706 12.0142C13.9883 11.9461 14.2619 11.8553 14.3847 11.8156C14.9541 11.617 16.132 11.566 16.8912 11.7021C17.8347 11.8723 18.9679 12.4567 19.5709 13.0865L19.783 13.3078L19.6267 13.3418C19.5374 13.3589 19.1243 13.4383 18.7111 13.5177C17.2262 13.8128 16.4223 14.0794 15.1662 14.7092C14.2005 15.1915 13.1007 15.8894 12.4196 16.4511C11.7777 16.9787 11.1357 17.6199 11.0352 17.8355C10.717 18.522 11.3311 19.4468 12.107 19.4468C12.509 19.4468 12.6764 19.3503 13.2459 18.7943C15.3951 16.695 18.7446 15.4695 21.949 15.6113C24.958 15.7418 27.6767 16.9106 29.932 19.0383C30.5852 19.6567 31.6626 19.4184 31.8859 18.6071C31.9696 18.2894 31.9529 17.9603 31.8412 17.773C31.4895 17.1943 29.3514 15.5603 28.034 14.8681C26.7556 14.1986 25.2874 13.6879 23.9141 13.4269C23.5903 13.3702 23.3167 13.3078 23.3 13.2908C23.2665 13.2567 23.8136 12.7574 24.1318 12.5418C24.5895 12.2241 24.8687 12.0823 25.3878 11.9064C27.7102 11.112 30.3563 11.9688 31.9361 14.0284C33.0527 15.4865 33.3932 17.5518 32.8238 19.3901C32.567 20.2128 32.2376 20.8085 31.6403 21.4894C31.5175 21.6312 28.9048 24.3149 25.8344 27.4581C22.0104 31.3674 20.2073 33.2511 20.1124 33.4269C19.8611 33.9149 19.9002 34.4255 20.2184 34.8681C20.4138 35.1404 20.6483 35.2823 21 35.339C21.2903 35.3787 21.3908 35.3617 21.6978 35.2085ZM22.1444 27.5035C22.5687 27.356 22.9706 27.0383 23.2274 26.6525C23.5679 26.1475 23.6517 25.8581 23.6517 25.2057C23.6517 24.695 23.6349 24.6042 23.4898 24.2979C23.0264 23.339 21.8876 22.783 20.9274 23.044C20.4529 23.1745 20.1682 23.3333 19.8556 23.6397C19.1298 24.3546 18.9568 25.3702 19.409 26.3347C19.5597 26.6638 20.0677 27.2255 20.3468 27.373C20.8548 27.6397 21.5973 27.6964 22.1444 27.5035ZM28.0507 22.8C28.3968 22.6298 28.5866 22.3404 28.6257 21.9376C28.6815 21.4099 28.4638 21.0865 27.5874 20.3773C26.1136 19.1858 24.3439 18.4312 22.4849 18.1929C21.7201 18.0964 20.358 18.1532 19.6044 18.312C18.1585 18.6128 16.7908 19.2425 15.5849 20.156C14.3568 21.0865 14.0442 21.7447 14.5075 22.4142C14.7196 22.7262 14.9597 22.8567 15.3784 22.8908C15.8138 22.9305 15.9869 22.8454 16.6177 22.312C17.8738 21.2397 19.2359 20.6496 20.8381 20.4681C22.6077 20.2695 24.69 20.9787 26.2085 22.3007C26.8728 22.8681 27.0794 22.9759 27.4757 22.9532C27.6488 22.9418 27.9056 22.8738 28.0507 22.8Z" fill="#195696"/>
                            </svg>
                            <h4>WELLPATH</h4>
                        </Link>
                        <p className="adresse">MEKNES XXXXXXXX</p>
                        <p>CALL US +212 5 *********</p>
                    </div>
                    <div className="quick_links">
                        <div className="title">
                            <h2>Quick links</h2>
                        </div>
                        <div className="line"></div>
                        <div className="links">
                            {location.pathname=="/" ?<Link style={{textDecoration:"underline"}} to={"/"}>Home</Link>:<Link to={"/"}>Home</Link>}
                            {location.pathname=="/find_a_doctor" ? <Link style={{textDecoration:"underline"}} to={"/find_a_doctor"}>Find A Doctor</Link>:<Link to={"/find_a_doctor"}>Find A Doctor</Link>}
                            {location.pathname=="/services" ? <Link style={{textDecoration:"underline"}} to={"/services"}>Services</Link>:<Link to={"/services"}>Services</Link>}
                            {location.pathname=="/about_us" ?<Link style={{textDecoration:"underline"}} to={"/about_us"}>About Us</Link>:<Link to={"/about_us"}>About Us</Link>}
                            {location.pathname=="/contact" ?<Link style={{textDecoration:"underline"}} to={"/contact"}>Contact</Link>:<Link to={"/contact"}>Contact</Link>}
                        </div>
                    </div>
                    <div className="new_sletter">
                        <h2>Join Our NewSletter</h2>
                        <div className="line"></div>
                        <input type="text" placeholder="Email" />
                        <button><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.527252 16.574C0.527252 16.5881 0.53287 16.6 0.534977 16.6133C0.537787 16.633 0.539893 16.6527 0.546916 16.6723C0.553939 16.6913 0.565878 16.7074 0.576412 16.7243C0.584137 16.7355 0.587649 16.7489 0.596778 16.7594C0.598885 16.7615 0.601694 16.7622 0.603801 16.7643C0.624168 16.7861 0.649451 16.803 0.676137 16.8177C0.68316 16.8219 0.688778 16.8282 0.696503 16.831C0.730916 16.8458 0.768137 16.8549 0.808167 16.8549H15.1911C15.2304 16.8549 15.2684 16.8465 15.3028 16.831C15.3098 16.8282 15.3154 16.8212 15.3231 16.8177C15.3498 16.803 15.3751 16.7868 15.3955 16.7643C15.3976 16.7622 15.4004 16.7615 15.4025 16.7594C15.4123 16.7489 15.4151 16.7355 15.4229 16.7236C15.4341 16.7067 15.4453 16.6913 15.4524 16.6723C15.4594 16.6527 15.4615 16.633 15.4643 16.6133C15.4664 16.6 15.472 16.5881 15.472 16.574L15.4727 6.61472C15.4727 6.61191 15.4713 6.6091 15.4713 6.60559C15.4706 6.59154 15.4664 6.5775 15.4636 6.56345C15.4608 6.5473 15.4594 6.53114 15.4531 6.5157C15.451 6.51008 15.4488 6.50446 15.4467 6.49814C15.4411 6.4862 15.432 6.47707 15.425 6.46583C15.4243 6.46513 15.4243 6.46443 15.4236 6.46373C15.4158 6.45249 15.4123 6.43914 15.4032 6.42861C15.4011 6.4265 15.3983 6.4258 15.3962 6.42299C15.392 6.41808 15.387 6.41386 15.3821 6.40965C15.3807 6.40824 15.3793 6.40544 15.3779 6.40403L13.9228 5.12305L13.9221 2.78654C13.9221 2.63134 13.7963 2.50562 13.6411 2.50562H10.9521L8.18497 0.0700535C8.07892 -0.0233512 7.9195 -0.0233512 7.81416 0.0700535L5.0485 2.50562H2.35871C2.2035 2.50562 2.07779 2.63134 2.07779 2.78654V5.12305L0.622635 6.40403C0.620528 6.40544 0.619826 6.40824 0.618422 6.40965C0.613506 6.41386 0.60859 6.41808 0.604376 6.42299C0.602269 6.4251 0.59946 6.4258 0.597353 6.42861C0.588223 6.43915 0.584712 6.45249 0.576987 6.46373C0.576284 6.46443 0.576284 6.46513 0.575582 6.46583C0.568559 6.47707 0.558727 6.4862 0.553812 6.49814C0.551002 6.50376 0.549598 6.50937 0.547491 6.5157C0.541872 6.53115 0.540468 6.5473 0.536957 6.56345C0.534147 6.5775 0.529934 6.59084 0.529231 6.60559C0.529231 6.6084 0.527827 6.61121 0.527827 6.61472L0.527252 16.574ZM6.0361 11.5934L1.08909 15.9518V7.23624L6.0361 11.5934ZM7.99973 10.6123L14.4474 16.2932H1.55186L7.99973 10.6123ZM14.9104 7.23642V15.9519L9.96336 11.5936L14.9104 7.23642ZM14.7657 6.6149L13.9215 7.35862V5.87118L14.7657 6.6142V6.6149ZM7.99979 0.655329L10.1011 2.50587H5.8979L7.99925 0.655329H7.99979ZM13.3596 3.06771V7.85381L9.5384 11.2192L8.18579 10.0275C8.17596 10.019 8.16332 10.0155 8.15208 10.0085C8.13663 9.99795 8.12118 9.98742 8.10363 9.9804C8.08677 9.97337 8.06991 9.97056 8.05236 9.96705C8.0341 9.96354 8.01724 9.96003 7.99898 9.96003C7.98142 9.96003 7.96527 9.96354 7.94771 9.96705C7.92945 9.97056 7.9119 9.97408 7.89434 9.9811C7.87748 9.98812 7.86274 9.99795 7.84658 10.0085C7.83535 10.0155 7.82271 10.019 7.81287 10.0282L6.46027 11.2199L2.63908 7.85451V3.06769L13.3596 3.06771ZM2.07797 7.35868L1.23382 6.61495L2.07797 5.87193V7.35938V7.35868Z" fill="white"/>
                            </svg>
                        Join Our NewSletter</button>
                    </div>
                </div>
                <div className="line"></div>
                <div className="second_half">
                    <hr />
                    <p>COPYRIGHT</p>
                    <p>ALL RIGHTS RESERVED</p>
                </div>
            </div>
     );
}
 
export default Footer2;