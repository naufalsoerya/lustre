'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "@/node_modules/react-modal-video/css/modal-video.css"
import Link from "next/link"

export default function Benefit1() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<div className="tf-widget-benefit background-black">
				<div className="themeflat-container">
					<div className="tf-benefit">
						{/* header style v2 */}
						<div className="title-box-v2 center-title-box title-large">
							<h2 className="title-section wow fadeInUp animated" style={{ marginBottom: '15px' }}>The Blueprints</h2>
							<span className="sub-title wow fadeInUp animated">Guidance Along The Pursuit</span>
							<button className="flat-button wow fadeInUp animated">Read More</button>
							<div className="about-button-group">
							</div>
						</div>{/* header style v2 */}
					</div>
					<div className="row team">
						<div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
							<div className="team-item wow fadeInUp animated " data-wow-delay="0.1s">
								<div className="team-image">
									<img src="images/member/team1.jpg" alt="Team member" style={{ width: '420px', height: '420px' }}/>
									<div className="shape-team" />
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
							<div className="team-item wow fadeInUp animated " data-wow-delay="0.3s">
								<div className="team-image">
									<img src="images/member/team2.jpg" alt="Team member" style={{ width: '420px', height: '420px' }}/>
									<div className="shape-team" />
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
							<div className="team-item wow fadeInUp animated " data-wow-delay="0.5s">
								<div className="team-image">
									<img src="images/member/team3.jpg" alt="Team member"style={{ width: '420px', height: '420px' }} />
									<div className="shape-team" />
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
							<div className="team-item wow fadeInUp animated " data-wow-delay="0.7s">
								<div className="team-image">
									<img src="images/member/team4.jpg" alt="Team member" style={{ width: '420px', height: '420px' }}/>
									<div className="shape-team" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
