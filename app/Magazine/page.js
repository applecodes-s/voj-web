'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Magazine() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Magazine">
        <section className="menu-section-two">
          <div className="auto-container">
            <div className="text tw-text-center tw-mb-6">
              <h4 className="tw-text-black tw-text-5xl tw-mb-4">Download Our Magazines</h4>
              <span className="tw-text-black">
                Stay updated with our latest prophetic insights and ministry news. <br />
                Click on the magazine below to download it in PDF format.
              </span>
            </div>

            <div className="row clearfix flex justify-center flex-wrap gap-6">

              {/* Magazine Block - August */}
              <div className="menu-block-three col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="content">
                    {/* <div className="menu-title">August Edition</div> */}
                    <h4>August Edition</h4>
                    <div className="menu-item">
                      <div className="sub-title">
                       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, qui.
                      </div>
                      <h6>
                        <Link href="/pdfs/Aug.pdf" target="_blank" download>
                          Download PDF
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="image">
                    <Link href="/pdfs/Aug.pdf" target="_blank">
                      <img src="assets/images/resource/staff-4.jpg" alt="August Magazine" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Magazine Block - September */}
              <div className="menu-block-three col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="content">
                    {/* <div className="menu-title">September Edition</div> */}
                    <h4>September Edition</h4>
                    <div className="menu-item">
                      <div className="sub-title">
                       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, ut.
                      </div>
                      <h6>
                        <Link href="/pdfs/Sep.pdf" target="_blank" download>
                          Download PDF
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="image">
                    <Link href="/pdfs/Sep.pdf" target="_blank">
                      <img src="assets/images/resource/staff-5.jpg" alt="September Magazine" />
                    </Link>
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
