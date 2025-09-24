'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: '.h1n',
    prevEl: '.h1p',
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
}

export default function Banner() {
  return (
    <section className="banner-section-four">
      <Swiper {...swiperOptions} className="main-slider-carousel">
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="slide" style={{ backgroundImage: 'url(assets/images/main-slider/1.jpg)' }}>
            <div className="auto-container">
              <div className="content-box tw-text-left">
                <div className="box-inner tw-text-1lg">
                  <h1>Legacy of Prophet <br /> Vincent <br /> SelvaKumar</h1>
                  <div className="text tw-text-white tw-mb-8">
                    Built on a foundation of divine encounter and prophetic calling, our ministry <br/>
                    continues the powerful legacy established through decades of faithful service.
                  </div>
                  <div className="btn-box text-center">

                    <Link href="about" className="theme-btn btn-style-four clearfix">
                    <span className="icon flaticon-arrow-pointing-to-right"></span> read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="slide" style={{ backgroundImage: 'url(assets/images/main-slider/2.jpg)' }}>
            <div className="auto-container">
              <div className="content-box">
                <div className="box-inner">
                  <h1>Preparing Hearts for 
                  <br /> the Second Coming</h1>
                  <div className="text tw-text-white tw-mb-8">
                    Experience the power of prophetic ministry as we proclaim end-time revelations and prepare <br/>
                     believers worldwide for Christ's return through divine encounters.
                     
                  </div>
                  <div className="btn-box text-center">
                  <Link href="gallery" className="theme-btn btn-style-four clearfix">
                    <span className="icon flaticon-arrow-pointing-to-right"></span>  Gallery
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="slide" style={{ backgroundImage: 'url(assets/images/main-slider/3.jpg)' }}>
            <div className="auto-container">
              <div className="content-box">
                <div className="box-inner">
                  <h1>Powerful  <br /> Prophetic Gatherings</h1>
                  <div className="text tw-text-white tw-mb-8">
                     Experience divine encounters at our prophetic conferences where God releases fresh revelations and <br/>
                      prepares His people for the final harvest. 

                  </div>
                  <div className="btn-box text-center">
                  <Link href="about" className="theme-btn btn-style-four clearfix">
                    <span className="icon flaticon-arrow-pointing-to-right"></span> read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* ✅ Pagination element */}
        <div className="swiper-pagination"></div>
      </Swiper>

      {/* Scroll Down Btn */}
      <div className="mouse-btn-down scroll-to-target" data-target=".testimonial-section-two"></div>
    </section>
  )
}
