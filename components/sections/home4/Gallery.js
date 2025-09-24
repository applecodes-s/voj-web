'use client'
import Link from "next/link"
export default function Gallery() {
    return (
        <>
            {/* Gallery Section Two */}
            <section className="gallery-section-two">
                <div className="outer-container">
                    <div className="masonry-items-container row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                        {/* Gallery Block Two */}
                        <div className="gallery-block-two masonry-item">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/gallery/19.jpg" alt="" />
                                  
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        {/* Gallery Block Two */}
                        <div className="gallery-block-two masonry-item">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/gallery/20.jpg" alt="" />
                                  
                                </div>
                            </div>
                        </div>
                        {/* Gallery Block Two */}
                        <div className="gallery-block-two masonry-item">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/gallery/21.jpg" alt="" />
                                    {/* <div className="overlay-box">
                                        <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                        <div className="title">Us percipit urbanitas referrentur ea.</div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="row no-gutters">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                {/* Gallery Block Two */}
                                <div className="gallery-block-two masonry-item">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/22.jpg" alt="" />
                                           
                                        </div>
                                    </div>
                                </div>
                                
                            
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                {/* Gallery Block Two */}
                                <div className="gallery-block-two masonry-item ">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/23.jpg" alt="" />

                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                {/* Gallery Block Two */}
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
            {/* End Gallery Section Two */}
        </>
    )
}
