'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {/* Video Section Two */}
            <section className="video-section-two">
                {/* Video Box */}
                <div className="video-box">
                    <figure className="video-image">
                        <img src="assets/images/background/8.jpg" alt=""/>
                    </figure>
                    <a onClick={() => setOpen(true)} className="lightbox-image overlay-box"><span className="flaticon-play-arrow"><i className="ripple"></i></span></a>
                </div>
            </section>
            {/* End Video Section Two */}
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Ko5J6yGIaog" onClose={() => setOpen(false)} />
        </>
    )
}
