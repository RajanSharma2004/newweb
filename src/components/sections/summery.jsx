import React from 'react'
import profile from "../../assets/images/about/profile.png"
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'
const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I’m Rajan Sharma, a Brand Identity and UI/UX designer.
                                </h2>
                                <p>I am a Nepal-based Brand Identity and UI/UX designer with a strong focus on user-centric design, branding, and visual storytelling. With experience across diverse industries, I bring creativity and cultural depth to every project.</p>
                                <p>My passion lies in creating unique visual identities that deeply resonate with both clients and their audiences, delivering memorable brand experiences that merge creativity with cultural relevance.</p>
                                <div className="hero-btns">
                                    <a href="contact.html" className="theme-btn">Get In touch<i> <RiMailSendLine size={16} /> </i></a>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery