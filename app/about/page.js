'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import GallerySlider1 from '@/components/slider/GallerySlider1'



const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}




export default function About() {
   
    return (
        <>
        <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="About Us">
        {/* History Section */}
        <section className="history-section-two">
            <div className="auto-container">
                <div className="row clearfix">
                
                    {/* Image Column */}
                    <div className="image-column col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image">
                                <img src="assets/images/resource/history-3.jpg" alt="" />
                            </div>
                           
                        </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="content-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* Sec Title */}
                            <div className="sec-title">
                                <div className="title">Our Vision and History </div>
                                <h2>Founded in 1978 by <span className="theme_color">Vincent SelvaKumar</span></h2>
                                <div className="text">Voice of Jesus Ministries International – a pioneering prophetic ministry dedicated to proclaiming end-time prophecies and preparing the world for the Second Coming of the King of kings, Lord Jesus Christ – was founded by Bro. Vincent Selva Kumar in 1978.
                                    <br/> <br/>     Bro. Vincent Selva Kumar, known for his divine encounter with God during his college days, surrendered his life to the Lord with the sole objective of sharing prophetic messages aimed at preparing the world for the Second Coming of the Lord.</div>
                            </div>
                            <ul className="list-style-two">
                                <li>Cras at mi luctus, tincidunt urna eu, posuere enim</li>
                                <li>Vivamus elementum lorem vitae quam tincidunt</li>
                                <li>Suspendisse accumsan eros eu erat condimentum</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* End History Section */}
        
        {/* Gallery Section Two */}
        <section className="gallery-section-two">
                <div className="outer-container">
                    <div className="masonry-items-container row clearfix">
                    
                        {/* Gallery Block Two */}
                        <div className="gallery-block-two masonry-item col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/gallery/19.jpg" alt="" />
                                    <div className="overlay-box">
                                        <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                        <div className="title">Us percipit urbanitas referrentur ea.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Gallery Block Two */}
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="row">
                                <div className="gallery-block-two masonry-item col-lg-12 col-md-12 col-sm-12">
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
                                {/* Gallery Block Two */}
                                <div className="gallery-block-two masonry-item col-lg-12 col-md-12 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/23.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                                <div className="title">Us percipit urbanitas referrentur ea.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Block Two */}
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="row">
                                {/* Gallery Block Two */}
                                <div className="gallery-block-two masonry-item col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/21.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                                <div className="title">Us percipit urbanitas referrentur ea.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Gallery Block Two */}
                                <div className="gallery-block-two masonry-item col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/22.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                                <div className="title">Us percipit urbanitas referrentur ea.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Gallery Block Two */}
                                <div className="gallery-block-two masonry-item col-lg-12 col-md-12 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/24.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                                <div className="title">Us percipit urbanitas referrentur ea.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
            </div>
        </section>
        {/* End Gallery Section Two */}
        
        {/* Staff Section */}
        <section className="staff-section">
            <div className="auto-container">
                {/* Sec Title */}
                <div className="sec-title centered">
                    <div className="title">Current Leadership</div>
                    <h2>Bro. Jonathan James & Sis. Angeline Jonathan                    </h2>
                    <div className="text">Bro. Jonathan James and Sis. Angeline Jonathan, kin of Bro. Vincent Selva Kumar,
                         have taken upon themselves <br/> the responsibility of continuing  the ministry and legacy of his vision. <br/> <br/>
                        Having embraced this mission, they have dedicated their lives to carrying it forward to the people 
                        of this end-time generation.  <br/> Grounded in prayer, prophetic revelation, and extraordinary oratory skills,
                         they have remained steadfast <br/> in their commitment to serving God.</div>
                </div>
                <div className="row clearfix justify-content-center">
                
                    {/* Staff Block */}
               
                    
                    {/* Staff Block */}
                    <div className="staff-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <Link href="#"><img src="assets/images/resource/staff-2.jpg" alt="" /></Link>
                                <div className="overlay-box">
                                    <div className="content">
                                        <h6><Link href="#">Jusica Malina</Link></h6>
                                        <div className="designation">Pastry Chef</div>
                                        <ul className="social-list">
                                            <li><Link href="#"><span className="icon fa fa-instagram"></span></Link></li>
                                            <li><Link href="#"><span className="icon fa fa-facebook-square"></span></Link></li>
                                            <li><Link href="#"><span className="icon fa fa-twitter-square"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Staff Block */}
                    <div className="staff-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <Link href="#"><img src="assets/images/resource/staff-3.jpg" alt="" /></Link>
                                <div className="overlay-box">
                                    <div className="content">
                                        <h6><Link href="#">Jusica Malina</Link></h6>
                                        <div className="designation">Pastry Chef</div>
                                        <ul className="social-list">
                                            <li><Link href="#"><span className="icon fa fa-instagram"></span></Link></li>
                                            <li><Link href="#"><span className="icon fa fa-facebook-square"></span></Link></li>
                                            <li><Link href="#"><span className="icon fa fa-twitter-square"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
      

            </Layout>
        </>
    )
}


