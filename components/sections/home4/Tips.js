'use client'
import Link from "next/link"
export default function Tips() {
    return (
        <>
            {/* Tips Section */}
            <section className="tips-section">
                {/* <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/resource/history-icon.png)' }} ></div> */}
                <div className="auto-container">
                    <div className="row clearfix">
                    
                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image">
                                    <img src="assets/images/resource/history-1.jpg" alt="" />
                                </div>
                                <div className="image-two">
                                    <img src="assets/images/resource/history-2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Sec Title */}
                                <div className="sec-title centered">
                                    <div className="title">About</div>
                                    <h2>Voice of Jesus Ministries</h2>
                                    <div className="separate"></div>
                                    <div className="text">A pioneering prophetic ministry dedicated to proclaiming end-time prophecies and preparing the world for the Second Coming of the King of kings, Lord Jesus Christ.</div>
                                </div>
                                <div className="btns-box text-center">
                                <Link href="about" className="theme-btn btn-style-four clearfix">
                    <span className="icon flaticon-arrow-pointing-to-right"></span> read more
                    </Link>
                                    {/* <Link href="about" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Read More</Link> */}
                                </div>
                                {/* <div className="signature-image">
                                    <img src="assets/images/icons/signature.png" alt="" />
                                </div> */}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* End Tips Section */}
        </>
    )
}
