
import Layout from "../../components/layout/Layout"
import Link from "next/link"
export default function BlogSingle() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
				<div>
					
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
															<Link href="/#">Newsletter</Link>
														</li>
													</ul>
												</div>
												<h2 className="entry-title"><Link href="/blog-single">First drop article: inspired by the still mind</Link></h2>
												<div className="entry-content">
													<p className="text-justify" style={{ textAlign: 'justify' }}>
														We kicked off our first drop by focusing on running apparel, we are fully aware that our mission is to deliver the message of being disciplined and consistent through endurance training garments. We agreed that running is a friendly sport, everyone can have easy access to running. We talked to a lot of people who take marathon seriously and it turns out that it is a very painful sport. To run for 42 km at a certain pace with so many external factors during the race, running is all about mental readiness and how to win against yourself. 
													</p>
												</div>
												<div className="entry-content">
													<p className="text-justify" style={{ textAlign: 'justify' }}>
														In the process of creating our first running tee, we were scrapping ideas on how to deliver a message through our product. We often question ourselves on how to represent our mission in our product. We believe that good design can make people feel a certain way and we are trying to do it without a  text or mantra printed all over the product.  That's where we decided to play with colors and abstract visuals.
													</p>
												</div>
												<div className="entry-content">
													<p className="text-justify" style={{ textAlign: 'justify' }}>
														We came up with the ideas on creating a visual abstract that were inspired by human brain waves. There’s a frequency of a brain wave called beta wave, at that state people will be at their best state of being alert and active thinking which indicates that a person is being focused on a certain task. The abstract visual will represent a state of mind on being focused and shard shape yet calming with cool tones.
													</p>
												</div>
												<div className="col-span-12 mb-5">
													<div className="team-item wow fadeInUp animated" data-wow-delay="0.1s">
														<img 
														src="images/blog/gambar3.jpg" 
														alt="Team member" 
														className="w-[1000px] max-w-full mx-auto"
														/>
														<div className="shape-team" />
													</div>
												</div>
												<div className="entry-content">
													<p className="text-justify" style={{ textAlign: 'justify' }}>
														The running shirt debuts in two striking colorways, each meticulously chosen to embody the spirit of performance and style. The darker hue, infused with a vivid white contrast, radiates unapologetic boldness and pristine clarity, commanding attention with its sharp, dynamic edge. This powerful combination reflects the fearless drive of the athlete, exuding confidence and precision in every stride. Conversely, the lighter shade channels a cool, composed energy, blending serene tones with a focused intensity. This harmonious mix captures a sense of calm determination.
													</p>
												</div>
												{/* <div className="feature-post">
													<div className="entry-image">
														<img src="images/blog/blog-details.jpg" alt="image" />
													</div>
												</div> */}
												<div className="row team">
													<div className="col-6">
														<div className="team-item wow fadeInUp animated " data-wow-delay="0.1s">
															<div className="team-image">
																<img src="images/blog/gambar1.jpg" alt="Team member" style={{ width: '420px', height: '420px' }}/>
																<div className="shape-team" />
															</div>
														</div>
													</div>
													<div className="col-6">
														<div className="team-item wow fadeInUp animated " data-wow-delay="0.3s">
															<div className="team-image">
																<img src="images/blog/gambar2.jpg" alt="Team member" style={{ width: '420px', height: '420px' }}/>
																<div className="shape-team" />
															</div>
														</div>
													</div>
												</div>	
												<div className="wrap-share">
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