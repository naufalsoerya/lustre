'use client'
import { useState } from "react";
import CountUp from 'react-countup'
import Layout from "@/components/layout/Layout"
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
					<div className="page-title">
						<div className="themeflat-container">
							<div className="row">
								<div className="col-md-12">
									<div className="page-title-heading">
										<h1 className="title">About Us</h1>
									</div>{/* /.page-title-captions */}
									<div className="breadcrumbs">
										<ul>
											<li><Link href="/">Homepage</Link></li>
											<li><i className="icon-Arrow---Right-2" /></li>
											<li><a>About Us</a></li>
										</ul>
									</div>{/* /.breadcrumbs */}
								</div>{/* /.col-md-12 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</div>

					<div className="tf-widget-about-us main-content">
						<div className="themeflat-container">
							<div className="tf-about-us">
								<div className="row">
									<div className="col-md-6 image-wraper">
										<div className="media">
											<div className="media-v1">
												<img className="mask-media wow fadeInLeft animated" src="images/about/mask1.png" alt="image" />
												<img className="shape-media wow fadeInRight animated" src="images/about/graphic.png" alt="image" />
											</div>
											<img src="images/about/mask2.png" alt="image" className="image-gr wow fadeInRight animated" />
											<img src="images/about/Intersect.png" alt="image" className="intersect-img" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="about-box">
											<img src="images/about/graphic-box.png" alt="image shape" />
											{/* header style v1 */}
											<div className="title-box title-small-v2">
												<span className="sub-title wow fadeInUp animated">Welcome to runclub!</span>
												<h2 className="title-section wow fadeInUp animated">Lustre Athletic - The Pursuit of Self Discipline
												</h2>

											</div>{/* header style v1 */}
											<p className="post wow fadeInUp animated">
												Welcome to our vibrant running community, where we organize exciting running events,
												provide helpful running tutorials, and keep you informed with the latest running news.
											</p>
											<div className="line" />
											<div className="about-button-group">
												<button className="flat-button wow fadeInUp animated">Find out more</button>
												<div className="infor-about">
													<img src="images/about/info.png" alt="" />
													<div className="info">
														<div className="name wow fadeInUp animated">Chris pad</div>
														<div className="job wow fadeInUp animated">Co - Founder Zunzo</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>{/* Widget-about  */}
					
					{/* banner-paralax */}
					<div className="tf-widget-banner">
						<div className="themeflat-container">
							<div className="tf-banne-paralax">
								<img src="images/retinal/runclub.png" alt="runclub" className="wow fadeInUp animated" />
							</div>
						</div>
					</div>{/* banner-paralax */}
					
					<div className="graphic-form background-white" />
				</div>

			</Layout>
		</>
	)
}