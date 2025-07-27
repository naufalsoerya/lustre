
import Layout from "../../components/layout/Layout"
import Link from "next/link"
export default function Blog() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
				<div>
					{/* Blog Posts */}
					<section className="main-content blog-posts">
						<div className="themeflat-container">
							<div className="row">
								<div className="col-md-12 col-lg-9 col-xl-9 col-xxl-9 widget-blog-content">
									<div className="post-wrap">
										<article className="entry format-standard wow fadeInUp animated">
											<div className="feature-post">
												<img src="images/blog/blog1.jpg" alt="image" />
											</div>{/* /.feature-post */}
											<div className="main-post">
												<div className="tag">
													<ul>
														<li>
															<Link href="/blog-single">Newslatter</Link>
														</li>
													</ul>
												</div>
												<h2 className="entry-title"><Link href="/blog-single">First drop article: inspired by the still mind</Link>
												</h2>
												<div className="entry-meta"></div>
												<Link className="more-link" href="/blog-single">Read More</Link>
												{/* /.entry-meta */}
											</div>{/* /.main-post */}
										</article>
										<article className="entry format-standard wow fadeInUp animated">
											<div className="feature-post">
												<img src="images/blog/blog2.jpg" alt="image" />
											</div>{/* /.feature-post */}
											<div className="main-post">
												<div className="tag">
													<ul>
														<li>
															<Link href="/blog-single">Running</Link>
														</li>
													</ul>
												</div>
												<h2 className="entry-title"><Link href="/blog-single">The Best Running Shoes for Every
													Terrain: Find Your
													Perfect Fit</Link>
												</h2>
												<div className="entry-meta"></div>
												<Link className="more-link" href="/blog-single">Read More</Link>
												{/* /.entry-meta */}
											</div>{/* /.main-post */}
										</article>
										<div className="blog-pagination wow fadeInUp animated">
											<ul className="flat-pagination clearfix">
												<li><Link href="/#">1</Link></li>
												<li className="active">2</li>
												<li><Link href="/#"><i className="icon-Arrow---Right-2" /></Link></li>
											</ul>
										</div>{/* /.blog-pagination */}
									</div>
								</div>{/* /.col-md-9 */}
								<div className="col-md-12 col-lg-3 col-xl-3 col-xxl-3">
									<div className="sidebar">
										<div className="widget widget-tags">
											<h5 className="widget-title">Popular Tags</h5>
											<div className="tag">
												<ul>
													<li>
														<Link href="#">Newsletter</Link>
													</li>
													<li>
														<Link href="#">Performance</Link>
													</li>
													<li>
														<Link href="#">Wellness</Link>
													</li>
												</ul>
											</div>
										</div>{/* /.widget-tags */}
										
										<div className="widget widget-form-subscribe">
											<h3>Subscribe For Daily Newsletter</h3>
											<img src="images/blog/subscribe.png" alt="image" />
											<form action="/">
												<input type="email" id="email-sb" name="email" placeholder="Your email address" />
												<input type="submit" defaultValue="Follow" />
											</form>
										</div>{/* /.widget-Archive */}
									</div>{/* /.sidebar */}
								</div>{/* /.col-md-3 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</section>
				</div>

			</Layout>
		</>
	)
}