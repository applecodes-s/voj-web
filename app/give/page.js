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
                        <div className="text">
                        The voice of prophecy is not just for a moment—it is a divine call to prepare the nations for the return of our Lord. Every seed you sow enables us to carry the Word of the Lord to the ends of the earth, touching lives, breaking bondages, and awakening hearts to God’s purposes.



The Word declares, “Believe in the LORD your God, so shall ye be established; believe his prophets, so shall ye prosper.”(2 Chronicles 20:20). When you partner with prophetic ministry, you are not only giving—you are aligning with Heaven’s assignment for this generation.



Your offering helps us spread the prophetic word through media, outreach, and prayer, ensuring that no voice remains unheard and no region untouched. Together, we can see the fulfillment of “the earth shall be filled with the knowledge of the glory of the LORD, as the waters cover the sea.” (Habakkuk 2:14).



We invite you to sow generously and expectantly. Every seed planted is a step closer to the nations being prepared, the church being strengthened, and the Kingdom of God advancing.



Stand with us. Sow into prophecy. Together, let us proclaim His Word to the world.
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
  <div className="frape-block col-lg-6 col-md-6 col-sm-12">
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

  {/* Frape Block 2 - Bank Transfer */}
  <div className="frape-block col-lg-6 col-md-6 col-sm-12">
    <div className="inner-box">
      {/* <div className="image">
        <Link href="#"><img src="assets/images/resource/frape-2.jpg" alt="" /></Link>
      </div> */}
      <div className="lower-box">
        <h6><Link href="#">Bank Transfer</Link></h6>
        <div className="text">Direct bank transfer to our ministry account for larger donations.</div>
        <ul className="account-details mt-3">
          <li><strong>Account Name:</strong> Voice of Jesus Ministries</li>
          <li><strong>Account No:</strong> 910010023338787</li>
          <li><strong>Bank:</strong> AXIS BANK LTD.</li>
          <li><strong>Branch:</strong> RAMANATHAPURAM BRANCH</li>
          <li><strong>IFSC:</strong> UTIB0001080</li>
          <li><strong>SWIFT Code:</strong> AXISINBB109</li>
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