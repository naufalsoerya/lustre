'use client'
import { useState } from "react";
import CountUp from 'react-countup'
import Layout from "../../components/layout/Layout"
import Link from "next/link"
export default function About() {
	const [isTab, setIsTab] = useState(1)
    const handleTab = (i) => {
        setIsTab(i)
    }

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
				<div>
					<div className="tf-widget-about-us main-content">
						<div className="themeflat-container">
							<div className="tf-about-us">
								<div className="row">
									<div className="col-md-6 image-wraper">
										<div className="media">
											<div className="media-v1">
												<img className=" wow fadeInLeft animated" src="images/about/mask1.png" alt="image" />
												{/* <img className="shape-media wow fadeInRight animated" src="images/about/graphic.png" alt="image" /> */}
											</div>
											{/* <img src="images/about/mask2.png" alt="image" className="image-gr wow fadeInRight animated" />
											<img src="images/about/Intersect.png" alt="image" className="intersect-img" /> */}
										</div>
									</div>
									<div className="col-md-6">
										<div className="about-box">
											{/* header style v1 */}
											<div className="title-box title-small-v2">
												{/* <span className="sub-title wow fadeInUp animated">Welcome to runclub!</span> */}
												<h2 className="title-section wow fadeInUp animated">The birth of lustre athletic</h2>

											</div>{/* header style v1 */}
											<p className="post wow fadeInUp animated">
												Lustre Athletic was born from a passion for sports. I  was a student-athlete, I embraced the entire process from training to competition. Though my enthusiasm for the sport eventually faded, the discipline it instilled became a lifelong mindset, shaping my daily life beyond athletics.
											</p> <br></br>
											<p className="post wow fadeInUp animated">
												In 2024 Lustre Athletic was founded as  a symbol of discipline and consistency delivered as a sportswear brand specialized in the design of endurance training garments. Our mission is to Craft aesthetically pleasing, high-performance sportswear that empowers endurance athletes to pursue self-discipline and achieve excellence through authentic design and inspiring story.
											</p>
											<div className="line" />
											{/* <div className="about-button-group">
												<button className="flat-button wow fadeInUp animated">Find out more</button>
											</div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>{/* Widget-about  */}
					
					{/* banner-paralax */}
					{/* <div className="tf-widget-banner"> */}
						{/* <div className="themeflat-container"> */}
							<div className="tf-banne-paralax">
								<img src="images/retinal/runclub.png" 
								alt="runclub" 
								className="wow fadeInUp animated" 
								style={{
									marginLeft: '23px',
									maxWidth: '97%',
									height: 'auto',
								}}
							/>
							</div>
						{/* </div> */}
					{/* </div> */}
					
					<div className="graphic-form background-white" />
				</div>

			</Layout>
		</>
	)
}