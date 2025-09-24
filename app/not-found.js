'use client'
import Link from "next/link"
import GallerySlider1 from '@/components/slider/GallerySlider1'
import Layout from "@/components/layout/Layout"


export default function Error404() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="404 Error">
                {/* Error Section */}
                <section className="error-section">
                    <div className="auto-container">
                        <div className="image">
                            <img src="assets/images/resource/error.png" alt="" />
                        </div>
                        <h2>Page Not Found</h2>
                        <Link href="/" className="theme-btn btn-style-two clearfix"><span className="icon"></span>Return To Home</Link>
                    </div>
                </section>
                {/* End Error Section */}
                {/* Gallery Section */}
                <section className="gallery-section-two">
                <div className="outer-container">
                    <div className="masonry-items-container row clearfix">
                    
                        {/* Gallery Block Two */}
                        <div className="gallery-block-two masonry-item col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/gallery/19.jpg" alt="" />
                                    
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
                                            
                                        </div>
                                    </div>
                                </div>
                                {/* Gallery Block Two */}
                                <div className="gallery-block-two masonry-item col-lg-12 col-md-12 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/23.jpg" alt="" />
                                           
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
                                            
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Gallery Block Two */}
                                <div className="gallery-block-two masonry-item col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/22.jpg" alt="" />
                                           
                                        </div>
                                    </div>
                                </div>

                                {/* Gallery Block Two */}
                                <div className="gallery-block-two masonry-item col-lg-12 col-md-12 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/24.jpg" alt="" />
                                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
            </div>
        </section>
                {/* End Gallery Section */}

            </Layout>

        </>
    )
}
