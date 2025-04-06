
import Link from "next/link"

export default function Course1() {
	return (
		<>

			<div className="tf-widget-course main-content">
				<div className="themeflat-container">
					<div className="tf-course">
						{/* header style v1 */}
						<div className="title-box center-title-box title-large">
							<span className="sub-title wow fadeInUp animated">New Arrival</span>
							<h2 className="title-section wow fadeInUp animated">Sports Running</h2>
						</div>{/* header style v1 */}
						<div className="row">
							<div className="col-md-4 course">
								<div className="course-item-wrap wow fadeInUp animated">
									<Link href="/blog-single" className="image-course">
										{/* <span className="date-course">21 Oct</span> */}
										<img src="images/retinal/tutorial1.jpg" alt="" style={{ width: '500px', height: '500px' }} />
									</Link>
									<div className="content-course" style={{ textAlign: 'center' }}>
										<h5 className="title-course"><Link href="/blog-single">Running Tshirt</Link></h5>
										<p className="description-course">Rp 250.000</p>
									</div>
									{/* <Link href="/blog-single" className="flat-button">Read more</Link> */}
								</div>
							</div>
							<div className="col-md-4 course">
								<div className="course-item-wrap wow fadeInUp animated">
									<Link href="/blog-single" className="image-course">
										{/* <span className="date-course">21 Oct</span> */}
										<img src="images/retinal/tutorial2.jpg" alt="" style={{ width: '500px', height: '500px' }}/>
									</Link>
									<div className="content-course" style={{ textAlign: 'center' }}>
										<h5 className="title-course"><Link href="/blog-single">Half Tights</Link></h5>
										<p className="description-course">Rp 249.000</p>
									</div>
									{/* <Link href="/blog-single" className="flat-button">Read more</Link> */}
								</div>
							</div>
							<div className="col-md-4 course">
								<div className="course-item-wrap wow fadeInUp animated">
									<Link href="/blog-single" className="image-course">
										{/* <span className="date-course">21 Oct</span> */}
										<img src="images/retinal/tutorial3.jpg" alt="" style={{ width: '500px', height: '500px' }}/>
									</Link>
									<div className="content-course" style={{ textAlign: 'center' }}>
										<h5 className="title-course"><Link href="/blog-single">Performance Socks</Link></h5>
										<p className="description-course">Rp 89.000</p>
									</div>
									{/* <Link href="/blog-single" className="flat-button">Read more</Link> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
