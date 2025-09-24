import Link from "next/link"
import Layout from "@/components/layout/Layout"
import GallerySlider1 from '@/components/slider/GallerySlider1'
export default function Home() {

    return (
        <>
        <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Sow Into God’s Kingdom ">
        {/* Donation Section */}
        <section className="milkshake-section">
           
            <div className="auto-container">
                <div className="inner-container">
                    <div className="big-image">
                        <img src="assets/images/resource/frappe.jpg" alt="" />
                    </div>
                    <div className="lower-content">
                        <div className="section-text">yummy</div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dicta molestiae officia, doloribus, accusamus ipsa aliquid consequuntur praesentium ea veritatis, inventore dolorum laboriosam? Itaque quia facilis vel enim nam. Eaque!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        </div>
                    </div>
                    <div className="testimonial-block-two bg-slate-300">
                            <div className="inner-box">
                             
                                <div className="text mt-4">"Whoever receives a prophet in the name of a <br/> prophet shall receive a prophet's reward."
                                
                                </div>
                                <div className="designation"><span>- Matthew 10:41</span></div>

                                <div className="designation">Your support helps carry the prophetic message to the nations and shares in the eternal reward.</div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        {/* End donaitons Section */}
        
        {/* Frape Variant Section */}
        <section className="frape-variant-section">
            <div className="auto-container">
                {/* Sec Title */}
                <div className="sec-title centered">
                    <h2>Ways to  <span>Give</span></h2>
                    <div className="designation">Choose the method that works best for you to support <br/> Voice of Jesus Ministries and join us in fulfilling God's prophetic purposes.</div>

                    <div className="separate"></div>
                </div>
                <div className="row clearfix">

  {/* Frape Block 1 - Online Giving */}
  <div className="frape-block col-lg-4 col-md-6 col-sm-12">
    <div className="inner-box">
      {/* <div className="image">
        <Link href="#"><img src="assets/images/resource/frape-1.jpg" alt="" /></Link>
      </div> */}
      <div className="lower-box">
        <h6><Link href="#">Online Giving</Link></h6>
        <div className="text">
          Secure, convenient online donations via credit card, debit card, or bank transfer.
        </div>
      </div>
    </div>
  </div>

  {/* Frape Block 2 - Bank Transfer */}
  <div className="frape-block col-lg-4 col-md-6 col-sm-12">
    <div className="inner-box">
      {/* <div className="image">
        <Link href="#"><img src="assets/images/resource/frape-2.jpg" alt="" /></Link>
      </div> */}
      <div className="lower-box">
        <h6><Link href="#">Bank Transfer</Link></h6>
        <div className="text">Direct bank transfer to our ministry account for larger donations.</div>
        <ul className="account-details mt-3">
          <li><strong>Account Name:</strong> VINCENT SELVA KUMAR</li>
          <li><strong>Account No:</strong> 910010022737183</li>
          <li><strong>Bank:</strong> AXIS BANK LTD.</li>
          <li><strong>Branch:</strong> RAMANATHAPURAM BRANCH</li>
          <li><strong>IFSC:</strong> UTIB0001080</li>
          <li><strong>SWIFT Code:</strong> AXISINBB109</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Frape Block 3 - Replace placeholder with UPI/Other */}
  <div className="frape-block col-lg-4 col-md-6 col-sm-12">
    <div className="inner-box">
      {/* <div className="image">
        <Link href="#"><img src="assets/images/resource/frape-3.jpg" alt="" /></Link>
      </div> */}
      <div className="lower-box">
        <h6><Link href="#">UPI / Mobile Payment</Link></h6>
        <div className="text">
          Give instantly using UPI apps such as Google Pay, PhonePe, or PayTM.
        </div>
        <ul className="account-details mt-3">
          <li><strong>UPI ID:</strong> voiceofjesus@upi</li>
          <li><strong>UPI ID:</strong> voiceofjesus@upi</li>
          <li><strong>UPI ID:</strong> voiceofjesus@upi</li>
        </ul>
      </div>
    </div>
  </div>

</div>

            </div>
        </section>
        {/* End Frape Variant Section */}
        

        </Layout>
        </>
    )
}