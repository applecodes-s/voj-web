
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import GallerySlider1 from '@/components/slider/GallerySlider1'
export default function Home() {

    return (
        <>
        <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Gallery">
        
        {/* Gallery Page Section */}
        <section className="gallery-page-section">
            <div className="outer-container">
                <div className="masonry-items-container row no-gutters clearfix">
                    
                
                    {/* Gallery Block Two */}
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="gallery-block-two masonry-item">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/gallery/19.jpg" alt="" />
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Gallery Block Two */}
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="gallery-block-two masonry-item">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/gallery/20.jpg" alt="" />
                                   
                                </div>
                            </div>
                        </div>

                        <div className="gallery-block-two masonry-item">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/gallery/21.jpg" alt="" />
                                   
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    {/* Gallery Block Two */}
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="row no-gutters">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="gallery-block-two masonry-item">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/22.jpg" alt="" />
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="gallery-block-two masonry-item">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/23.jpg" alt="" />
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="gallery-block-two masonry-item">
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
            </div>
        </section>
        {/* End Gallery Page Section */}
        
    
        </Layout>
    </>
    )
}