
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogSingle() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
				<div>
					<div className="page-title page-title-blog text-left">
						<div className="themeflat-container">
							<div className="row">
								<div className="col-md-12">
									<div className="page-title-heading">
										<h1 className="title">Articles detail</h1>
									</div>{/* /.page-title-captions */}
									<div className="breadcrumbs">
										<ul>
											<li><Link href="/">Articles</Link></li>
											<li> <i className="icon-Arrow---Right-2" /></li>
											<li><a>Detail</a></li>
										</ul>
									</div>{/* /.breadcrumbs */}
								</div>{/* /.col-md-12 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</div>{/* /.page-title */}
					{/* Blog Posts */}
					<section className="main-content blog-content-single">
						<div className="themeflat-container">
							<div className="row">
								<div className="col-md-12 col-lg-9 col-xl-9 col-xxl-9 widget-blog-content">
									<div className="post-wrap">
										<article className="entry format-standard">
											<div className="main-post">
												<div className="tag">
													<ul>
														<li>
															<Link href="/#">Running</Link>
														</li>
													</ul>
												</div>
												<h2 className="entry-title-single">
													10 Essential Tips for Beginner Runners: Start Your Running Journey Right
												</h2>
												<div className="entry-meta">
													<span className="author line"><img src="images/blog/Avatar.png" alt="" /><Link href="/#">by
														Tony Nguyen </Link></span>
													<span className="date line"><Link href="/#">Oct 12, 2023</Link></span>
												</div>{/* /.entry-meta */}
												<div className="entry-content">
													<p className="post">Kim Kardashian West needs no introduction. In the 14 years since she
														first graced
														our screens in Keeping Up With The Kardashians, she has built her KKW beauty
														empire, filmed her show, wrapped her show, become a billionaire, studied law,
														campaigned for the rights of death row inmates, travelled the world to attend
														events such as Paris Fashion Week, raised four children and launched her wildly
														successful shapewear brand SKIMS.</p>
												</div>{/* /.entry-post */}
												<div className="feature-post">
													<div className="entry-image">
														<img src="images/blog/blog-details.jpg" alt="image" />
													</div>{/* /.entry-image */}
												</div>{/* /.feature-post */}
												<blockquote className="alignleft">
													<i className="icon-clarity_block-quote-line"> </i>
													<div className="wrap-text">
														<p className="blockqoute-text">
															“For bras, I love our Cotton Jersey Scoop Bralette – it’s lined with this
															amazing power mesh so you get great support and is so comfy I can sleep in
															it.”</p>
														<span className="whisper">- Anthony Bourdain</span>
													</div>
												</blockquote>
												<div className="content-post-single">
													<h4 className="title-single">How did SKIMS start?</h4>
													<p className="post">
														This is such a hard question! Honestly, every time we drop a new collection I
														get
														obsessed with it. The pieces that have been my go-tos though are some of our
														simplest styles that we launched with. I wear our Fits Everybody Thong every
														single
														day – it is the only underwear I have now, it’s so comfortable and stretchy and
														light enough that you can wear anything over it.
													</p>
													<p className="post">
														For bras, I love our Cotton Jersey Scoop Bralette – it’s lined with this amazing
														power mesh so you get great support and is so comfy I can sleep in it. I also
														love
														our Seamless Sculpt Bodysuit – it’s the perfect all in one sculpting, shaping
														and
														smoothing shapewear piece with different levels of support woven throughout.
													</p>
												</div>
												<div className="wrap-share">
													<div className="tag">
														<span>Tag:</span>
														<ul>
															<li>
																<Link href="/#">Race</Link>
															</li>
															<li>
																<Link href="/#">Running</Link>
															</li>
															<li>
																<Link href="/#">Gym</Link>
															</li>
														</ul>
													</div>
													<div className="share-post">
														<span>Share</span>
														<ul className="flat-socials">
															<li>
																<Link href="/#"><i className="icon-twitter" /></Link>
															</li>
															<li>
																<Link href="/#"><i className="icon-dribbble" /></Link>
															</li>
															<li>
																<Link href="/#"><i className="icon-behance" /></Link>
															</li>
															<li>
																<Link href="/#"><i className="icon-pinterest" /></Link>
															</li>
														</ul>
													</div>
												</div>
											</div>{/* /.main-post */}
										</article>
									</div>{/* /.post-wrap */}
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