import { RiBookLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card year={'July 2024 - Present'} title={'Graphics Gesign Mentor'} institution={'Skill Shikshya '} />
                                    <Card year={'June 2024 - Present'} title={'Graphics and Motion Deisgner'} institution={'Vrit Technologies '} />
                                    <Card year={'July 2023 - April 2024'} title={'Visual and Product Deisgner'} institution={'Nexorith Nepal '} />
                                    <Card year={'October 2021 - June 2023'} title={'Graphics Designer'} institution={'Bijaya group of Companies'} />
                                    <Card year={'January 2021 - June 2021'} title={'Graphics Designer'} institution={'Digital Everest'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    {/* <Card year={'2013 - 2015'} title={'Bachelor Degree of Information Technology'} institution={'State University bangladesh'} /> */}
                                    {/* <Card year={'2021 - 2024'} title={'Higher secoundery Education'} institution={'Premium College United VC'} /> */}
                                    <Card year={'2021 - 2023'} title={'High School Degree'} institution={'Orient College- GCE A Level'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}