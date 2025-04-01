
import Link from "next/link"

export default function Our() {
	return (
		<>

			<div className="tf-widget-our-collection main-content">
				<div className="themeflat-container">
					<div className="title-box title-small center-title-box">
						<h2 className="title-section wow fadeInUp animated">Our Collection</h2>
					</div>
					<div className="row">
						<div className="col-md-6 pd-r-col">
							<div className="tf-collection wow fadeInLeft animated">
								<div className="tf-collection-wrap">
									<div className="collection-item">
										<div className="collection-image">
											<img src="images/retinal/cls1.jpg" alt="" />
										</div>
										<div className="collection-content">
											<div className="content-slide">
												<span className="sale-up">Up To 15% Sale Off</span>
												<h3>Elevate Your Game Collection</h3>
												<p className="post">We Help You Finding To Right Shoes</p>
												<Link href="/#" className="flat-button">Shop Now</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 pd-l-col">
							<div className="row banner-tow">
								<div className="col-md-6 pd-r-col">
									<div className="tf-collection-banner wow fadeInRight animated" data-wow-delay="0.1s">
										<div className="collection-banner-wrap">
											<div className="collection-banner-item">
												<div className="banner-image">
													<img src="images/retinal/cls3.jpg" alt="Image banner" />
												</div>
												<div className="banner-content">
													<div className="content-banner">
														<span className="sale-up">Save $10</span>
														<h5><Link href="/#">Yoga &amp; Wellness Collection</Link></h5>
														<Link className="shop-now" href="/#">Shop Now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 pd-l-col">
									<div className="tf-collection-banner wow fadeInRight animated" data-wow-delay="0.5s">
										<div className="collection-banner-wrap">
											<div className="collection-banner-item">
												<div className="banner-image">
													<img src="images/retinal/cls2.jpg" alt="Image banner" />
												</div>
												<div className="banner-content">
													<div className="content-banner">
														<span className="sale-up">Save $10</span>
														<h5><Link className="text-white" href="/#">Urban Athleisure Collection</Link></h5>
														<Link className="shop-now text-white" href="/#">Shop Now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="tf-collection-one-col wow fadeInUp animated">
								<div className="collection-one-col-wrap">
									<div className="collection-one-col-item">
										<div className="one-col-image">
											<img src="images/retinal/cls4.jpg" alt="Image banner" />
										</div>
										<div className="one-col-content">
											<div className="content-banner">
												<span className="sale-up">Save $10</span>
												<h4><Link className="text-white" href="/#">Performance Essentials Collection</Link></h4>
												<Link className="shop-now text-white" href="/#">Shop Now</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
