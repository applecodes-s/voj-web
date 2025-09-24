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
                                            <li>Mon - Thu<span>9AM - 9PM</span></li>
                                            <li>Fri- Sat<span>10AM - 10PM</span></li>
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
                    
                    {/* Faq Section */}
                    <section className="faq-section">
                        <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/7.jpg)' }} ></div>
                        <div className="auto-container">
                            {/* Sec Title */}
                            <div className="sec-title centered">
                                <div className="title">funfact</div>
                                <h2>Faq</h2>
                                <div className="separate"></div>
                            </div>
                            <div className="row clearfix">
                                
                                {/* Accordion Column */}
                                <div className="accordion-column col-lg-6 col-md-12 col-sm-12">
                                    {/* Accordian Box */}
                                    <ul className="accordion-box">
                                              
                                        {/*Block*/}
                                        <li className={isActive.key == 1 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(1)}>
                                            <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus flaticon-plus-symbol"></span> <span className="icon icon-minus flaticon-substract"></span></div><span>01.</span> Lorem ipsum dolor sit amet consectetur.
                                            </div>
                                            <div className="acc-content">
                                                <div className="content">
                                                    <div className="text">
                                                        <p>Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. Ansed dictas accumsan. Nam sint atqui voluptatibus an, pro ne malis semper perpetua. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        {/*Block*/}
                                        <li className={isActive.key == 2 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(2)}>
                                            <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus flaticon-plus-symbol"></span> <span className="icon icon-minus flaticon-substract"></span></div><span>02.</span> intellegam. Ansed dictas accumsan</div>
                                            <div className="acc-content current">
                                                <div className="content">
                                                    <div className="text" onClick={() => handleToggle(2)}>
                                                        <p>Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. Ansed dictas accumsan. Nam sint atqui voluptatibus an, pro ne malis semper perpetua. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        
                                        {/*Block*/}
                                        <li className={isActive.key == 3 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(3)}>
                                            <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus flaticon-plus-symbol"></span> <span className="icon icon-minus flaticon-substract"></span></div><span>03.</span> pro ne malis semper perpetua.</div>
                                            <div className="acc-content">
                                                <div className="content">
                                                    <div className="text">
                                                        <p>Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. Ansed dictas accumsan. Nam sint atqui voluptatibus an, pro ne malis semper perpetua. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                                
                                {/* Accordion Column */}
                                <div className="accordion-column col-lg-6 col-md-12 col-sm-12">
                                    {/* Accordian Box */}
                                    <ul className="accordion-box">
                                                    
                                        {/*Block*/}
                                        <li className={isActive.key == 4 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(4)}>
                                            <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus flaticon-plus-symbol"></span> <span className="icon icon-minus flaticon-substract"></span></div><span>01.</span> Lorem ipsum dolor sit amet consectetur.t</div>
                                            <div className="acc-content">
                                                <div className="content">
                                                    <div className="text">
                                                        <p>Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. Ansed dictas accumsan. Nam sint atqui voluptatibus an, pro ne malis semper perpetua. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        {/*Block*/}
                                        <li className={isActive.key == 5 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(5)}>
                                            <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus flaticon-plus-symbol"></span> <span className="icon icon-minus flaticon-substract"></span></div><span>02.</span> intellegam. Ansed dictas accumsan</div>
                                            <div className="acc-content current">
                                                <div className="content">
                                                    <div className="text">
                                                        <p>Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. Ansed dictas accumsan. Nam sint atqui voluptatibus an, pro ne malis semper perpetua. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        
                                        {/*Block*/}
                                        <li className={isActive.key == 6 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(6)}>
                                            <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus flaticon-plus-symbol"></span> <span className="icon icon-minus flaticon-substract"></span></div><span>03.</span> pro ne malis semper perpetua.</div>
                                            <div className="acc-content">
                                                <div className="content">
                                                    <div className="text">
                                                        <p>Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. Ansed dictas accumsan. Nam sint atqui voluptatibus an, pro ne malis semper perpetua. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    {/* End Faq Section */}
                    
               
                </div>

            </Layout>
        </>
    )
}