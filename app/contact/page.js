
import Layout from "@/components/layout/Layout"
import GallerySlider1 from '@/components/slider/GallerySlider1'
import Link from "next/link"

export default function Home() {

    return (
        <>
    <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Contact">
        {/* Contact Page Section */}
        <section className="contact-page-section">
            <div className="auto-container">
                {/* Sec Title */}
                <div className="sec-title centered">
                    <div className="title">Get in touch</div>
                    <h2>With us<span className="theme_color"></span></h2>
                    <div className="separate"></div>
                    <div className="text">We'd love to hear from you. Reach out to us for prayer requests, <br/>
                        ministry inquiries, or any questions you may have.</div>
                </div>
                <div className="row clearfix">
                
                    {/* Form Column */}
                    <div className="form-column col-lg-8 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="title-box">
                                <h4>Drop us a line</h4>
                                <div className="text">Your email address will not be published. Required fields are marked *</div>
                            </div>
                            
                            {/* Contact Form */}
                            <div className="contact-form">
                                <form method="post"  id="contact-form">
                                    <div className="row clearfix">
                                    
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <textarea name="message" placeholder="Your Comment"></textarea>
                                        </div>
                                    
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input type="text" name="username" placeholder="Your Name"/>
                                        </div>
                                        
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input type="email" name="email" placeholder="Your Email"/>
                                        </div>
                                        
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <button type="submit" className="theme-btn btn-style-four clearfix"><span className="icon flaticon-arrow-pointing-to-right"></span>Send</button>
                                        </div>
                                        
                                    </div>
                                </form>
                                {/* Contact Form */}
                            </div>
                            
                        </div>
                    </div>
                    
                    {/* Info Column */}
                    <div className="info-column col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <ul className="info-list">
                                <li>
                                    <strong>Voice of Jesus <br/> Ministries International</strong>
                                    N G O Colony <br/>
Anna Nagar <br/>
Ramanathapuram <br/>
Tamil Nadu 623 501 
                                </li>
                                <li>
                                    <strong>Opening Hours</strong>
                                    Monday – Friday 09:00 – 23:00 <br/> Saturday 09:00 – 22:00
                                </li>
                                <li>
                                    <strong>Contact</strong>
                                   +91 9788404333 <br/>
                                   +91 9788404222
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* End Contact Page Section */}
        

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

    </Layout>
    </>
    )
}