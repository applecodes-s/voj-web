'use client'
import Link from "next/link"
export default function Menu3() {
    return (
        <>

            {/* Menus Section */}
            <section className="menus-section style-two">
                {/* <figure className="menu-bottom-image">
                    <img src="assets/images/resource/menu-9.jpg" alt=""/>
                </figure> */}
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title centered">
                        <div className="title">Upcoming Events</div>
                        <h2>At Prophetic Centre</h2>
                        <div className="separate"></div>
                    </div>
                    <div className="row clearfix">
                    
                        {/* Menu Column */}
                        <div className="menu-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                            
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-1.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="menu">End - Time Fasting Prayer</Link></h6>
                                        <div className="title">Vincent SelvaKumar</div>
                                        <div className="price-box">
                                            <span className="price">Monthly 2nd Saturday</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-3.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="menu">Tarry Meeting</Link></h6>
                                        <div className="title">Vincent SelvaKumar</div>
                                        <div className="price-box">
                                        <span className="price">Alternate Months 2nd Saturday</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-5.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="menu">Watch Night service</Link></h6>
                                        <div className="title">Vincent SelvaKumar</div>
                                        <div className="price-box">
                                            <span className="price">31st Dec</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-7.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="menu">New Year Service</Link></h6>
                                        <div className="title">Vincent SelvaKumar</div>
                                        <div className="price-box">
                                            <span className="price">Ist Jan</span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        {/* Menu Column */}
                        <div className="menu-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">

                        <div className="gallery-block-two masonry-item">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/gallery/20.jpg" alt="" />
                                    <div className="overlay-box">
                                        <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                        <div className="title">Us percipit urbanitas referrentur ea.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                
                                {/* Menu Block */}
                                {/* <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-2.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="menu">Coca Cola</Link></h6>
                                        <div className="title">Carbonated Drinks</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div> */}
                                
                                {/* Menu Block */}
                                {/* <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-4.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="menu">Papsi</Link></h6>
                                        <div className="title">Carbonated Drinks</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div> */}
                                
                                {/* Menu Block */}
                                {/* <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-6.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="menu">Mirinda</Link></h6>
                                        <div className="title">Carbonated Drinks</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div> */}
                                
                                {/* Menu Block */}
                                {/* <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-8.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="menu">Fanta</Link></h6>
                                        <div className="title">Carbonated Drinks</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* End Menus Section */}
        </>
    )
}
