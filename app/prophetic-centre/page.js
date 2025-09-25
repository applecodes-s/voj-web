'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import GallerySlider1 from '@/components/slider/GallerySlider1'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Prophetic Centre">
                <div>
                    {/* Restaurant Section */}
                    <section className="restaurant-section">
                       
                        <div className="auto-container">
                            <div className="inner-container">
                                <div className="image">
                                    <img src="assets/images/resource/restaurant.jpg" alt="" />
                                </div>
                                <div className="opening-box" style={{ backgroundImage: 'url(assets/images/resource/restaurant-1.jpg)' }} >
                                    <div className="box-inner">
                                        <h3>Opening <span>Hours</span></h3>
                                        <ul className="timing-list">
                                            <li>Mon - Thu<span>9AM - 7PM</span></li>
                                            <li>Fri- Sat<span>9AM - 5PM</span></li>
                                        </ul>
                                        <div className="closed">SUNDAY CLOSED</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Restaurant Section */}
                    
                    {/* Gallery Section Two */}
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
                    {/* End Gallery Section Two */}
           
                    
               
                </div>

            </Layout>
        </>
    )
}