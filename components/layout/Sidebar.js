import Link from "next/link"

export default function Sidebar({ isSidebar, handleSidebar }) {
    return (
        <>
    <div className={`xs-sidebar-group info-group info-sidebar ${isSidebar ? "isActive" : ""}`}>
		<div className="xs-overlay xs-bg-black" onClick={handleSidebar}></div>
		<div className="xs-sidebar-widget">
			<div className="sidebar-widget-container">
				<div className="widget-heading">
					<Link href="#" className="close-side-widget"  onClick={handleSidebar}>
						X
					</Link>
				</div>
				<div className="sidebar-textwidget">
					
					
					<div className="sidebar-info-contents">
						<div className="content-inner">
							<div className="logo">
								<Link href="/"><img src="assets/images/logo.png" alt="" /></Link>
							</div>
							<div className="content-box">
								<h2>About Us</h2>
								<p className="text">A pioneering prophetic ministry dedicated to proclaiming end-time prophecies and preparing the world for the Second Coming of the King of kings, Lord Jesus Christ.</p>
								<Link href="about" className="theme-btn btn-style-four clearfix">
                    <span className="icon flaticon-arrow-pointing-to-right"></span> read more
                    </Link>							</div>
							<div className="contact-info">
								<h2>Contact Info</h2>
								<ul className="list-style-one">
									<li><span className="icon fa fa-location-arrow"></span>Voice of Jesus Ministries International</li>
									<li><span className="icon fa fa-phone"></span>(+91) 9788404333</li>
									<li><span className="icon fa fa-envelope"></span>voiceofjesus@gmail.com</li>
									<li><span className="icon fa fa-clock-o"></span>Week Days: 09.00 to 18.00 Sunday: Closed</li>
								</ul>
							</div>
						
							<ul className="social-box">
								<li className="facebook"><Link href="https://www.facebook.com/VSK.VoiceofJesusMinistries/" className="fa fa-facebook-f"></Link></li>
								<li className="instagram"><Link href="https://www.youtube.com/@theFinalalert" className="fa fa-youtube"></Link></li>
								<li className="youtube"><Link href="https://www.instagram.com/voiceofjesusministries.vsk/?hl=en" className="fa fa-instagram"></Link></li>
							</ul>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>


        </>
    )
}
