
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Event() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
			<div>
					<div className="page-title">
						<div className="themeflat-container">
							<div className="row">
								<div className="col-md-12">
									<div className="page-title-heading">
										<h1 className="title">Accessories Sportwear</h1>
									</div>{/* /.page-title-captions */}
									<div className="breadcrumbs">
										<ul>
											<li><Link href="/">Shop</Link></li>
											<li><i className="icon-Arrow---Right-2" /></li>
											<li><a>Accessories</a></li>
										</ul>
									</div>{/* /.breadcrumbs */}
								</div>{/* /.col-md-12 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</div>{/* /.page-title */}
					{/* Widget event */}
					<div className="tf-widget-events">
						<div className="themeflat-container">
							{/* header style v1 */}
							<div className="title-box title-medium center-title-box">
								<span className="sub-title wow fadeInUp animated">Accessories Sportwear</span>
								<h2 className="title-section wow fadeInUp animated">First Article</h2>
							</div>{/* header style v1 */}
							<div className="widget-event">
								<div className="item wow fadeInUp animated">
									<div className="event-infomation">
										<div className="info">
											<h4><Link href="/event-details">Running Shirt</Link></h4>
											<p>
												First Lustre Article
											</p>
											<p>
												Dryfit, Polyester, Spandex
											</p>
										</div>
										<img decoding="async" src="images/evtent/event1.jpg" alt="denpasar marathon event 2023" />
									</div>
									<div className="tf-info-price">
										<h4>Price</h4>
										<p className="price"><span>Rp 250.000</span>/pcs</p>
										<Link href="/event-details" className="flat-button ">View Details</Link>
										<div className="item-event-price-bg">
										</div>
									</div>
									<div className="bg-item-event-2" />
								</div>
								<div className="item wow fadeInUp animated">
									<div className="event-infomation">
										<div className="info">
											<h4><Link href="/event-details">Half Tights</Link></h4>
											<p>
												First Lustre Article
											</p>
											<p>
												Dryfit, Polyester, Spandex
											</p>
										</div>
										<img decoding="async" src="images/evtent/event4.jpg" alt="denpasar marathon event 2023" />
									</div>
									<div className="tf-info-price">
										<h4>Ticket</h4>
										<p className="price"><span>Rp 249.000</span>/pcs</p>
										<Link href="/event-details" className="flat-button ">View Details</Link>
										<div className="item-event-price-bg">
										</div>
									</div>
									<div className="bg-item-event-2" />
								</div>
								<div className="item wow fadeInUp animated">
									<div className="event-infomation">
										<div className="info">
											<h4><Link href="/event-details">Performance Shocks</Link></h4>
											<p>
												First Lustre Article
											</p>
											<p>
												Wol, Poliester, nylon
											</p>
										</div>
										<img decoding="async" src="images/evtent/event2.jpg" alt="denpasar marathon event 2023" />
									</div>
									<div className="tf-info-price">
										<h4>Ticket</h4>
										<p className="price"><span>Rp 89.000</span>/pair</p>
										<Link href="/event-details" className="flat-button ">View Details</Link>
										<div className="item-event-price-bg">
										</div>
									</div>
									<div className="bg-item-event-2" />
								</div>
							</div>
						</div>
					</div>{/* Widget event */}
					{/* Widget form conatct*/}
					<div className="tf-widget-form-contact form-contact-v2">
						<div className="themeflat-container">
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}