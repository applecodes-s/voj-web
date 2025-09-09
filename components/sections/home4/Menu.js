'use client'
import Link from "next/link"
export default function Menu() {
    return (
        <>

            {/* Menu Section Two */}
            <section className="menu-section-two">
                
                <div className="auto-container">
                <div className="text tw-text-center tw-mb-6">
                <h4 className="tw-text-black tw-text-5xl tw-mb-4">Our Ministry Programs</h4>
                    <span className="tw-text-black "> Discover the diverse ways God is moving through our prophetic ministry<br/>
                         to transform lives and prepare hearts for His coming kingdom.</span>
                                </div>
                    <div className="row clearfix">
                        
                        {/* Menu Block Three */}
                        <div className="menu-block-three col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                
                                <div className="content">
                                    <div className="menu-title">Biblical Teaching</div>
                                    <h4>Voice of Shadows</h4>
                                    {/* Menu Item */}
                                    <div className="menu-item">
                                        <h6><Link href="#">by Bro. Jonathan James and <br/> Sis. Angeline James.</Link></h6>
                                        <div className="sub-title">Powerful insights into the lesser-known yet deeply impactful men in the Bible who stood as backbone for Prophets and Apostles, revealing God's hidden heroes.</div>
                                        <h6><Link href="#">Weekly on Sundays at 10:00 <br/>AM</Link></h6>

                                    </div>
                                
                                </div>
                                <div className="image">
                                    <Link href="#"><img src="assets/images/resource/menu-35.jpg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        
                        {/* Menu Block Three */}
                        <div className="menu-block-three col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="menu-title">Prophetic Study
                                    </div>
                                    <h4>Fulfilled Prophecy</h4>
                                    {/* Menu Item */}
                                    <div className="menu-item">
                                    <h6><Link href="#">by Bro. Jonathan James and <br/> Sis. Angeline James.</Link></h6>
                                    <div className="sub-title">Enlightening exploration of Bible prophecies and their remarkable fulfillment throughout history, confirming God's  plan and unshakable promises.</div>
                                    <h6><Link href="#">Monthly on First Friday at 7:00 PM</Link></h6>

                                    </div>
                                
                                </div>
                                <div className="image">
                                    <Link href="#"><img src="assets/images/resource/menu-36.jpg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        
                        {/* Menu Block Three */}
                        <div className="menu-block-three col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="menu-title">Fasting Prayer</div>
                                    <h4>Intercessory Prayer</h4>
                                    <h6><Link href="#">by Bro. Jonathan James and <br/> Sis. Angeline James.</Link></h6>

                                    {/* Menu Item */}
                                    <div className="menu-item">
                                        {/* <h6><Link href="#">young keeps & Asparagus</Link></h6> */}
                                        <div className="sub-title">Monthly fasting prayers and intercessory gatherings where we seek God's face for nations, communities, and individuals according to Holy Spirit guidance.</div>
                                        <h6><Link href="#"> Daily at 10:00 AM and 4:00 PM  Second Saturday of each month</Link></h6>

                                       
                                    </div>
                                  
                                </div>
                                <div className="image">
                                    <Link href="#"><img src="assets/images/resource/menu-37.jpg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* End Menu Section Two */}
           
        </>
    )
}
