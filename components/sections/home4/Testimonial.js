'use client'
import Link from "next/link"

export default function Testimonial() {
  return (
    <>
      {/* Testimonial Section */}
      <section className="testimonial-section-two">
        <div
          className="icon-layer-one"
          style={{ backgroundImage: 'url(assets/images/resource/testimonial-icon.jpg)' }}
        ></div>
        <div className="auto-container">
          <div className="inner-container">
            <div
              className="icon-layer-two"
            //   style={{ backgroundImage: 'url(assets/images/resource/testimonial-icon-1.jpg)' }}
            ></div>

            {/* Single Testimonial (no slider) */}
            <div className="testimonial-block-two">
              <div className="inner-box">
                <div className="text">
                  “Surely the Sovereign Lord does nothing without <br />
                  revealing his plan to his servants the prophets."
                </div>
                <div className="designation">
                  <span>- Amos 3:7</span>
                </div>
                <div className="designation">
                  This foundational verse guides our prophetic ministry as we
                  serve as God's instruments to <br /> reveal His divine plans
                  and purposes to His people in these end times.
                </div>
              </div>
            </div>
            {/* End Single Testimonial */}
          </div>
        </div>
      </section>
      {/* End Testimonial Section */}
    </>
  )
}
