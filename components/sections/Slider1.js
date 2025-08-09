'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	effect: "fade",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
}

export default function Slider1() {
	return (
		<>

			<Swiper {...swiperOptions} className="tf-slider-widget swiper mySwiper">
				<div className="tf-slider swiper-wrapper">
					<SwiperSlide className="tf-banner swiper-slide">
						<div className="image-slider">
							<img src="images/slides/slide1.jpg" alt="image" style={{ width: '1470px', height: '858px' }}/>
							<div className="overlay" />
						</div>
						<div className="themeflat-container">
							<div className="slide-item">
								<div className="silde-content">
									{/* <span className="flat-sub-slider d-none">SALE UP TO 50% OFF!</span> */}
									<h1 className="flat-title-slider">Running Collection 01</h1>
									<p className="flat-description-slider">Debuting our first collection, we decided to release running wear collection that strike balance in function and aesthetic meant for those who seek greatness.
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</div>
				<div className="swiper-pagination" />
			</Swiper>
		</>
	)
}
