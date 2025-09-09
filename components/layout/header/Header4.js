'use client'
import Link from "next/link"
import Menu4 from "../Menu4"
import Menu5 from "../Menu5"
import MobileMenu from "../MobileMenu"
export default function Header4({ scroll, handleSidebar, handleMobileMenu }) {
    return (
        <>


        {/* Main Header / Header Style Five */}
            <header className={`main-header header-style-five ${scroll ? "fixed-header" : ""}`}>
                
                {/* Header Upper */}
                <div className="header-upper">
                    <ul className="social-list">
                        <li><Link href="https://www.facebook.com/VSK.VoiceofJesusMinistries/"><span className="icon fa fa-facebook"></span></Link></li>
                        <li><Link href="https://www.youtube.com/@theFinalalert"><span className="icon fa fa-youtube"></span></Link></li>
                        <li><Link href="https://www.instagram.com/voiceofjesusministries.vsk/?hl=en"><span className="icon fa fa-instagram"></span></Link></li>
                    </ul>
                    <div className="auto-container">
                        <div className="clearfix">
                            
                            <div className="pull-left logo-box">
                                <div className="logo"><Link href="/"><img src="assets/images/logo-2.png" alt="" title=""/></Link></div>
                            </div>
                            
                            <div className="nav-outer clearfix">
                                {/* Mobile Navigation Toggler */}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon flaticon-menu"></span></div>
                                {/* Main Menu */}
                                
                                <nav className="main-menu navbar-expand-md">
                                <Menu4 />
                                <Menu5 />
                                    
                                </nav>
                                
                                {/* Main Menu End*/}
                                <div className="outer-box clearfix">
                                    {/* Nav Btn */}
                                    <div className="nav-btn navSidebar-button" onClick={handleSidebar}><span className="icon flaticon-menu-2"></span></div>
                                </div>
                                
                            </div>
                        
                        </div>
                    </div>
                </div>
                {/* End Header Upper */}
                
                <MobileMenu handleMobileMenu={handleMobileMenu} />
            
            </header>
            {/* End Main Header */}
        </>
    )
}
