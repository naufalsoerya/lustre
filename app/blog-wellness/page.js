
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Blog() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
				<div>
					<div className="page-title">
						<div className="themeflat-container">
							<div className="row">
								<div className="col-md-12">
									<div className="page-title-heading">
										<h1 className="title">latest news</h1>
									</div>{/* /.page-title-captions */}
									<div className="breadcrumbs">
										<ul>
											<li><Link href="/">Homepage</Link></li>
											<li> <i className="icon-Arrow---Right-2" /></li>
											<li><a>Latest News</a></li>
										</ul>
									</div>{/* /.breadcrumbs */}
								</div>{/* /.col-md-12 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</div>{/* /.page-title */}
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
															<Link href="/blog-single">Running</Link>
														</li>
													</ul>
												</div>
												<h2 className="entry-title"><Link href="/blog-single">The Science Behind Running: How It
													Benefits Your
													Body and Mind</Link>
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
										<article className="entry format-standard wow fadeInUp animated">
											<div className="feature-post">
												<img src="images/blog/blog3.jpg" alt="image" />
											</div>{/* /.feature-post */}
											<div className="main-post">
												<div className="tag">
													<ul>
														<li>
															<Link href="/blog-single">Running</Link>
														</li>
													</ul>
												</div>
												<h2 className="entry-title"><Link href="/blog-single">From Couch to 5K: A Step-by-Step
													Guide to Becoming a
													Runner</Link>
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
														<Link href="/#">Race</Link>
													</li>
													<li>
														<Link href="/#">Running</Link>
													</li>
													<li>
														<Link href="/#">Running</Link>
													</li>
													<li>
														<Link href="/#">Training</Link>
													</li>
													<li>
														<Link href="/#">Events</Link>
													</li>
												</ul>
											</div>
										</div>{/* /.widget-tags */}
										<div className="widget widget-popular-news">
											<h5 className="widget-title">Recent Posts</h5>
											<ul className="popular-news clearfix">
												<li>
													<div className="thumb">
														<img src="images/blog/post1.jpg" alt="image" />
													</div>
													<div className="text">
														<h6>
															<Link href="/blog-single">10 Effective Tips to Improve Your Running
																Form</Link>
														</h6>
														<p className="date-popular-news">Oct 12, 2023</p>
													</div>
												</li>
												<li>
													<div className="thumb">
														<img src="images/blog/post2.jpg" alt="image" />
													</div>
													<div className="text">
														<h6><Link href="/blog-single">Choosing the Right Running Shoes: A Complete
															Guide</Link></h6>
														<p className="date-popular-news">Oct 12, 2023</p>
													</div>
												</li>
												<li>
													<div className="thumb">
														<img src="images/blog/post3.jpg" alt="image" />
													</div>
													<div className="text">
														<h6><Link href="/blog-single">Nutrition Strategies for Peak Performance in
															Running</Link></h6>
														<p className="date-popular-news">Oct 12, 2023</p>
													</div>
												</li>
											</ul>{/* /.popular-news */}
										</div>{/* /.widget-popular-news */}
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