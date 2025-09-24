'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
    return (
        <>  
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu}></div>
                <div className="close-btn" onClick={handleMobileMenu}><span className="icon flaticon-multiply"></span></div>
                
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><img src="assets/images/logo-2.png" alt="" title="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="index-4">Home</Link>
                                  
                                </li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">About</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>                                 
                                        <li><Link href="about">About</Link></li>
                                        <li><Link href="prophetic-centre">Prophetic Centre</Link></li>
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li>
                              
                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/gallery">Gallery</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>                                 
                                        <li><Link href="gallery">Gallery</Link></li>
                                    </ul>
                                </li>
                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/gallery">Magazine</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>                                 
                                        <li><Link href="Magazine">Magazine</Link></li>
                                    </ul>
                                </li>
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="give">Give</Link>
                                  
                                  </li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

          

        </>
    )
}
export default MobileMenu;
