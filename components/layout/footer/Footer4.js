import Link from "next/link"
export default function Footer4() {
    return (
        <>
            
        {/* Main Footer */}
            <footer className="footer-style-two">
                <div className="auto-container">
                    {/* Widgets Section */}
                    <div className="widgets-section">
                        <div className="row clearfix">
                            
                            {/* Big Column */}
                            <div className="big-column col-lg-6 col-md-12 col-sm-12">
                                <div className="row clearfix">
                                    
                                    {/*Footer Column*/}
                                    <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                        <div className="footer-widget logo-widget">
                                            <div className="logo">
                                                <Link href="/"><img src="assets/images/logo.png" alt="" /></Link>
                                            </div>
                                            <div className="text">A prophetic ministry proclaiming <br/> end-time prophecies and preparing the world for the Second Coming of Jesus Christ.</div>
                                        </div>
                                    </div>
                                    
                                    {/*Footer Column*/}
                                    <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                        <div className="footer-widget contact-widget">
                                            <h6>Contact us</h6>
                                            <ul className="contact-list">
                                                {/* <li><Link href="mailto:voiceofjesusministries.com">www.voiceofjesusministries.com</Link></li> */}
                                                <li><Link href="mailto:vincentselvakumaar@gmail.com">vincentselvakumaar@gmail.com</Link></li>
                                                <li><Link href="tel:+91 9788404222">+91 9788404222</Link></li>
                                                <li><Link href="tel:+91 9788404333">+91 9788404333</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            {/* Big Column */}
                            <div className="big-column col-lg-6 col-md-12 col-sm-12">
                                <div className="row clearfix">
                                    
                                    {/*Footer Column*/}
                                    <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                        <div className="footer-widget visit-widget">
                                            <h6>Visit</h6>
                                            <div className="text">NGO Colony, Anna Nagar <br/> Ramanathapuram, <br/> Tamil Nadu 623 501 </div>
                                        </div>
                                    </div>
                                    
                    
                                    {/*Footer Column*/}
                                    <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                        <div className="footer-widget social-widget">
                                            <h6>Follow Us Now</h6>
                                            <ul className="social-list">
                                                <li><Link href="https://www.facebook.com/VSK.VoiceofJesusMinistries/"><span className="icon fa fa-facebook"></span>facebook</Link></li>
                                                <li><Link href="https://www.instagram.com/voiceofjesusministries.vsk/?hl=en"><span className="icon fa fa-instagram"></span>instagram</Link></li>
                                                <li><Link href="https://www.youtube.com/@theFinalalert"><span className="icon fa fa-youtube"></span>youtube</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="copyright">&copy; 2024 <Link href="/">VOJM</Link> All Rights Reserved.</div>
                    </div>
                </div>
            </footer>

        </>
    )
}
