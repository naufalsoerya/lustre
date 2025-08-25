"use client"
import Layout from "../../components/layout/Layout"
import ModalProduct from "../../components/layout/ModalProduct";
import Link from "next/link"
import { useEffect, useState } from "react";

export default function Event() {
	const [products, setProducts] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/products?categories=unisex"); 
				const data = await res.json();
				setProducts(data); 
			} catch (err) {
				console.error("Failed to fetch products:", err);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
				<div>
					{/* <div className="tf-widget-events">
						<div className="themeflat-container">
							
							<div className="widget-event">
								{products.map((product, index) => (
									<div className="item wow fadeInUp animated" key={index}>
										<div className="event-infomation">
											<div className="info">
												<h4><Link href='#' onClick={() => setSelectedProduct(product)}>{product.name}</Link></h4>
												<p>{product.description}</p>
												<p>{product.materials}</p>
											</div>
											<img decoding="async" src={product.urlHeadline} alt={product.name} />
										</div>
										<div className="tf-info-price">
											<h4>Price</h4>
											<p className="price">
												<span>
													{new Intl.NumberFormat('id-ID', {
													style: 'currency',
													currency: 'IDR',
													minimumFractionDigits: 0,
													maximumFractionDigits: 0,
													}).format(product.price)}
												</span>
											</p>
											<div className="flat-button w-60" onClick={() => setSelectedProduct(product)}>View Details</div>
											<div className="item-event-price-bg" />
										</div>
										<div className="bg-item-event-2" />
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="tf-widget-form-contact form-contact-v2">
						<div className="themeflat-container">
						</div>
					</div> */}

					<div className="tf-widget-course main-content">
						<div className="themeflat-container">
							<div className="tf-course">
								<div className="row">
									{products.map((product, index) => (
										<div className="col-md-4 course">
											<div className="course-item-wrap wow fadeInUp animated">
												<Link href='#' onClick={() => setSelectedProduct(product)}>
													<img src={product.urlHeadline} alt="" style={{ width: '450px', height: '400px' }} />
												</Link>
												<div className="content-course" style={{ textAlign: 'center' }}>
													<h5 className="title-course"><Link href='#' onClick={() => setSelectedProduct(product)}>{product.name}</Link></h5>
													<p className="price">
														<span>
															{new Intl.NumberFormat('id-ID', {
															style: 'currency',
															currency: 'IDR',
															minimumFractionDigits: 0,
															maximumFractionDigits: 0,
															}).format(product.price)}
														</span>
													</p>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</Layout>

			{selectedProduct && (
                <ModalProduct
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
		</>
	)
}